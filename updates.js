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
    fecha: "2026-04-22",
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
