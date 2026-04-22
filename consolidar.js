// Consolida todos los JSON crudos en data/raw/ a un único listings.js consumible
// por el visor. Normaliza campos, calcula USD/m², distancia a Añelo, coordenadas
// (reales o centroide de localidad con jitter), y flags de relevancia industrial.

const fs = require('fs');
const path = require('path');

const RAW_DIR = path.join(__dirname, 'data', 'raw');
const OUT_FILE = path.join(__dirname, 'data', 'out', 'listings.js');
const TC_USD = 1410; // blue venta 2026-04-20 dolarapi.com
const ANELO = [-38.3472, -68.7878];

// Centroides aproximados de localidades
const CENTROIDES = {
  'Añelo': [-38.3472, -68.7878],
  'Rincón de los Sauces': [-37.3833, -68.9333],
  'Neuquén': [-38.9516, -68.0591],
  'Neuquén capital': [-38.9516, -68.0591],
  'Centenario': [-38.8297, -68.1336],
  'Plottier': [-38.9647, -68.2358],
  'Cutral Có': [-38.9366, -69.2294],
  'Plaza Huincul': [-38.9262, -69.2395],
  'San Patricio del Chañar': [-38.6300, -68.2789]
};

// Haversine km
function haversine(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const toRad = d => (d * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return +(2 * R * Math.asin(Math.sqrt(a))).toFixed(1);
}

// Jitter determinista por URL para que markers sin coords reales no se superpongan
function jitter(url, range = 0.012) {
  let h = 0;
  for (let i = 0; i < url.length; i++) h = ((h << 5) - h + url.charCodeAt(i)) | 0;
  const dx = ((h & 0xffff) / 0xffff - 0.5) * range * 2;
  const dy = (((h >> 16) & 0xffff) / 0xffff - 0.5) * range * 2;
  return [dx, dy];
}

function normalizarLocalidad(s) {
  if (!s) return null;
  const map = {
    'anelo': 'Añelo', 'añelo': 'Añelo',
    'rincon de los sauces': 'Rincón de los Sauces', 'rincón de los sauces': 'Rincón de los Sauces',
    'centenario': 'Centenario',
    'plottier': 'Plottier',
    'cutral co': 'Cutral Có', 'cutral có': 'Cutral Có',
    'plaza huincul': 'Plaza Huincul',
    'san patricio del chañar': 'San Patricio del Chañar',
    'neuquen': 'Neuquén', 'neuquén': 'Neuquén'
  };
  return map[s.toLowerCase().trim()] || s;
}

function precioM2Usd(precio, moneda, sup) {
  if (!precio || !sup || sup <= 0) return null;
  const usd = moneda === 'ARS' ? precio / TC_USD : precio;
  return +(usd / sup).toFixed(2);
}

function esIndustrialRelevante(r) {
  const t = ((r.titulo || '') + ' ' + (r.descripcion || '') + ' ' + (r.direccion_o_zona || '')).toLowerCase();
  const kw = ['parque industrial', 'industrial', 'logístic', 'logistic', 'nodo las cortaderas', 'ruta 17', 'ruta 7', 'galpón'];
  const zonaInd = r.zonificacion === 'industrial' || r.zonificacion === 'logística' || r.zonificacion === 'mixta';
  const keyword = kw.some(k => t.includes(k));
  const tamanoUtil = r.superficie_m2 && r.superficie_m2 >= 500;
  return (zonaInd || keyword) && tamanoUtil;
}

function leerTodos() {
  const archivos = fs.readdirSync(RAW_DIR).filter(f => f.endsWith('.json'));
  const records = [];
  const seen = new Set();

  for (const f of archivos) {
    const raw = JSON.parse(fs.readFileSync(path.join(RAW_DIR, f), 'utf8'));
    const portal = raw.portal;
    const listings = raw.listings || [];
    for (const l of listings) {
      if (!l.url) continue;
      if (seen.has(l.url)) continue;
      seen.add(l.url);

      const localidad = normalizarLocalidad(l.localidad || raw.localidad_query);
      const centroide = CENTROIDES[localidad] || ANELO;
      let lat = l.lat, lon = l.lon;
      if (!lat || !lon) {
        const [dx, dy] = jitter(l.url);
        lat = centroide[0] + dx;
        lon = centroide[1] + dy;
      }

      const sup = l.superficie_m2 || null;
      const pm2 = precioM2Usd(l.precio, l.moneda, sup);

      const rec = {
        id: f.replace('.json','') + '-' + (l.url.split('--').pop() || Math.random().toString(36).slice(2, 8)),
        portal,
        url: l.url,
        titulo: l.titulo || null,
        localidad,
        direccion_o_zona: l.direccion_o_zona || null,
        superficie_m2: sup,
        precio: l.precio || null,
        moneda: l.moneda || null,
        precio_usd: l.precio ? (l.moneda === 'ARS' ? +(l.precio / TC_USD).toFixed(0) : l.precio) : null,
        precio_m2_usd: pm2,
        servicios: l.servicios || [],
        zonificacion: l.zonificacion || null,
        escritura: l.escritura || null,
        vendedor: l.vendedor || null,
        descripcion: (l.descripcion || '').slice(0, 400),
        operacion: l.operacion || 'venta',
        lat, lon,
        distancia_anelo_km: haversine(lat, lon, ANELO[0], ANELO[1]),
        duplicado_de: l.duplicado_de || null,
        coord_estimada: !l.lat,
        nota: l.nota || null
      };
      rec.industrial_relevante = esIndustrialRelevante(rec);
      records.push(rec);
    }
  }
  return records;
}

const records = leerTodos();

// Estadísticas rápidas
const stats = {
  total: records.length,
  duplicados_marcados: records.filter(r => r.duplicado_de).length,
  con_precio: records.filter(r => r.precio).length,
  con_superficie: records.filter(r => r.superficie_m2).length,
  con_usd_m2: records.filter(r => r.precio_m2_usd).length,
  industriales: records.filter(r => r.industrial_relevante).length,
  por_localidad: {}
};
for (const r of records) {
  stats.por_localidad[r.localidad || 'sin_localidad'] = (stats.por_localidad[r.localidad || 'sin_localidad'] || 0) + 1;
}

const js = `// Generado ${new Date().toISOString()} — ${records.length} listings
window.METADATA = ${JSON.stringify({
  tc_usd_blue_venta: TC_USD,
  fuente_tc: 'dolarapi.com',
  fecha_scrape: '2026-04-20',
  stats
}, null, 2)};

window.LISTINGS = ${JSON.stringify(records, null, 1)};
`;

fs.writeFileSync(OUT_FILE, js);
console.log(`OK: ${records.length} listings escritos en ${OUT_FILE}`);
console.log(`Stats:`, JSON.stringify(stats, null, 2));
