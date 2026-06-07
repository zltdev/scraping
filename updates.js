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
    fecha: "2026-06-07",
    snapshot_base: "2026-06-06",
    resumen_por_fuente: {
      "argenprop — Añelo":                         { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Centenario":                    { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — San Patricio del Chañar":       { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0, nota: "Segundo día consecutivo en espejo tras el double-up del 05-06 (familia 1979x). El corredor de Vaca Muerta sigue pausado." },
      "argenprop — Cutral Có":                     { snapshot: 1,  hoy: 1,  agregadas: 0, bajadas: 0 },
      "argenprop — Neuquén capital":               { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Plaza Huincul":                 { snapshot: 5,  hoy: 5,  agregadas: 0, bajadas: 0, nota: "Segundo día consecutivo en espejo tras el 19798515 del 05-06. El corredor pausa, consistente con patrón en ráfagas." },
      "argenprop — Plottier":                      { snapshot: 20, hoy: 20, agregadas: 1, bajadas: 1, nota: "Entra 8214482 (familia 8214x, ID de 7 dígitos — JAMÁS visto en el run, alta REAL de aviso histórico, distinto de la reaparición del 19311911 del 06-06); sale 19755626 (familia 1975x, llevaba 8 chequeos consecutivos en p1 desde el 30-05, era el ID generacional más reciente de Plottier)." },
      "argenprop — Rincón de los Sauces":          { snapshot: 4,  hoy: 4,  agregadas: 0, bajadas: 0 },
      "argenprop — Campana":                       { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0, nota: "Espejo tras el 1981x del 06-06. Las Calandrias no suma segundo ID — el 19812510 fue alta puntual, no inicio de serie." },
      "argenprop — Zárate":                        { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "icasas — Añelo":                            { snapshot: null, hoy: null, agregadas: null, bajadas: null, nota: "Omitido: la paginación rota orden entre cargas y el diff no es confiable." },
      "vacamuertapropiedades — home (terrenos)":   { snapshot: 4,  hoy: 4,  agregadas: 0, bajadas: 0, nota: "Quinto chequeo consecutivo en dominio canónico vacamuertapropiedades.com.ar (sin contar gap 04-06). Slugs idénticos (pid9, pid67, pid127, pid263)." }
    },
    cambios: [
      { fuente: "argenprop — Plottier", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-plottier--8214482", nota: "ALTA REAL pero ATÍPICA: ID de 7 dígitos (familia 8214x) JAMÁS visto en ningún snapshot previo del run (verificado con grep). NO es reaparición (no estuvo nunca). Mismo rango de antigüedad que 8214464 (Centenario, estable todo el run) y 9068551 (Rincón, estable). Hipótesis: re-publicación / re-pinning de un aviso latente histórico, o salto de ranking por refresh de la ficha. Tercer régimen de 'alta en diff' distinto: (1) publicación nueva, (2) reaparición reciente como 19311911, (3) re-superficie de aviso histórico como este." },
      { fuente: "argenprop — Plottier", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-plottier--19755626", nota: "Familia 1975x — 8 chequeos consecutivos en p1 (30-05 a 06-06). Era el ID generacional más reciente de Plottier hasta ayer. Por el patrón observado en otros IDs de Plottier (19531735, 19311911 oscilan entre p1/p2) lo más probable es rotación P1↔P2 por ranking, no baja real. Vigilar si reaparece." }
    ],
    nota: "Cadencia diaria preservada. **Movimiento mínimo: 1 sola fuente (Plottier 1+/1-), 10 fuentes en espejo absoluto.** Hipótesis del 06-06 verificadas: (1) Plaza Huincul/Chañar siguen en espejo — pausa del corredor de Vaca Muerta confirmada, el double-up del 05-06 fue puntual; (2) 19311911 PERSISTE en Plottier — su oscilación es más lenta que la de 19531735, refutando un único régimen de ranking; (3) Campana en espejo — el 1981x del 06-06 también fue alta puntual, las dos fuentes del corredor generacional reciente están pausadas. **Nuevo patrón identificado**: alta de 8214482 (Plottier) es un ID de 7 dígitos jamás visto, un tercer régimen de 'alta' (re-superficie de aviso histórico) distinto de las publicaciones nuevas y las reapariciones recientes. Refuerza la inconsistencia entre fuentes y la inadecuación de la lectura naïve del diff. **Frontera generacional del run estable en 1981x** (último avance: Campana 06-06). Patrón en ráfagas confirmado: el corredor avanza 1-4 días seguidos y luego pausa 1-3. vacamuertapropiedades: 5.º chequeo consecutivo en canónico .com.ar. No se regenera listings.js (8214482 fuera del foco industrial). Sugerencias para 08-06: (1) si Plottier vuelve a sumar otro ID 7-dígitos, lectura 'ronda de re-superficies'; (2) si el corredor retoma con 1981x+ en Vaca Muerta o Campana, ráfaga 3; (3) si 8214482 desaparece rápido confirma 'alta puntual', si persiste varios chequeos confirma 'clase 7-dígitos rota lento'."
  },
  {
    fecha: "2026-06-06",
    snapshot_base: "2026-06-05",
    resumen_por_fuente: {
      "argenprop — Añelo":                         { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Centenario":                    { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — San Patricio del Chañar":       { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Cutral Có":                     { snapshot: 1,  hoy: 1,  agregadas: 0, bajadas: 0 },
      "argenprop — Neuquén capital":               { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Plaza Huincul":                 { snapshot: 5,  hoy: 5,  agregadas: 0, bajadas: 0, nota: "Espejo tras el double-up del 05-06 (19798515). El corredor pausa un día después del descargue." },
      "argenprop — Plottier":                      { snapshot: 20, hoy: 20, agregadas: 1, bajadas: 1, nota: "Entra 19311911 (familia 1931x, REAPARICIÓN — había estado en p1 del 22-05 al 25-05, vuelve tras 9 días afuera); sale 19531735 (familia 1953x, ID oscilante que ya había salido 30-05/01-06 y vuelto 02-06)." },
      "argenprop — Rincón de los Sauces":          { snapshot: 4,  hoy: 4,  agregadas: 0, bajadas: 0 },
      "argenprop — Campana":                       { snapshot: 20, hoy: 20, agregadas: 1, bajadas: 1, nota: "Entra 19812510 (slug NUEVO 'las-calandrias', familia 1981x — PRIMER 1981x DEL RUN, supera al 1979x del 05-06); sale 15608517 (countries-y-barrios-cerrados-en-campana, familia 1560x, constante desde el 23-05). Acá SÍ se cumple FIFO por antigüedad." },
      "argenprop — Zárate":                        { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "icasas — Añelo":                            { snapshot: null, hoy: null, agregadas: null, bajadas: null, nota: "Omitido: la paginación rota orden entre cargas y el diff no es confiable." },
      "vacamuertapropiedades — home (terrenos)":   { snapshot: 4,  hoy: 4,  agregadas: 0, bajadas: 0, nota: "Cuarto chequeo consecutivo en dominio canónico vacamuertapropiedades.com.ar (sin contar gap 04-06). Slugs idénticos (pid9, pid67, pid127, pid263)." }
    },
    cambios: [
      { fuente: "argenprop — Plottier", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-plottier--19311911", nota: "REAPARICIÓN — no es alta nueva. Estuvo en p1 del 22-05 al 25-05, cayó el 27-05 y volvió hoy tras 9 días afuera. Familia 1931x, más viejo que el 1953x que sale. Patrón de ranking dinámico (no FIFO) — refuta lectura naïve 'alta = nueva publicación'." },
      { fuente: "argenprop — Plottier", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-plottier--19531735", nota: "ID oscilante: 22-05 a 29-05 en p1 (8 días), fuera 30-05/01-06, vuelve 02-06 a 05-06, cae hoy. Probable rotación P1↔P2 por ranking, no baja real." },
      { fuente: "argenprop — Campana", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-las-calandrias--19812510", nota: "ALTA REAL — primer 1981x del run, slug 'las-calandrias' NUEVO en Campana (barrio cerrado del partido). Supera al 1979x del 05-06 por ~13k IDs. La cadencia generacional avanza en Campana mientras Plaza Huincul/Chañar quedan quietas." },
      { fuente: "argenprop — Campana", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-countries-y-barrios-cerrados-en-campana--15608517", nota: "Familia 1560x — constante desde el 23-05 (14 días). Acá SÍ se cumple FIFO por antigüedad (el 18619706 que queda en p1 del mismo slug es más nuevo). Comportamiento OPUESTO al de Chañar (donde 11283723 viejo persiste y sale 18503796 más nuevo). Regla de ranking inconsistente entre fuentes." }
    ],
    nota: "Cadencia diaria recuperada (sin gap respecto del 05-06). **El movimiento se traslada de Vaca Muerta a Campana**: tras el double-up de ayer en Plaza Huincul+Chañar (familia 1979x), hoy esas dos fuentes están en espejo y la frontera generacional avanza a 1981x en Campana (slug nuevo 'las-calandrias'). 9 fuentes en espejo. **Nuevo patrón identificado en Plottier**: re-emergencia de IDs (19311911 vuelve tras 9 días afuera) — refuta la lectura naïve de 'alta = nueva publicación'/'bajada = aviso vendido': una proporción de los movimientos diarios son rotaciones P2↔P1 por ranking dinámico, no churn real. **FIFO por antigüedad inconsistente entre fuentes** (sí en Campana hoy, no en Chañar 05-06). vacamuertapropiedades: 4.º chequeo consecutivo en canónico .com.ar, sin cambios de slugs. No se regenera listings.js (ninguna alta cae en foco industrial: 19812510 es Las Calandrias, country residencial). Recomendación para 07-06: (1) si Plaza Huincul/Chañar siguen quietas, confirmar pausa del corredor tras el descargue; (2) si 19311911 vuelve a salir de Plottier, confirma oscilación pura; (3) si Campana suma otro 1981x o slug las-calandrias agrega IDs, lectura 'ola de altas en Campana'."
  },
  {
    fecha: "2026-06-05",
    snapshot_base: "2026-06-03",
    resumen_por_fuente: {
      "argenprop — Añelo":                         { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Centenario":                    { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — San Patricio del Chañar":       { snapshot: 20, hoy: 20, agregadas: 1, bajadas: 1, nota: "Entra 19799905 (familia 1979x, alta real, primer 1979x del run); sale 18503796 (lote 18503x del 22-05, desplazamiento FIFO a p2 — refuta FIFO por antigüedad ya que 11283723 sigue en p1)." },
      "argenprop — Cutral Có":                     { snapshot: 1,  hoy: 1,  agregadas: 0, bajadas: 0 },
      "argenprop — Neuquén capital":               { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Plaza Huincul":                 { snapshot: 5,  hoy: 5,  agregadas: 1, bajadas: 1, nota: "Entra 19798515 (familia 1979x, reanuda corredor generacional tras 2 días de pausa, salta de 1976x a 1979x); sale 19622996 (el más viejo del set, familia 1962x). Patrón confirmado: cada alta generacional desplaza el ID más viejo." },
      "argenprop — Plottier":                      { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Rincón de los Sauces":          { snapshot: 4,  hoy: 4,  agregadas: 0, bajadas: 0 },
      "argenprop — Campana":                       { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Zárate":                        { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "icasas — Añelo":                            { snapshot: null, hoy: null, agregadas: null, bajadas: null, nota: "Omitido: la paginación rota orden entre cargas y el diff no es confiable." },
      "vacamuertapropiedades — home (terrenos)":   { snapshot: 4,  hoy: 4,  agregadas: 0, bajadas: 0, nota: "Tercer chequeo consecutivo (sin contar el 04-06 faltante) en dominio canónico vacamuertapropiedades.com.ar. Slugs idénticos (pid9, pid67, pid127, pid263)." }
    },
    cambios: [
      { fuente: "argenprop — San Patricio del Chañar", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-san-patricio-del-chanar--19799905", nota: "ID familia 1979x — primer 1979x del run en esta fuente. Por proximidad con 19798515 (Plaza Huincul, diferencia 1390) sugiere alta sincronizada de la misma agencia/corredor." },
      { fuente: "argenprop — San Patricio del Chañar", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-san-patricio-del-chanar--18503796", nota: "Uno del lote masivo 18503x (17 IDs secuenciales del 22-05). Desplazamiento FIFO a p2 — refuta FIFO por antigüedad ya que 11283723 (mucho más viejo) sigue en p1." },
      { fuente: "argenprop — Plaza Huincul", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-plaza-huincul--19798515", nota: "ID familia 1979x — reanuda corredor generacional tras 2 días de pausa (último fue 19766009 familia 1976x del 01-06). Salta de 1976x a 1979x sin pasar por 1977x/1978x. Probable corredor Gabriel López (Mat. 380)." },
      { fuente: "argenprop — Plaza Huincul", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-plaza-huincul--19622996", nota: "Familia 1962x — era el más viejo del set de 5. Confirma patrón: cada alta generacional desplaza el ID más viejo. Sin p2 → baja real o re-publicación." }
    ],
    nota: "Gap de 2 días desde 2026-06-03 — falta corrida del 04-06 (no hay _check_2026-06-04.json en el repo). **Reanuda el corredor generacional con doble alta simultánea en 2 fuentes**: Chañar (19799905) y Plaza Huincul (19798515), ambas familia 1979x con IDs muy cercanos (diferencia 1390) — fuerte señal de alta sincronizada del mismo origen comercial. El salto 1976x→1979x (saltea 1977x y 1978x) es compatible con publicación interna continua durante la pausa observada en p1: el corredor sí publicó pero los IDs solo trascendieron a p1 hoy. Las otras 9 fuentes activas en espejo. vacamuertapropiedades: 3.º chequeo consecutivo en canónico .com.ar. No se regenera listings.js (ninguna alta cae en el foco industrial). Recomendación para 06-06: si entra 1980x+ confirma cadencia natural; si entran 1977x/1978x indica que el corredor 'rellena hacia atrás'; si reincide el gap, revisar cron / healthcheck."
  },
  {
    fecha: "2026-06-03",
    snapshot_base: "2026-06-02",
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
      "vacamuertapropiedades — home (terrenos)":   { snapshot: 4,  hoy: 4,  agregadas: 0, bajadas: 0, nota: "Responde nuevamente desde dominio canónico vacamuertapropiedades.com.ar. Slugs idénticos." }
    },
    cambios: [],
    nota: "Gap de 1 día desde 2026-06-02. **Miércoles 100% espejo** — las 11 fuentes activas en espejo. **Segundo día consecutivo sin avance del corredor generacional** (último alta fue 19766009 familia 1976x del 01-06). Es la primera vez en el run que dos días seguidos quedan completamente sin churn, ni siquiera rotación intra-camada como había ayer en Plottier/Neuquén. El slug valentina-norte-urbana persiste como único 'no neuquen' en Neuquén capital. No se regenera listings.js."
  },
  {
    fecha: "2026-06-02",
    snapshot_base: "2026-06-01",
    resumen_por_fuente: {
      "argenprop — Añelo":                         { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Centenario":                    { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — San Patricio del Chañar":       { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Cutral Có":                     { snapshot: 1,  hoy: 1,  agregadas: 0, bajadas: 0 },
      "argenprop — Neuquén capital":               { snapshot: 20, hoy: 20, agregadas: 1, bajadas: 1, nota: "Entra 18881538 (slug valentina-norte-urbana, familia 1888x — NO es alta fresca, es re-superficie de aviso latente); sale 19558451 (familia 1955x, más nuevo que el que entra → no FIFO por antigüedad)." },
      "argenprop — Plaza Huincul":                 { snapshot: 5,  hoy: 5,  agregadas: 0, bajadas: 0 },
      "argenprop — Plottier":                      { snapshot: 20, hoy: 20, agregadas: 1, bajadas: 1, nota: "Entra 19531735 (familia 1953x); sale 19520560 (familia 1952x). Rotación intra-camada, no alta generacional. Hipótesis FIFO refutada nuevamente: 17780820/17780840 más viejas siguen en p1." },
      "argenprop — Rincón de los Sauces":          { snapshot: 4,  hoy: 4,  agregadas: 0, bajadas: 0 },
      "argenprop — Campana":                       { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Zárate":                        { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "icasas — Añelo":                            { snapshot: null, hoy: null, agregadas: null, bajadas: null, nota: "Omitido: la paginación rota orden entre cargas y el diff no es confiable." },
      "vacamuertapropiedades — home (terrenos)":   { snapshot: 4,  hoy: 4,  agregadas: 0, bajadas: 0, nota: "Vuelve al canónico .com.ar tras rotación a .com del 01-06. Slugs idénticos." }
    },
    cambios: [
      { fuente: "argenprop — Neuquén capital", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-valentina-norte-urbana--18881538", nota: "Slug nuevo (valentina-norte-urbana, barrio no visto antes en p1). ID familia 1888x — significativamente más viejo que el resto. NO es alta fresca, es re-superficie de aviso latente o re-publicación." },
      { fuente: "argenprop — Neuquén capital", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-neuquen--19558451", nota: "ID familia 1955x, en p1 desde al menos 28-05. Más nuevo que el que entra (1888x) → la salida NO responde a FIFO por antigüedad de ID." },
      { fuente: "argenprop — Plottier", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-plottier--19531735", nota: "ID familia 1953x — NO es 1976x ni 1977x (predicción del 01-06 incumplida). Rotación intra-camada, no alta generacional." },
      { fuente: "argenprop — Plottier", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-plottier--19520560", nota: "ID familia 1952x, en p1 desde al menos 28-05. Hipótesis FIFO refutada: 17780820 y 17780840 (las más viejas) siguen en p1." }
    ],
    nota: "Gap de 1 día desde 2026-06-01. **Martes con movimiento contenido pero diverso** — cambian 2 fuentes (no 1 como ayer): Neuquén capital (1+/1−) y Plottier (1+/1−). **Plaza Huincul queda espejo** — el 1976x del lunes no tuvo continuación (contradice la sugerencia del 01-06). Naturaleza distinta de los cambios: Neuquén capital trae un slug de barrio no visto antes (valentina-norte-urbana, familia 1888x — listing viejo que resurge); Plottier muestra swap mínimo intra-familia 195x. Primer día sin avance del corredor generacional desde que arrancó (no entra 1976x ni 1977x)."
  },
  {
    fecha: "2026-06-01",
    snapshot_base: "2026-05-31",
    resumen_por_fuente: {
      "argenprop — Añelo":                         { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Centenario":                    { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — San Patricio del Chañar":       { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Cutral Có":                     { snapshot: 1,  hoy: 1,  agregadas: 0, bajadas: 0 },
      "argenprop — Neuquén capital":               { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Plaza Huincul":                 { snapshot: 5,  hoy: 5,  agregadas: 1, bajadas: 1, nota: "Entra 19766009 (PRIMER ID familia 1976x del run, salto generacional); sale 19564494 (familia 1956x, en p1 desde al menos 28-05). Cambio generacional 1975x→1976x." },
      "argenprop — Plottier":                      { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Rincón de los Sauces":          { snapshot: 4,  hoy: 4,  agregadas: 0, bajadas: 0 },
      "argenprop — Campana":                       { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Zárate":                        { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "icasas — Añelo":                            { snapshot: null, hoy: null, agregadas: null, bajadas: null, nota: "Omitido: la paginación rota orden entre cargas y el diff no es confiable." },
      "vacamuertapropiedades — home (terrenos)":   { snapshot: 4,  hoy: 4,  agregadas: 0, bajadas: 0, nota: "Hoy responde desde dominio .com (sin .ar) — rotación esporádica de dominio. Slugs idénticos." }
    },
    cambios: [
      { fuente: "argenprop — Plaza Huincul", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-plaza-huincul--19766009", nota: "ID familia 1976x — PRIMER 1976x detectado en todo el run. Salto generacional desde el corredor 1975x (19752901 del 29-05 + 19755626 del 30-05). Probable corredor Gabriel López (Mat. 380)." },
      { fuente: "argenprop — Plaza Huincul", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-plaza-huincul--19564494", nota: "ID familia 1956x, en p1 desde al menos 28-05. Sin p2 en la fuente → baja real o re-publicación con ID nuevo. El set de Plaza Huincul rota a medida que entran IDs generacionales nuevos." }
    ],
    nota: "Gap de 1 día desde 2026-05-31. **El lunes trajo movimiento**. Se rompe el doble espejo 30/31-05 con un único cambio real en Plaza Huincul: entra el primer 1976x del run (19766009), sale 19564494 (familia 1956x). Las otras 10 fuentes activas en espejo. La hipótesis del 31-05 ('lunes suele venir con altas frescas') confirma con creces. No se regenera listings.js. vacamuertapropiedades: hoy responde desde dominio .com (rotación esporádica del patrón observado los días laborables)."
  },
  {
    fecha: "2026-05-31",
    snapshot_base: "2026-05-30",
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
      "vacamuertapropiedades — home (terrenos)":   { snapshot: 4,  hoy: 4,  agregadas: 0, bajadas: 0, nota: "Dominio canónico .com.ar, slugs idénticos." }
    },
    cambios: [],
    nota: "Gap de 1 día desde 2026-05-30. **Día 100% espejo** — las 11 fuentes activas devolvieron exactamente el mismo set que ayer. 0 altas, 0 bajas en todo el panel. Es el primer espejo total del run desde el doble espejo 24/25-05 (que se rompió el 27-05 con 9 cambios). Las tres fuentes que venían moviendo días previos (Plottier 30-05, Centenario y Plaza Huincul 29-05) hoy quedan todas quietas. Fin de semana de carga editorial débil."
  },
  {
    fecha: "2026-05-30",
    snapshot_base: "2026-05-29",
    resumen_por_fuente: {
      "argenprop — Añelo":                         { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Centenario":                    { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — San Patricio del Chañar":       { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Cutral Có":                     { snapshot: 1,  hoy: 1,  agregadas: 0, bajadas: 0 },
      "argenprop — Neuquén capital":               { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Plaza Huincul":                 { snapshot: 5,  hoy: 5,  agregadas: 0, bajadas: 0 },
      "argenprop — Plottier":                      { snapshot: 20, hoy: 20, agregadas: 1, bajadas: 1, nota: "Entra 19755626 (familia 1975x, alta nueva — 3er ID 1975x detectado en 3 días); sale 19531735 (familia 1953x, había entrado el 27-05). Desplazamiento FIFO a p2 — Plottier tiene p2." },
      "argenprop — Rincón de los Sauces":          { snapshot: 4,  hoy: 4,  agregadas: 0, bajadas: 0 },
      "argenprop — Campana":                       { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Zárate":                        { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "icasas — Añelo":                            { snapshot: null, hoy: null, agregadas: null, bajadas: null, nota: "Omitido: la paginación rota orden entre cargas y el diff no es confiable." },
      "vacamuertapropiedades — home (terrenos)":   { snapshot: 4,  hoy: 4,  agregadas: 0, bajadas: 0, nota: "Vuelve al dominio canónico vacamuertapropiedades.com.ar (tras .ar del 29-05). Slugs idénticos." }
    },
    cambios: [
      { fuente: "argenprop — Plottier", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-plottier--19755626", nota: "ID familia 1975x — alta nueva. Tercer ID de la generación 1975x detectado en 3 días distintos (Plaza Huincul 19752901 el 29-05, ahora Plottier)." },
      { fuente: "argenprop — Plottier", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-plottier--19531735", nota: "ID familia 1953x — había aparecido el 27-05. Plottier tiene p2; desplazamiento FIFO a p2 (no necesariamente baja real). El ordenamiento es por fecha de re-publicación: 19531735 sin renovación reciente cae, mientras 17780820/17780840 (IDs más bajos) siguen en p1 porque fueron bumpeados." }
    ],
    nota: "Gap de 1 día desde 2026-05-29. **Día con un único cambio real**: 10 de 11 fuentes activas en espejo. Único movimiento en Plottier (1+/1−): entra 19755626 (familia 1975x) y sale 19531735 (familia 1953x del 27-05). Centenario y Plaza Huincul, que ayer movieron, hoy quedan espejo. Las 9 altas reales 1972x-1973x del 27-05 siguen las 9 en p1. No se regenera listings.js."
  },
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
