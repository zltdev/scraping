// Historial de chequeos del scraping (tarea programada `daily-scraping`).
// Cada entrada registra qué URLs aparecieron o desaparecieron respecto de la corrida anterior.
// Formato:
//   fecha: YYYY-MM-DD
//   snapshot_base: fecha del snapshot contra el que se comparó
//   resumen_por_fuente: { fuente: { snapshot, hoy, agregadas, bajadas } }
//   cambios: [{ fuente, tipo: 'agregada'|'bajada', url, nota? }]
//   nota: texto libre con caveats
// El más reciente va primero.

window.UPDATES = [
  {
    fecha: "2026-05-29",
    snapshot_base: "2026-05-28",
    resumen_por_fuente: {
      "argenprop — Añelo":                         { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Centenario":                    { snapshot: 20, hoy: 20, agregadas: 1, bajadas: 1, nota: "Entra 19746183 (familia 1974x, alta real); sale 18183850 (familia 1818x, viejo). p1 llena + p2 → la baja del 1818x es desplazamiento FIFO a p2, no baja real." },
      "argenprop — San Patricio del Chañar":       { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Cutral Có":                     { snapshot: 1,  hoy: 1,  agregadas: 0, bajadas: 0 },
      "argenprop — Neuquén capital":               { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Plaza Huincul":                 { snapshot: 5,  hoy: 5,  agregadas: 1, bajadas: 1, nota: "Entra 19752901 (familia 1975x); sale 19547171 (familia 1954x). Sin p2 → continúa la re-publicación del corredor del 28-05 (1953x→1974x; ahora 1954x→1975x)." },
      "argenprop — Plottier":                      { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Rincón de los Sauces":          { snapshot: 4,  hoy: 4,  agregadas: 0, bajadas: 0 },
      "argenprop — Campana":                       { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Zárate":                        { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "icasas — Añelo":                            { snapshot: null, hoy: null, agregadas: null, bajadas: null, nota: "Omitido: la paginación rota orden entre cargas y el diff no es confiable." },
      "vacamuertapropiedades — home (terrenos)":   { snapshot: 4,  hoy: 4,  agregadas: 0, bajadas: 0, nota: "Los 4 slugs de terreno son idénticos al 28-05 (pid9, pid67, pid127, pid263). Hoy la home respondió desde vaca-muerta.propiedades.ar (3.ª variante de dominio); pids sin cambios." }
    },
    cambios: [
      { fuente: "argenprop — Centenario", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-centenario--19746183", nota: "ID familia 1974xxxxx — alta real. Misma generación que el par 1974x que entró en Plaza Huincul el 28-05." },
      { fuente: "argenprop — Centenario", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-centenario--18183850", nota: "ID familia 1818x (vieja), en el set base desde el 22-05. Con p1 llena (20) + p2, la salida es desplazamiento FIFO a p2 más que baja real." },
      { fuente: "argenprop — Plaza Huincul", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-plaza-huincul--19752901", nota: "ID familia 1975xxxxx — el más nuevo de la fuente, posterior al par 1974x del 28-05." },
      { fuente: "argenprop — Plaza Huincul", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-plaza-huincul--19547171", nota: "ID familia 1954x. Era una de las 3 publicaciones 'del medio' que quedaron intactas el 28-05. Sin p2 → cambio real del set, no FIFO. Corredor Gabriel López (Mat. 380)." }
    ],
    nota: "Gap de 1 día desde 2026-05-28. **9 de 11 fuentes activas idénticas** al 28-05; dos fuentes con movimiento, ambas 1+/1−. **Centenario:** entra 19746183 (familia 1974x, alta real) y sale 18183850 (familia 1818x, viejo) — como Centenario tiene p1 llena (20) + p2, la baja del 1818x es muy probablemente desplazamiento FIFO a p2 (materializa el FIFO que el 28-05 anticipaba al entrar contenido nuevo), no venta/despublicación. **Plaza Huincul:** entra 19752901 (familia 1975x) y sale 19547171 (familia 1954x) — sin p2 (5 publicaciones, todas del corredor Gabriel López Mat. 380), confirma y continúa la re-publicación del corredor del 28-05 (entonces 1953x→1974x; ahora 1954x→1975x). Verificación de hipótesis del 28-05: el par 1974x (19744743/19744744) sigue en p1 y el par 1953x no volvió → re-publicación confirmada, no yo-yo. Las 9 altas reales de familia 1972x-1973x del 27-05 siguen las 9 en p1 (ninguna cayó por FIFO; la que salió en Centenario es 1818x vieja). vacamuertapropiedades: 4 slugs idénticos; nueva variante de dominio vaca-muerta.propiedades.ar. No se regenera listings.js (las 2 altas son URLs sin detalle de precio/superficie y ni Centenario ni Plaza Huincul están en el foco industrial). icasas omitido."
  },
  {
    fecha: "2026-05-28",
    snapshot_base: "2026-05-27",
    resumen_por_fuente: {
      "argenprop — Añelo":                         { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Centenario":                    { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — San Patricio del Chañar":       { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Cutral Có":                     { snapshot: 1,  hoy: 1,  agregadas: 0, bajadas: 0 },
      "argenprop — Neuquén capital":               { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Plaza Huincul":                 { snapshot: 5,  hoy: 5,  agregadas: 2, bajadas: 2, nota: "Único cambio del día. Par viejo 1953x sale, par nuevo 1974x entra. Sin p2 en esta fuente." },
      "argenprop — Plottier":                      { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Rincón de los Sauces":          { snapshot: 4,  hoy: 4,  agregadas: 0, bajadas: 0 },
      "argenprop — Campana":                       { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Zárate":                        { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "icasas — Añelo":                            { snapshot: null, hoy: null, agregadas: null, bajadas: null, nota: "Omitido: la paginación rota orden entre cargas y el diff no es confiable." },
      "vacamuertapropiedades — home (terrenos)":   { snapshot: 4,  hoy: 4,  agregadas: 0, bajadas: 0, nota: "vacamuertapropiedades.com.ar respondió; los 4 slugs de terreno son idénticos al 27-05 (pid9, pid67, pid127, pid263)." }
    },
    cambios: [
      { fuente: "argenprop — Plaza Huincul", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-plaza-huincul--19744743", nota: "ID familia 1974xxxxx — nuevo, posterior a las altas 1972x-1973x del 27-05. Par secuencial con 19744744." },
      { fuente: "argenprop — Plaza Huincul", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-plaza-huincul--19744744", nota: "ID familia 1974xxxxx — par secuencial con 19744743. Plaza Huincul: toda la oferta es del corredor Gabriel López (Mat. 380)." },
      { fuente: "argenprop — Plaza Huincul", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-plaza-huincul--19530527", nota: "Estaba en el set base desde el 22-05 (par secuencial 1953x). Sale junto con 19530528." },
      { fuente: "argenprop — Plaza Huincul", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-plaza-huincul--19530528", nota: "Par secuencial con 19530527. Sin p2 en la fuente → baja real o re-publicación del mismo corredor con los IDs 1974x." }
    ],
    nota: "Gap de 1 día desde 2026-05-27. Vuelve la cadencia diaria estable. **Día casi-espejo**: 10 de 11 fuentes activas idénticas al 27-05; único cambio en Plaza Huincul (2+/2−). El par viejo 19530527/19530528 (familia 1953x) sale y entra el par nuevo 19744743/19744744 (familia 1974x). Como Plaza Huincul no tiene p2 (5 publicaciones, todas del corredor Gabriel López Mat. 380) y ambos pares son secuenciales, el patrón más probable es re-publicación del mismo corredor (despublica 2 lotes viejos y republica con IDs nuevos para refrescar la fecha), no churn de paginación. Las 9 altas reales de familia 1972x-1973x detectadas el 27-05 (centenario--19730244, neuquen--19729622, confluencia-urbana--19720356, plottier--19722979, cardales-chico--19733052, zarate 19724323/19724463, smithfield 19724148/19724805) **siguen las 9 en p1 hoy** — confirma que eran publicaciones nuevas reales y pegajosas, no rotación. No se regenera listings.js (las 2 altas son URLs sin detalle de precio/superficie y Plaza Huincul está fuera del foco industrial del proyecto). icasas omitido. Nota técnica: este run también restauró la visibilidad del panel de Updates en el visor — el filtro por zona descartaba las entradas combinadas sin campo `zona` (todas las diarias desde el 22-05), así que el changelog no se veía; ahora las entradas sin `zona` se muestran en ambas zonas."
  },
  {
    fecha: "2026-05-25",
    snapshot_base: "2026-05-24",
    resumen_por_fuente: {
      "argenprop — Añelo":                         { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Centenario":                    { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — San Patricio del Chañar":       { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Cutral Có":                     { snapshot: 1,  hoy: 1,  agregadas: 0, bajadas: 0 },
      "argenprop — Neuquén capital":               { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Plaza Huincul":                 { snapshot: 5,  hoy: 5,  agregadas: 0, bajadas: 0 },
      "argenprop — Plottier":                      { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Rincón de los Sauces":          { snapshot: 4,  hoy: 4,  agregadas: 0, bajadas: 0 },
      "argenprop — Campana":                       { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Zárate":                        { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "icasas — Añelo":                            { snapshot: null, hoy: null, agregadas: null, bajadas: null, nota: "Omitido: la paginación rota orden entre cargas y el diff no es confiable." },
      "vacamuertapropiedades — home (terrenos)":   { snapshot: 4,  hoy: 4,  agregadas: 0, bajadas: 0, nota: "Hoy el dominio guionado vaca-muerta-propiedades.com devolvió ECONNREFUSED; vacamuertapropiedades.com.ar respondió y listó los mismos 4 slugs de terreno (pid9, pid67, pid127, pid263)." }
    },
    cambios: [],
    nota: "Gap de 1 día desde 2026-05-24. **Segundo día espejo perfecto consecutivo** — las 11 fuentes activas devolvieron exactamente el mismo set que ayer (0 altas / 0 bajas en todas). 0 URLs rotadas sobre 134 activas. La probabilidad de coincidencia exacta 2 días seguidos por rotación orgánica es prácticamente nula — refuerza la hipótesis de caché del CDN de argenprop sirviendo la misma p1 desde el 23-05 (fin de semana largo del 25 de Mayo + carga editorial débil). vacamuertapropiedades: el dominio guionado que apareció ayer hoy no responde, el .com.ar sigue siendo el canónico operativo. No se regenera listings.js. Si el 26-05 vuelve a ser día espejo (3.º consecutivo), conviene forzar re-scrape de las fuentes más activas (Neuquén, Centenario, Plottier) ignorando caché para descartar congelamiento real de p1 en origen."
  },
  {
    fecha: "2026-05-24",
    snapshot_base: "2026-05-23",
    resumen_por_fuente: {
      "argenprop — Añelo":                         { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Centenario":                    { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — San Patricio del Chañar":       { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Cutral Có":                     { snapshot: 1,  hoy: 1,  agregadas: 0, bajadas: 0 },
      "argenprop — Neuquén capital":               { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Plaza Huincul":                 { snapshot: 5,  hoy: 5,  agregadas: 0, bajadas: 0 },
      "argenprop — Plottier":                      { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Rincón de los Sauces":          { snapshot: 4,  hoy: 4,  agregadas: 0, bajadas: 0 },
      "argenprop — Campana":                       { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Zárate":                        { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "icasas — Añelo":                            { snapshot: null, hoy: null, agregadas: null, bajadas: null, nota: "Omitido: la paginación rota orden entre cargas y el diff no es confiable." },
      "vacamuertapropiedades — home (terrenos)":   { snapshot: 4,  hoy: 4,  agregadas: 0, bajadas: 0, nota: "La home ahora responde desde vaca-muerta-propiedades.com (con guiones, sin .ar). Slugs y pids idénticos." }
    },
    cambios: [],
    nota: "Gap de 1 día desde 2026-05-23. **Día espejo perfecto** — las 11 fuentes activas devolvieron exactamente el mismo set que ayer (0 altas / 0 bajas en todas). 0 URLs rotadas sobre 134 activas. No había ocurrido en chequeos diarios previos (rango histórico 4-20 URLs rotadas). Drivers posibles: fin de semana de carga editorial débil (sábado 24-05) y/o caché del CDN de argenprop sirviendo misma p1. vacamuertapropiedades migró a dominio guionado (vaca-muerta-propiedades.com sin .ar) — los pid de los 4 terrenos siguen siendo los mismos. Sin candidatos a alta real. No se regenera listings.js."
  },
  {
    fecha: "2026-05-23",
    snapshot_base: "2026-05-22",
    resumen_por_fuente: {
      "argenprop — Añelo":                         { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Centenario":                    { snapshot: 20, hoy: 20, agregadas: 2, bajadas: 2 },
      "argenprop — San Patricio del Chañar":       { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Cutral Có":                     { snapshot: 1,  hoy: 1,  agregadas: 1, bajadas: 1 },
      "argenprop — Neuquén capital":               { snapshot: 20, hoy: 20, agregadas: 2, bajadas: 2 },
      "argenprop — Plaza Huincul":                 { snapshot: 5,  hoy: 5,  agregadas: 0, bajadas: 0 },
      "argenprop — Plottier":                      { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Rincón de los Sauces":          { snapshot: 4,  hoy: 4,  agregadas: 0, bajadas: 0 },
      "argenprop — Campana":                       { snapshot: 20, hoy: 20, agregadas: 1, bajadas: 1, nota: "Primera vez que entra al chequeo diario. Baseline = raw del 2026-05-22." },
      "argenprop — Zárate":                        { snapshot: 20, hoy: 20, agregadas: 4, bajadas: 4, nota: "Primera vez que entra al chequeo diario. Baseline = raw del 2026-05-22." },
      "icasas — Añelo":                            { snapshot: null, hoy: null, agregadas: null, bajadas: null, nota: "Omitido: la paginación rota orden entre cargas y el diff no es confiable." },
      "vacamuertapropiedades — home (terrenos)":   { snapshot: 4,  hoy: 4,  agregadas: 0, bajadas: 0 }
    },
    cambios: [
      { fuente: "argenprop — Centenario", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-centenario--18183850", nota: "ID familia 18.18M, mismo bloque que los 1818xxxx ya presentes en p1." },
      { fuente: "argenprop — Centenario", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-centenario--18406420", nota: "ID familia 18.4M." },
      { fuente: "argenprop — Centenario", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-centenario--14683059", nota: "Había entrado el 22-05 (ID viejo familia 14.6M). Sale en 1 día — churn de paginación rápido." },
      { fuente: "argenprop — Centenario", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-centenario--18641375", nota: "Estaba en p1 el 22-05." },

      { fuente: "argenprop — Cutral Có", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-cutral-co--19699001", nota: "ID nuevo familia 1969xxxxx — candidato a alta real." },
      { fuente: "argenprop — Cutral Có", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-cutral-co--19661313", nota: "Era la agregada del 22-05. La única publicación de la fuente rotó otra vez." },

      { fuente: "argenprop — Neuquén capital", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-area-centro-oeste--18814037", nota: "ID familia 18.8M, vuelve a p1." },
      { fuente: "argenprop — Neuquén capital", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-valentina-sur-urbana--8214534", nota: "Reaparece — fue bajada el 22-05. Churn de paginación confirmado, no era baja real." },
      { fuente: "argenprop — Neuquén capital", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-confluencia-urbana--17982638", nota: "Estaba en p1 el 22-05." },
      { fuente: "argenprop — Neuquén capital", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-neuquen--6714000", nota: "ID muy viejo (familia 6.7M), sale de p1." },

      { fuente: "argenprop — Campana", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-la-reserva-cardales--18045092", nota: "ID familia 18.04M en La Reserva Cardales." },
      { fuente: "argenprop — Campana", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-cardales-chico--19003709", nota: "Estaba en el raw del 22-05." },

      { fuente: "argenprop — Zárate", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-saavedra-zarate--12392637", nota: "ID viejo familia 12.3M, entra a p1." },
      { fuente: "argenprop — Zárate", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-zarate--17933835" },
      { fuente: "argenprop — Zárate", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-zarate--17960780" },
      { fuente: "argenprop — Zárate", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-zarate--18445693" },
      { fuente: "argenprop — Zárate", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-smithfield--18434140" },
      { fuente: "argenprop — Zárate", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-smithfield--19535726" },
      { fuente: "argenprop — Zárate", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-zarate--18431215" },
      { fuente: "argenprop — Zárate", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-zarate--19166726" }
    ],
    nota: "Gap de 1 día desde 2026-05-22. Rotación baja (20 URLs cambiaron sobre 11 fuentes activas) — consistente con chequeos diarios previos. Highlights: (1) valentina-sur-urbana--8214534 reaparece confirmando churn de paginación (era 'bajada' el 22-05); (2) Cutral Có rota otra vez su única publicación (19661313 → 19699001); (3) Zárate y Campana entran al chequeo diario por primera vez con baseline del raw 22-05. No se regenera listings.js."
  },
  {
    fecha: "2026-05-22",
    snapshot_base: "2026-04-25",
    resumen_por_fuente: {
      "argenprop — Añelo":                         { snapshot: 20, hoy: 20, agregadas: 2, bajadas: 2 },
      "argenprop — Centenario":                    { snapshot: 20, hoy: 20, agregadas: 5, bajadas: 5 },
      "argenprop — San Patricio del Chañar":       { snapshot: 20, hoy: 20, agregadas: 2, bajadas: 2 },
      "argenprop — Cutral Có":                     { snapshot: 1,  hoy: 1,  agregadas: 1, bajadas: 1 },
      "argenprop — Neuquén capital":               { snapshot: 20, hoy: 20, agregadas: 7, bajadas: 7 },
      "argenprop — Plaza Huincul":                 { snapshot: 5,  hoy: 5,  agregadas: 5, bajadas: 5, nota: "Rotación 100%: los 5 IDs del 25-04 desaparecieron y entraron 5 IDs nuevos secuenciales." },
      "argenprop — Plottier":                      { snapshot: 20, hoy: 20, agregadas: 5, bajadas: 5 },
      "argenprop — Rincón de los Sauces":          { snapshot: 7,  hoy: 4,  agregadas: 0, bajadas: 3, nota: "Contracción neta de 7 a 4. No hay p2 en esta fuente, así que las bajadas son probables ventas reales." },
      "icasas — Añelo":                            { snapshot: null, hoy: null, agregadas: null, bajadas: null, nota: "Omitido: la paginación rota orden entre cargas y el diff no es confiable." },
      "vacamuertapropiedades — home (terrenos)":   { snapshot: 6,  hoy: 4,  agregadas: 0, bajadas: 2, nota: "Contracción neta de 6 a 4. El home muestra inventario destacado (no paginado), así que pid262 y pid316 son probables ventas/retiros." }
    },
    cambios: [
      { fuente: "argenprop — Añelo", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-anelo--19450646", nota: "ID nuevo familia 1945xxxxx — candidato a alta real." },
      { fuente: "argenprop — Añelo", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-san-patricio-del-chanar--19536391", nota: "Cross-listed (también aparece como agregada en Chañar)." },
      { fuente: "argenprop — Añelo", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-anelo--16701504", nota: "Estaba al final de p1 el 25-04 — posible desplazamiento a p2 o baja real." },
      { fuente: "argenprop — Añelo", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-anelo--17133249", nota: "Estaba al final de p1 el 25-04 — posible desplazamiento a p2 o baja real." },

      { fuente: "argenprop — Centenario", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-centenario--19470307", nota: "ID nuevo familia 1947xxxxx." },
      { fuente: "argenprop — Centenario", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-centenario--19363683", nota: "Re-aparece (figura en dataset 2026-04-20, fue bajada el 22-04). Churn." },
      { fuente: "argenprop — Centenario", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-centenario--8214464",  nota: "Re-aparece (estaba en dataset, fue bajada el 22-04). Churn." },
      { fuente: "argenprop — Centenario", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-centenario--14683059", nota: "ID viejo (familia 14.6M) entra a p1." },
      { fuente: "argenprop — Centenario", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-centenario--17783177", nota: "ID viejo (familia 17.78M) entra a p1." },
      { fuente: "argenprop — Centenario", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-centenario--19198529", nota: "Prima Terra 807m²." },
      { fuente: "argenprop — Centenario", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-centenario--19450775", nota: "Prima Terra 360m²." },
      { fuente: "argenprop — Centenario", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-centenario--18966705", nota: "Prima Terra 360m² Apto Subdivisión." },
      { fuente: "argenprop — Centenario", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-centenario--19130967", nota: "Bº Privado El Vergel 1037m²." },
      { fuente: "argenprop — Centenario", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-centenario--18661190", nota: "Loteo Don Pater." },

      { fuente: "argenprop — San Patricio del Chañar", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-san-patricio-del-chanar--19536391", nota: "ID nuevo (también cross-listed en Añelo)." },
      { fuente: "argenprop — San Patricio del Chañar", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-san-patricio-del-chanar--19640217", nota: "ID nuevo familia 1964xxxxx — candidato a alta real." },
      { fuente: "argenprop — San Patricio del Chañar", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-san-patricio-del-chanar--18503797" },
      { fuente: "argenprop — San Patricio del Chañar", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-san-patricio-del-chanar--18503799" },

      { fuente: "argenprop — Cutral Có", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-cutral-co--19661313", nota: "ID nuevo familia 1966xxxxx — candidato a alta real." },
      { fuente: "argenprop — Cutral Có", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-cutral-co--19445576", nota: "Única publicación del 25-04; probable baja real (Cutral Có tiene 1 sola pub histórica)." },

      { fuente: "argenprop — Neuquén capital", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-neuquen--19654461", nota: "ID nuevo familia 1965xxxxx." },
      { fuente: "argenprop — Neuquén capital", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-neuquen--19589310", nota: "ID nuevo familia 1958xxxxx." },
      { fuente: "argenprop — Neuquén capital", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-neuquen--19532697", nota: "ID nuevo familia 1953xxxxx." },
      { fuente: "argenprop — Neuquén capital", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-neuquen--18242563", nota: "ID viejo (familia 18.24M) entra a p1." },
      { fuente: "argenprop — Neuquén capital", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-neuquen--18057881", nota: "ID viejo (familia 18.05M)." },
      { fuente: "argenprop — Neuquén capital", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-neuquen--19456288" },
      { fuente: "argenprop — Neuquén capital", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-neuquen--19558451" },
      { fuente: "argenprop — Neuquén capital", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-neuquen--19479585" },
      { fuente: "argenprop — Neuquén capital", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-neuquen--10895198" },
      { fuente: "argenprop — Neuquén capital", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-neuquen--18213159" },
      { fuente: "argenprop — Neuquén capital", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-limay--18188567" },
      { fuente: "argenprop — Neuquén capital", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-neuquen--19334902" },
      { fuente: "argenprop — Neuquén capital", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-neuquen--18836478" },
      { fuente: "argenprop — Neuquén capital", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-valentina-sur-urbana--8214534" },

      { fuente: "argenprop — Plaza Huincul", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-plaza-huincul--19530527", nota: "ID nuevo — los 5 anteriores desaparecieron." },
      { fuente: "argenprop — Plaza Huincul", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-plaza-huincul--19530528" },
      { fuente: "argenprop — Plaza Huincul", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-plaza-huincul--19547171" },
      { fuente: "argenprop — Plaza Huincul", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-plaza-huincul--19564494" },
      { fuente: "argenprop — Plaza Huincul", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-plaza-huincul--19622996" },
      { fuente: "argenprop — Plaza Huincul", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-plaza-huincul--19397797" },
      { fuente: "argenprop — Plaza Huincul", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-plaza-huincul--19420933" },
      { fuente: "argenprop — Plaza Huincul", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-plaza-huincul--19420934" },
      { fuente: "argenprop — Plaza Huincul", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-plaza-huincul--19420935" },
      { fuente: "argenprop — Plaza Huincul", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-plaza-huincul--19420972" },

      { fuente: "argenprop — Plottier", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-plottier--19652785", nota: "ID nuevo familia 1965xxxxx — candidato a alta real." },
      { fuente: "argenprop — Plottier", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-plottier--19531735" },
      { fuente: "argenprop — Plottier", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-plottier--19311911" },
      { fuente: "argenprop — Plottier", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-plottier--18633478", nota: "Re-aparece (era bajada el 25-04). Churn confirmado." },
      { fuente: "argenprop — Plottier", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-plottier--19190396", nota: "Re-aparece (era bajada el 25-04). Churn confirmado." },
      { fuente: "argenprop — Plottier", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-plottier--19328523" },
      { fuente: "argenprop — Plottier", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-plottier--19450834", nota: "Había vuelto a p1 el 24-04, vuelve a salir." },
      { fuente: "argenprop — Plottier", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-plottier--18724391" },
      { fuente: "argenprop — Plottier", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-plottier--19328516" },
      { fuente: "argenprop — Plottier", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-plottier--19090560" },

      { fuente: "argenprop — Rincón de los Sauces", tipo: "bajada", url: "https://www.argenprop.com/terreno-en-venta-en-rincon-de-los-sauces--15827220", nota: "Rincón no tiene p2 — probable baja real." },
      { fuente: "argenprop — Rincón de los Sauces", tipo: "bajada", url: "https://www.argenprop.com/terreno-en-venta-en-rincon-de-los-sauces--16238703", nota: "Rincón no tiene p2 — probable baja real." },
      { fuente: "argenprop — Rincón de los Sauces", tipo: "bajada", url: "https://www.argenprop.com/terreno-en-venta-en-rincon-de-los-sauces--19034500", nota: "Rincón no tiene p2 — probable baja real." },

      { fuente: "vacamuertapropiedades — home (terrenos)", tipo: "bajada", url: "https://www.vacamuertapropiedades.com.ar/venta-terreno-barrio-la-casona-1-de-plottier-pid262", nota: "Plottier La Casona 1 — el home no es paginado; probable venta o retiro." },
      { fuente: "vacamuertapropiedades — home (terrenos)", tipo: "bajada", url: "https://www.vacamuertapropiedades.com.ar/venta-terreno-con-loft-en-construccion-barrio-sommadossi-centenario-pid316", nota: "Centenario Sommadossi terreno+loft — probable venta o retiro." }
    ],
    nota: "Gap de 27 días desde el último chequeo (vs. 1-3 días habitual). Es la corrida con más rotación hasta ahora: 59 URLs cambiadas (27 agregadas / 32 bajadas) en 9 fuentes. Plaza Huincul rotó al 100% (5/5 nuevos IDs, los 5 anteriores desaparecidos). Neuquén capital rotó 35% (7/20). Rincón y vacamuertapropiedades tuvieron contracción neta sin reposición (probables ventas reales — ninguna de las dos paginar más allá del p1/home). Plottier confirma el churn de 18633478 y 19190396 que ya se sospechaba el 25-04. El dataset consolidado (snapshot 2026-04-20) tiene ~5 semanas; con este volumen conviene planificar un re-scrape completo de las fuentes más activas (Neuquén, Plaza Huincul, Plottier, Centenario) antes de regenerar listings.js."
  },
  {
    fecha: "2026-04-25",
    snapshot_base: "2026-04-24",
    resumen_por_fuente: {
      "argenprop — Añelo":                         { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Centenario":                    { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — San Patricio del Chañar":       { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Cutral Có":                     { snapshot: 1,  hoy: 1,  agregadas: 0, bajadas: 0 },
      "argenprop — Neuquén capital":               { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Plaza Huincul":                 { snapshot: 5,  hoy: 5,  agregadas: 0, bajadas: 0 },
      "argenprop — Plottier":                      { snapshot: 20, hoy: 20, agregadas: 2, bajadas: 2 },
      "argenprop — Rincón de los Sauces":          { snapshot: 7,  hoy: 7,  agregadas: 0, bajadas: 0 },
      "icasas — Añelo":                            { snapshot: null, hoy: null, agregadas: null, bajadas: null, nota: "Omitido: la paginación rota orden entre cargas y el diff no es confiable." },
      "vacamuertapropiedades — home (terrenos)":   { snapshot: 6,  hoy: 6,  agregadas: 0, bajadas: 0, nota: "El sitio redirigió hoy a vaca-muerta-propiedades.com.ar (dominio guionado). Slugs y pid intactos: no es cambio de inventario." }
    },
    cambios: [
      { fuente: "argenprop — Plottier", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-plottier--19520560", nota: "ID nuevo (familia 19.52M). Único candidato a alta real del día — confirmar abriendo la URL." },
      { fuente: "argenprop — Plottier", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-plottier--19450707", nota: "Reportada como bajada el 24-04; volvió a p1. Churn de paginación, no alta real." },
      { fuente: "argenprop — Plottier", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-plottier--18633478", nota: "Estaba al final de p1 el 24-04; probablemente desplazada a p2." },
      { fuente: "argenprop — Plottier", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-plottier--19190396", nota: "Estaba al final de p1 el 24-04; probablemente desplazada a p2." }
    ],
    nota: "Período 24 → 25 de abril: dataset estable. 9 de 10 fuentes sin cambios. En Plottier sigue el churn de la familia 1945xxxx (19450707 vuelve a p1 tras haber salido el 24-04). 19520560 es el único ID nuevo del día — candidato a alta real, conviene re-scrapear Plottier completa antes de regenerar listings.js. vacamuertapropiedades cambió a dominio guionado (vaca-muerta-propiedades.com.ar) sin variar inventario."
  },
  {
    fecha: "2026-04-24",
    snapshot_base: "2026-04-22",
    resumen_por_fuente: {
      "argenprop — Añelo":                         { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Centenario":                    { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — San Patricio del Chañar":       { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Cutral Có":                     { snapshot: 1,  hoy: 1,  agregadas: 0, bajadas: 0 },
      "argenprop — Neuquén capital":               { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Plaza Huincul":                 { snapshot: 5,  hoy: 5,  agregadas: 0, bajadas: 0 },
      "argenprop — Plottier":                      { snapshot: 20, hoy: 20, agregadas: 1, bajadas: 1 },
      "argenprop — Rincón de los Sauces":          { snapshot: 7,  hoy: 7,  agregadas: 0, bajadas: 0 },
      "icasas — Añelo":                            { snapshot: null, hoy: null, agregadas: null, bajadas: null, nota: "Omitido: la paginación rota orden entre cargas y el diff no es confiable." },
      "vacamuertapropiedades — home (terrenos)":   { snapshot: 6,  hoy: 6,  agregadas: 0, bajadas: 0 }
    },
    cambios: [
      { fuente: "argenprop — Plottier", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-plottier--19450834", nota: "Había sido reportada como bajada el 22-04; volvió a p1. Churn de paginación, no alta real." },
      { fuente: "argenprop — Plottier", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-plottier--19450707" }
    ],
    nota: "Período 22 → 24 de abril: dataset estable. Sólo 2 URLs rotaron en Plottier (IDs de la familia 194507xx/194508xx entran y salen de p1 entre cargas). 9 de 10 fuentes sin cambios. No se regenera listings.js porque no hay alta/baja confirmable."
  },
  {
    fecha: "2026-04-22",
    zona: "vaca_muerta",
    snapshot_base: "2026-04-20",
    resumen_por_fuente: {
      "argenprop — Añelo":                         { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Centenario":                    { snapshot: 20, hoy: 20, agregadas: 2, bajadas: 2 },
      "argenprop — San Patricio del Chañar":       { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Cutral Có":                     { snapshot: 1,  hoy: 1,  agregadas: 0, bajadas: 0 },
      "argenprop — Neuquén capital":               { snapshot: 20, hoy: 20, agregadas: 6, bajadas: 6 },
      "argenprop — Plaza Huincul":                 { snapshot: 5,  hoy: 5,  agregadas: 0, bajadas: 0 },
      "argenprop — Plottier":                      { snapshot: 18, hoy: 20, agregadas: 3, bajadas: 1 },
      "argenprop — Rincón de los Sauces":          { snapshot: 7,  hoy: 7,  agregadas: 0, bajadas: 0 },
      "icasas — Añelo":                            { snapshot: 27, hoy: 30, agregadas: null, bajadas: null, nota: "Probable artefacto de rotación de orden en paginación. No es diff confiable." },
      "vacamuertapropiedades — home (terrenos)":   { snapshot: 6,  hoy: 6,  agregadas: 0, bajadas: 0 }
    },
    cambios: [
      { fuente: "argenprop — Centenario", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-centenario--18654635" },
      { fuente: "argenprop — Centenario", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-centenario--19435399" },
      { fuente: "argenprop — Centenario", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-centenario--19070198" },
      { fuente: "argenprop — Centenario", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-centenario--8214464"  },

      { fuente: "argenprop — Neuquén capital", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-neuquen--19479585" },
      { fuente: "argenprop — Neuquén capital", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-neuquen--10895198" },
      { fuente: "argenprop — Neuquén capital", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-neuquen--18213159" },
      { fuente: "argenprop — Neuquén capital", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-limay--18188567"   },
      { fuente: "argenprop — Neuquén capital", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-neuquen--19334902" },
      { fuente: "argenprop — Neuquén capital", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-neuquen--18836478" },
      { fuente: "argenprop — Neuquén capital", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-neuquen--19450689" },
      { fuente: "argenprop — Neuquén capital", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-neuquen--19450771" },
      { fuente: "argenprop — Neuquén capital", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-neuquen--19060579" },
      { fuente: "argenprop — Neuquén capital", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-neuquen--15533638" },
      { fuente: "argenprop — Neuquén capital", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-neuquen--18945118" },
      { fuente: "argenprop — Neuquén capital", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-neuquen--15869560" },

      { fuente: "argenprop — Plottier", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-plottier--18138709", nota: "El snapshot tenía 18 URLs; p1 ya listaba 20." },
      { fuente: "argenprop — Plottier", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-plottier--19090560" },
      { fuente: "argenprop — Plottier", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-plottier--17780840" },
      { fuente: "argenprop — Plottier", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-plottier--19450834" }
    ],
    nota: "14 URLs cambiadas en 3 fuentes (Centenario, Neuquén, Plottier). Las 'bajadas' pueden ser retiros reales o simples corrimientos a p2; confirmar abriendo cada URL antes de borrar del dataset. icasas requiere re-scrape completo por rotación de paginación."
  }
];
