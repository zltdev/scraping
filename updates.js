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
    fecha: "2026-06-18",
    snapshot_base: "2026-06-17",
    resumen_por_fuente: {
      "argenprop — Añelo":                         { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Centenario":                    { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — San Patricio del Chañar":       { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Cutral Có":                     { snapshot: 1,  hoy: 1,  agregadas: 0, bajadas: 0, nota: "19833452 (1983x) PERSISTE 8.º chequeo consecutivo — récord propio renovado. Sigue vivo pero ya no es el techo del run desde 17-06 (Campana 1986x → Plottier 1987x). Tercer techo del run actualmente." },
      "argenprop — Neuquén capital":               { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Plaza Huincul":                 { snapshot: 5,  hoy: 5,  agregadas: 0, bajadas: 0, nota: "19798515 (1979x) frontier local sin cambios — la ronda multi-fuente del run mantiene el patrón mono-fuente migrante (Cutral Có → Campana → Plottier), Plaza Huincul aún sin activar carril original." },
      "argenprop — Plottier":                      { snapshot: 20, hoy: 20, agregadas: 2, bajadas: 2, nota: "ÚNICA FUENTE CON MOVIMIENTO HOY. Primera vez del run que Plottier rompe espejo en muchas semanas. **EVENTO MAYOR DEL RUN: DOBLE 1987x NUEVO FRONTIER GLOBAL**. ENTRAN 19870568 + 19871079 (ambos 1987x, slug genérico /plottier) — primera vez del run con 2 IDs generacionales nuevos en una sola jornada. Rompen el techo 19862176 (1986x, Campana) que duró solo 1 chequeo como frontier global. Primera vez que Plottier hospeda el frontier global del run. SALEN 12060433 (1206x, clase histórica, slug genérico) tras 6 chequeos persistido — CONTRADICE explícitamente la hipótesis del 17-06 'clase histórica con slug genérico es estable'. SALE también 19450773 (1945x). 8214482 PERSISTE 10.º chequeo (récord propio) — único caso límite vivo de hiper-estabilidad histórica. 19755626 NO vuelve (10.º chequeo afuera, récord propio)." },
      "argenprop — Rincón de los Sauces":          { snapshot: 6,  hoy: 6,  agregadas: 0, bajadas: 0, nota: "Set idéntico 8.º chequeo post-salto — récord propio renovado. Axiomática HIPER-absoluta del sistema. 15827220 + 16238703 confirmados permanentes." },
      "argenprop — Campana":                       { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0, nota: "VUELVE A ESPEJO ABSOLUTO tras el sacudón del 17-06 (1+/1-). 19862176 (1986x, monet-barrio-privado) PERSISTE 2.º chequeo — NO se cae como frontier volátil, PERO pierde el título de frontier global tras solo 1 día (Plottier toma el relevo con 1987x). Variante no anticipada: el frontier global puede cambiar de propiedad sin que el viejo techo caiga. Cluster Cardales global se mantiene en 8 IDs; cluster countries-y-barrios-cerrados-en-campana mantiene 2 IDs (15608517, 18619706). Cluster Campana barrios privados: 9 IDs (8 Cardales + 1 Monet). 18526091 mantiene slug `cardales-village` 2.º chequeo (slug rotation estable, no se rota OTRO ID)." },
      "argenprop — Zárate":                        { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "icasas — Añelo":                            { snapshot: null, hoy: null, agregadas: null, bajadas: null, nota: "Omitido: la paginación rota orden entre cargas y el diff no es confiable." },
      "vacamuertapropiedades — home (terrenos)":   { snapshot: 4,  hoy: 4,  agregadas: 0, bajadas: 0, nota: "**CAMBIO DE DOMINIO**: hoy responde desde `vaca-muerta-propiedades.com` (con guiones, sin .ar) — variante NUNCA vista en el run completo. Rompe la racha de 13 chequeos consecutivos en `vacamuertapropiedades.com.ar` canónico. Los 4 terrenos (pid9, pid67, pid127, pid263) PERSISTEN idénticos — 7.º chequeo consecutivo idéntico desde el 12-06. El home expone hoy un layout más amplio (14 listings incluyendo oficinas, departamentos, casas, complejos inmobiliarios) — posiblemente porque el dominio con guiones sirve un layout distinto." }
    },
    cambios: [
      { fuente: "argenprop — Plottier", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-plottier--12060433", nota: "Familia 1206x, clase histórica generación 2018, slug genérico /plottier. Persistió 6 chequeos consecutivos (alta 13-06). Esta caída **CONTRADICE explícitamente la hipótesis del 17-06** 'clase histórica con slug genérico es estable' — 12060433 cumplía exactamente ambas condiciones (slug genérico + clase histórica) y aún así sale. La hipótesis se refuta parcialmente; queda solo 8214482 (10.º chequeo) como caso límite vivo de hiper-estabilidad." },
      { fuente: "argenprop — Plottier", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-plottier--19450773", nota: "Familia 1945x, slug genérico /plottier. Caída regresiva estándar sin nada especialmente notable. Se compensa con las 2 altas 1987x." },
      { fuente: "argenprop — Plottier", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-plottier--19870568", nota: "**ID NUEVO 1987x, slug genérico /plottier**. CO-FRONTIER GLOBAL DEL RUN junto con 19871079. Rompe el techo 19862176 (1986x, Campana) que duró solo 1 chequeo como frontier global. Primera vez que Plottier hospeda el frontier global del run. Cumple indiscutiblemente la sub-hipótesis 17-06 'entra otro ID 1986x+ = ronda multi-fuente activada' — con magnitud doble." },
      { fuente: "argenprop — Plottier", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-plottier--19871079", nota: "**ID NUEVO 1987x, slug genérico /plottier**. CO-FRONTIER GLOBAL DEL RUN junto con 19870568. La diferencia de IDs entre 19870568 y 19871079 es de 511 unidades — sugiere lote de carga atómico (mismo vendedor o subida automatizada). **Primera vez del run con DOS IDs generacionales nuevos en una sola jornada** — patrón nuevo 'doblete generacional' a vigilar en próximos chequeos para confirmar régimen de lotes atómicos." }
    ],
    nota: "Cadencia diaria preservada. **EVENTO MAYOR DEL RUN**: Plottier mete DOBLE 1987x simultáneo (19870568 + 19871079, slug genérico) — NUEVO FRONTIER GLOBAL DEL RUN que rompe el 1986x de Campana después de solo 1 chequeo. Primera vez del run con 2 IDs generacionales nuevos en una jornada. Primera vez que Plottier hospeda el frontier global. El frontier global migra Cutral Có (11-06, 6 días) → Campana (17-06, 1 día) → Plottier (18-06) — rotación de fuente acelerada. **CONTRADICCIÓN DE HIPÓTESIS 17-06**: 12060433 (slug genérico /plottier, clase histórica 1206x) cae tras 6 chequeos, refutando parcialmente 'clase histórica con slug genérico es estable'. Sobrevive solo 8214482 (10.º chequeo) como caso límite. **CAMBIO DE DOMINIO vacamuertapropiedades**: nueva variante `vaca-muerta-propiedades.com` (con guiones, sin .ar) — NUNCA vista en el run; rompe racha de 13 chequeos en canónico. **Verificación de hipótesis del 17-06**: (1) 19862176 persiste/sale → AMBIGUA, persiste 2.º chequeo pero pierde título; (2) reaparece 19812510/16475158 → PENDIENTE (días 3 y 1 afuera respectivamente); (3) OTRO ID rota de slug → NO; (4) entra OTRO ID 1986x+ → SE CUMPLE INDISCUTIBLEMENTE Y CON MAGNITUD DOBLE; (5) Plaza Huincul/Chañar a 1980x+ → NO; (6) Rincón modifica set → NO (8.º chequeo, récord propio renovado); (7) Cutral Có rota → NO (8.º chequeo, récord propio renovado); (8) OTRO slug barrio privado no-Cardales → NO. **PATRONES NUEVOS DETECTADOS**: (a) DOBLETE GENERACIONAL — primera vez con 2 IDs ≥1987x en una jornada, diferencia 511 unidades sugiere lote atómico; (b) FRONTIER GLOBAL PUEDE CAMBIAR DE PROPIEDAD SIN QUE EL VIEJO TECHO CAIGA — 19862176 persiste pero pierde título; (c) CAMBIO DE DOMINIO vacamuertapropiedades a forma con guiones — vigilar si es transitorio o definitivo. Cluster Cardales sin cambios (8 IDs). vacamuertapropiedades: 4 terrenos idénticos pero desde dominio nuevo. No se regenera listings.js (las altas son IDs Plottier que requieren inspección manual para evaluar inclusión). Sugerencias para 19-06: (1) si 19870568/19871079 persisten = consolidación 1987x; si alguno cae = doblete volátil; (2) si reaparece 19812510/16475158/12060433/19450773 = oscilación múltiple confirmada; (3) si 19862176 cae sin recuperar título = fin del ciclo Monet; (4) si OTRO doblete generacional aparece = régimen de lotes atómicos confirmado; (5) si Plaza Huincul/Chañar a 1980x+ = ronda multi-fuente carril original; (6) si Rincón modifica set = primera fluctuación post-8 chequeos; (7) si Cutral Có 19833452 cae = fin del 1983x histórico; (8) si vacamuertapropiedades vuelve a `.com.ar` canónico = dominio con guiones transitorio; si persiste = potencial cambio definitivo; (9) si 8214482 cae = fin del último caso límite hiper-estabilidad histórica."
  },
  {
    fecha: "2026-06-17",
    snapshot_base: "2026-06-16",
    resumen_por_fuente: {
      "argenprop — Añelo":                         { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Centenario":                    { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — San Patricio del Chañar":       { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Cutral Có":                     { snapshot: 1,  hoy: 1,  agregadas: 0, bajadas: 0, nota: "19833452 (1983x) PERSISTE 7.º chequeo consecutivo — sigue vivo pero YA NO es el frontier global del run; supera frontier global pasa a Campana (19862176, 1986x). Récord propio de persistencia se cierra al 7.º chequeo." },
      "argenprop — Neuquén capital":               { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Plaza Huincul":                 { snapshot: 5,  hoy: 5,  agregadas: 0, bajadas: 0, nota: "19798515 (1979x) frontier local sin cambios — ronda multi-fuente sigue inactiva en su carril original. La nueva ronda 1986x arrancó en Campana, no acá." },
      "argenprop — Plottier":                      { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0, nota: "8214482 PERSISTE 9.º chequeo consecutivo — clase histórica rota lento ULTRA-consolidada. 12060433 (1206x) 6.º chequeo. 19755626 NO vuelve (9.º chequeo afuera) — salida definitiva HIPER-consolidada." },
      "argenprop — Rincón de los Sauces":          { snapshot: 6,  hoy: 6,  agregadas: 0, bajadas: 0, nota: "Set idéntico 7.º chequeo post-salto — set Rincón = 6 IDs constante axiomática ULTRA-absoluta del sistema, récord propio. 15827220 + 16238703 confirmados permanentes." },
      "argenprop — Campana":                       { snapshot: 20, hoy: 20, agregadas: 1, bajadas: 1, nota: "ÚNICA FUENTE CON MOVIMIENTO HOY. Rompe el 3.er espejo absoluto del 16-06 con un cambio de magnitud máxima. ENTRA 19862176 (1986x, slug NUEVO `monet-barrio-privado`) — NUEVO FRONTIER GLOBAL DEL RUN que rompe el 1983x de Cutral Có (persistente 6 chequeos), salto +3 unidades en una jornada (avance más grande del run), primer barrio privado fuera del cluster Cardales. SALE 16475158 (slug `countries-y-barrios-cerrados-en-campana`) tras solo 2 días en p1 — primera caída regresiva de un ID histórico del run. SLUG ROTATION REVERSA: 18526091 vuelve a `cardales-village` tras 1 día como `countries-y-barrios-cerrados-en-campana` — régimen bi-direccional confirmado. Cluster `countries-y-barrios-cerrados-en-campana` cae de 4 a 2 IDs vivos. Cluster Cardales global cae de 9 a 8 IDs (40% del set p1 Campana)." },
      "argenprop — Zárate":                        { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "icasas — Añelo":                            { snapshot: null, hoy: null, agregadas: null, bajadas: null, nota: "Omitido: la paginación rota orden entre cargas y el diff no es confiable." },
      "vacamuertapropiedades — home (terrenos)":   { snapshot: 4,  hoy: 4,  agregadas: 0, bajadas: 0, nota: "Decimotercer chequeo consecutivo en dominio canónico vacamuertapropiedades.com.ar (sin contar gaps 04-06, 08-06, 10-06). Slugs idénticos (pid9, pid67, pid127, pid263). 6.º chequeo consecutivo idéntico desde el 12-06." }
    },
    cambios: [
      { fuente: "argenprop — Campana", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-countries-y-barrios-cerrados-en-campana--16475158", nota: "Familia 1647x, ID histórico generación 2018. Había entrado el 15-06 (slug NUEVO en ese momento). Solo dura 2 días en p1 — PRIMERA CAÍDA REGRESIVA DE UN ID HISTÓRICO DEL RUN. Segunda salida regresiva de Campana en 3 días (tras 19812510 el 15-06). El cluster `countries-y-barrios-cerrados-en-campana` se reduce de 4 IDs vivos a 2 (15608517, 18619706). La hipótesis 'clase histórica entra y se queda permanente' se REFINA: las altas con slug NUEVO son más fluctuantes que las altas en slug genérico." },
      { fuente: "argenprop — Campana", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-monet-barrio-privado--19862176", nota: "TRIPLE NOVEDAD: (a) SLUG NUEVO `monet-barrio-privado` jamás visto en el run (primer barrio privado fuera de la familia Cardales en Campana); (b) ID NUEVO 1986x, la generación más alta del run completo; (c) NUEVO FRONTIER GLOBAL DEL RUN que rompe el techo 19833452 (1983x, Cutral Có) que persistía hace 6 chequeos. Frontier global migra de Cutral Có → Campana en una jornada. Salto generacional +3 unidades — avance más grande del run en una jornada. Rompe la pausa del corredor en el día 4 antes de batir el récord previo (3 días)." }
    ],
    nota: "Cadencia diaria preservada. **EVENTO MAYOR DEL RUN**: Campana mete un slug NUEVO + ID NUEVO + frontier global NUEVO en una sola jugada con `monet-barrio-privado--19862176` (1986x). El frontier global del run pasa de 1983x → 1986x y de Cutral Có → Campana. **Salto generacional +3 unidades** — el avance más grande del run en una jornada, rompiendo la pauta de avances de +1 a +2. **Pausa del corredor interrumpida en día 4** — récord histórico previo (3 días: 14-06→16-06) se mantiene como tope sin romperse. **Verificación de hipótesis del 16-06**: (1) pausa 4 días → NO se cumple (interrumpida); (2) reaparición 19812510 → PENDIENTE, día 2 afuera; (3) OTRO ID rota de slug → AMBIGUA pero CONFIRMADA con matiz REVERSA (mismo 18526091 rota DE VUELTA — régimen bi-direccional consolidado); (4) entra ≥1984x → SE CUMPLE INDISCUTIBLEMENTE con 19862176; (5) Plaza Huincul/Chañar a 1980x+ → NO, ronda multi-fuente solo en Campana; (6) Rincón modifica set → NO, 7.º chequeo idéntico (récord propio); (7) Cutral Có rota → NO por rotación, SÍ por superación (sigue vivo pero ya no es techo). **PATRÓN NUEVO CONFIRMADO: SLUG ROTATION BI-DIRECCIONAL** — el motor mueve avisos entre taxonomías geográficas en ambos sentidos sin bajarlos. NO es progresión monotónica, es fluctuación. **PATRÓN NUEVO DETECTADO: CLASE HISTÓRICA CON SLUG NUEVO ES FLUCTUANTE** — 16475158 entra 15-06 y sale 17-06 (2 días), mientras 8214482/15827220/16238703/12060433 (entradas con slug genérico) persisten en hiper-estabilidad. **NUEVO CLUSTER**: `monet-barrio-privado` abre la categoría 'barrios privados no-Cardales en Campana'. Cluster Cardales global cae a 8 IDs (de 9 ayer). vacamuertapropiedades: 13.er chequeo consecutivo en canónico .com.ar. No se regenera listings.js (la alta es Campana, fuera del scope del catálogo Vaca Muerta). Sugerencias para 18-06: (1) si 19862176 persiste = consolidación nuevo frontier global; si sale tras 1-2 días = frontier global volátil; (2) si reaparece 19812510 o 16475158 = 'frontier oscila, vuelve' para 2 IDs simultáneos; (3) si OTRO ID distinto rota de slug = diversificación de slug rotation; (4) si entra OTRO ID 1986x+ = ronda multi-fuente activada por encima de 1983x; (5) si Plaza Huincul/Chañar a 1980x+ = ronda multi-fuente en carril original; (6) si Rincón modifica set = primera fluctuación post-7 chequeos; (7) si Cutral Có rota = primera baja del 1983x desde que dejó de ser techo; (8) si entra OTRO slug 'barrio privado' no-Cardales en Campana = diversificación del cluster confirmada."
  },
  {
    fecha: "2026-06-16",
    snapshot_base: "2026-06-15",
    resumen_por_fuente: {
      "argenprop — Añelo":                         { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Centenario":                    { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — San Patricio del Chañar":       { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Cutral Có":                     { snapshot: 1,  hoy: 1,  agregadas: 0, bajadas: 0, nota: "19833452 (1983x) PERSISTE 6.º chequeo consecutivo — récord propio del run en frontier global persistente, holgura HIPER-extrema sin retador." },
      "argenprop — Neuquén capital":               { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Plaza Huincul":                 { snapshot: 5,  hoy: 5,  agregadas: 0, bajadas: 0, nota: "19798515 (1979x) frontier local sin cambios — ronda multi-fuente sigue inactiva." },
      "argenprop — Plottier":                      { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0, nota: "8214482 PERSISTE 8.º chequeo consecutivo — clase histórica rota lento ULTRA-consolidada. 12060433 (1206x) 5.º chequeo. 19755626 NO vuelve (8.º chequeo afuera) — salida definitiva ULTRA-consolidada." },
      "argenprop — Rincón de los Sauces":          { snapshot: 6,  hoy: 6,  agregadas: 0, bajadas: 0, nota: "Set idéntico 6.º chequeo post-salto — set Rincón = 6 IDs ya es constante axiomática del sistema. 15827220 + 16238703 catalogados permanentes." },
      "argenprop — Campana":                       { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0, nota: "ESPEJO IDS — pero ANOMALÍA DE SLUG: 18526091 hoy aparece como `countries-y-barrios-cerrados-en-campana--18526091` (en 15-06 venía como `cardales-village--18526091`). Mismo ID, slug rotado por argenprop — primer caso del run de rotación de slug para ID activo en p1. Cluster countries/Cardales alcanza 9 IDs simultáneos (45% del set). 4 altas Cardales del 13-06 persisten 4.º chequeo. 16475158 (alta 15-06) 2.º chequeo. 19812510 (salido 15-06) 1.º chequeo afuera." },
      "argenprop — Zárate":                        { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "icasas — Añelo":                            { snapshot: null, hoy: null, agregadas: null, bajadas: null, nota: "Omitido: la paginación rota orden entre cargas y el diff no es confiable." },
      "vacamuertapropiedades — home (terrenos)":   { snapshot: 4,  hoy: 4,  agregadas: 0, bajadas: 0, nota: "Duodécimo chequeo consecutivo en dominio canónico vacamuertapropiedades.com.ar (sin contar gaps 04-06, 08-06, 10-06). Slugs idénticos (pid9, pid67, pid127, pid263). 5.º chequeo consecutivo idéntico desde el 12-06." }
    },
    cambios: [],
    nota: "Cadencia diaria preservada. **ESPEJO ABSOLUTO EN LAS 11 FUENTES 0+/0-**, tras la rotura mínima de Campana del 15-06 (1+/1-). **TERCER espejo absoluto del run** (12-06, 14-06, 16-06) — cadencia ~2 días para esta condición. **Verificación de hipótesis del 15-06**: (1) `19812510` reaparición ventana 7-9 días → PENDIENTE, día 1 afuera; (2) otro slug countries-y-barrios → AMBIGUA pero REFORZADA, 18526091 rota slug a countries-y-barrios-cerrados-en-campana (cluster alcanza 9 IDs = 45% del set Campana); (3) Cutral Có rota → NO, persiste 6.º chequeo (récord propio); (4) Plaza Huincul/Chañar a 1980x+ → NO, frontiers locales congelados; (5) entra aviso ≥1984x → NO, frontier global sigue en 1983x; (6) Rincón modifica set → NO, 6.º chequeo idéntico (constante axiomática). **PATRÓN NUEVO DETECTADO: SLUG ROTATION** — argenprop reorganiza categoría geográfica de un aviso sin bajarlo. 18526091 es primer caso del run — categoría aparte de 'slug NUEVO en fuente' (altas) y representa re-clasificación interna del motor. **Pausa del corredor generacional empata récord previo (3 días: 14-06, 15-06, 16-06)** — récord histórico previo era 06-06→09-06. Cuarto día rompería el patrón y entraría modo 'fijación-pre-salto' (avance compensatorio doble esperable). Clase histórica acumulativa intacta — los 5 IDs históricos (8214482, 15827220, 16238703, 12060433, 16475158) en estado de persistencia ULTRA-estable monotónicamente creciente. vacamuertapropiedades: 12.º chequeo consecutivo en canónico .com.ar. No se regenera listings.js (cero altas materiales). Sugerencias para 17-06: (1) si pausa corredor llega a 4 días = rompe récord; (2) si reaparece 19812510 = confirma 'frontier oscila, vuelve'; (3) si OTRO ID rota de slug = confirma 'slug rotation' como régimen; (4) si entra ≥1984x = fin de pausa, nueva ronda; (5) si Rincón modifica set = primera fluctuación realmente significativa post 6 chequeos; (6) si Cutral Có rota = primer cambio del frontier global del run."
  },
  {
    fecha: "2026-06-15",
    snapshot_base: "2026-06-14",
    resumen_por_fuente: {
      "argenprop — Añelo":                         { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Centenario":                    { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — San Patricio del Chañar":       { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Cutral Có":                     { snapshot: 1,  hoy: 1,  agregadas: 0, bajadas: 0, nota: "19833452 (1983x) PERSISTE 5.º chequeo consecutivo — frontera generacional 1983x del run con holgura HIPER-extrema." },
      "argenprop — Neuquén capital":               { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Plaza Huincul":                 { snapshot: 5,  hoy: 5,  agregadas: 0, bajadas: 0 },
      "argenprop — Plottier":                      { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0, nota: "8214482 PERSISTE 7.º chequeo consecutivo — clase histórica rota lento. 12060433 (1206x) 4.º chequeo. 19755626 NO vuelve (7.º chequeo afuera) — salida definitiva." },
      "argenprop — Rincón de los Sauces":          { snapshot: 6,  hoy: 6,  agregadas: 0, bajadas: 0, nota: "Set idéntico 5.º chequeo post-salto — cambio estructural ULTRA-consolidado, persistencia prácticamente axiomática." },
      "argenprop — Campana":                       { snapshot: 20, hoy: 20, agregadas: 1, bajadas: 1, nota: "ÚNICA FUENTE CON MOVIMIENTO HOY. Rompe espejo absoluto del 14-06 con 1+/1-. SALE 19812510 (1981x, frontera local Campana desde el 06-06 — 9 días en p1) → primera caída regresiva de frontier local activo del run. ENTRA 16475158 (slug NUEVO 'countries-y-barrios-cerrados-en-campana', familia 1647x, ID histórico generación 2018-2019) → 5.ª alta de la clase histórica viva en p1 simultáneamente. Frontera Campana baja de 1981x a 1978x (19782477 queda como techo)." },
      "argenprop — Zárate":                        { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "icasas — Añelo":                            { snapshot: null, hoy: null, agregadas: null, bajadas: null, nota: "Omitido: la paginación rota orden entre cargas y el diff no es confiable." },
      "vacamuertapropiedades — home (terrenos)":   { snapshot: 4,  hoy: 4,  agregadas: 0, bajadas: 0, nota: "Undécimo chequeo consecutivo en dominio canónico vacamuertapropiedades.com.ar (sin contar gaps 04-06, 08-06, 10-06). Slugs idénticos (pid9, pid67, pid127, pid263)." }
    },
    cambios: [
      { fuente: "argenprop — Campana", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-las-calandrias--19812510", nota: "FRONTERA LOCAL Campana 1981x — estaba en p1 desde el 06-06 (9 días consecutivos). Primera caída regresiva de frontier local activo del run. Su salida significa que la frontera generacional propia de Campana cae de 1981x → 1978x (19782477 queda como techo Campana). Hipótesis: las fronteras locales tienen vida media ~5-10 días en p1, no son permanentes como las clases históricas." },
      { fuente: "argenprop — Campana", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-countries-y-barrios-cerrados-en-campana--16475158", nota: "Slug NUEVO en Campana, familia 1647x (ID histórico generación 2018). Continúa el flujo de IDs históricos a Campana (se suma a 15608517 reaparecida del 13-06). Con esta alta son 5 IDs históricos (7-8 dígitos) vivos en p1 simultáneamente — patrón 'clase histórica entra y se queda' alcanza nueva masa crítica." }
    ],
    nota: "Cadencia diaria preservada. **Movimiento ÚNICO: Campana 1+/1- rompe el espejo absoluto del 14-06**, 10 fuentes en espejo absoluto. **Primera caída regresiva de frontier local activo del run** (19812510, 1981x, Campana, 9 días en p1). Frontera Campana baja de 1981x a 1978x. **5.ª alta de la clase histórica viva en p1 simultáneamente** (16475158 se suma a 8214482, 15827220, 16238703, 12060433). **Patrón 'Cardales/countries reemplaza a frontier'**: salida de 1981x + entrada de 1647x (ambas en Campana) sugiere que el motor está sustituyendo techo generacional por relleno histórico. **Cutral Có 19833452 PERSISTE 5.º chequeo consecutivo** — frontera generacional 1983x global del run con holgura HIPER-extrema. **Rincón cambio estructural ULTRA-consolidado** (5.º chequeo post-salto). vacamuertapropiedades: 11.º chequeo consecutivo en canónico .com.ar. No se regenera listings.js (16475158 es ID histórico, no nueva pieza de inventario reciente)."
  },
  {
    fecha: "2026-06-14",
    snapshot_base: "2026-06-13",
    resumen_por_fuente: {
      "argenprop — Añelo":                         { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Centenario":                    { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — San Patricio del Chañar":       { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Cutral Có":                     { snapshot: 1,  hoy: 1,  agregadas: 0, bajadas: 0, nota: "19833452 (1983x) PERSISTE 4.º chequeo consecutivo — frontera generacional 1983x del run con holgura HIPER-extrema." },
      "argenprop — Neuquén capital":               { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Plaza Huincul":                 { snapshot: 5,  hoy: 5,  agregadas: 0, bajadas: 0 },
      "argenprop — Plottier":                      { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0, nota: "8214482 PERSISTE 6.º chequeo consecutivo. 12060433 (1206x) 3.º chequeo. 19755626 6.º chequeo afuera — salida definitiva confirmada." },
      "argenprop — Rincón de los Sauces":          { snapshot: 6,  hoy: 6,  agregadas: 0, bajadas: 0, nota: "Set idéntico 4.º chequeo post-salto — cambio estructural confirmadísimo." },
      "argenprop — Campana":                       { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0, nota: "Vuelve al espejo tras el sacudón del 13-06 (4+/4-). Las 4 altas Cardales persisten 2.º chequeo. Familia 1592x sigue afuera (2.º chequeo) — baja real coordinada confirmada." },
      "argenprop — Zárate":                        { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "icasas — Añelo":                            { snapshot: null, hoy: null, agregadas: null, bajadas: null, nota: "Omitido: la paginación rota orden entre cargas y el diff no es confiable." },
      "vacamuertapropiedades — home (terrenos)":   { snapshot: 4,  hoy: 4,  agregadas: 0, bajadas: 0, nota: "Décimo chequeo consecutivo en dominio canónico vacamuertapropiedades.com.ar (sin contar gaps 04-06, 08-06, 10-06). Slugs idénticos." }
    },
    cambios: [],
    nota: "Cadencia diaria preservada. **ESPEJO ABSOLUTO EN LAS 11 FUENTES 0+/0-** tras el sacudón del 13-06 (Campana 4+/4-). 2.º espejo absoluto del run (12-06, 14-06) — cadencia ~2 días. **Fijación post-sacudón confirmada**: las 4 altas Cardales del 13-06 persisten íntegras 2.º chequeo (15608517, 18045092, 19782477, 18526091); familia 1592x sigue afuera 2.º chequeo (baja real coordinada confirmada). **Cutral Có 19833452 PERSISTE 4.º chequeo consecutivo** — frontera 1983x global con holgura HIPER-extrema. **Frontiers Plaza Huincul/Chañar 1979x sin cambios** — ronda multi-fuente inactiva. **Rincón 5.º chequeo post-salto** — cambio estructural axiomático. vacamuertapropiedades: 10.º chequeo consecutivo en canónico .com.ar. No se regenera listings.js."
  },
  {
    fecha: "2026-06-13",
    snapshot_base: "2026-06-12",
    resumen_por_fuente: {
      "argenprop — Añelo":                         { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Centenario":                    { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — San Patricio del Chañar":       { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Cutral Có":                     { snapshot: 1,  hoy: 1,  agregadas: 0, bajadas: 0, nota: "19833452 (1983x) PERSISTE 3.º chequeo consecutivo — frontera generacional 1983x del run fijada con holgura." },
      "argenprop — Neuquén capital":               { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Plaza Huincul":                 { snapshot: 5,  hoy: 5,  agregadas: 0, bajadas: 0 },
      "argenprop — Plottier":                      { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0, nota: "12060433 (1206x) PERSISTE 2.º chequeo — alta histórica consolidada. 8214482 PERSISTE 5.º chequeo consecutivo — clase histórica rota lento confirmadísima. 19755626 NO vuelve (5.º chequeo afuera) — salida definitiva." },
      "argenprop — Rincón de los Sauces":          { snapshot: 6,  hoy: 6,  agregadas: 0, bajadas: 0, nota: "Set idéntico 3.º chequeo post-salto — cambio estructural DEFINITIVAMENTE confirmado. 15827220 + 16238703 ya son parte del catálogo permanente." },
      "argenprop — Campana":                       { snapshot: 20, hoy: 20, agregadas: 4, bajadas: 4, nota: "ÚNICA FUENTE CON MOVIMIENTO HOY. Rompe espejo absoluto del 12-06. Bajan en bloque los 4 IDs familia 1592x (15925529/48/54/71) — primera BAJA MASIVA de una misma familia del run, atípica vs FIFO habitual. Entran 4 fichas todas en zona Los Cardales/countries: 15608517 REAPARECE tras 7 días afuera (paralelo a 19311911/Plottier 9 días), 19782477 (slug NUEVO 'barrio-el-campo-fincas-exclusivas-cardales', familia 1978x — no rompe frontier local 1981x), 18526091 (slug NUEVO 'cardales-village'), 18045092 (2.º lote de slug ya activo 'la-reserva-cardales'). Re-balanceo geográfico de p1: sale Campana centro, entra cinturón residencial." },
      "argenprop — Zárate":                        { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "icasas — Añelo":                            { snapshot: null, hoy: null, agregadas: null, bajadas: null, nota: "Omitido: la paginación rota orden entre cargas y el diff no es confiable." },
      "vacamuertapropiedades — home (terrenos)":   { snapshot: 4,  hoy: 4,  agregadas: 0, bajadas: 0, nota: "Noveno chequeo consecutivo en dominio canónico vacamuertapropiedades.com.ar (sin contar gaps 04-06, 08-06, 10-06). Slugs idénticos (pid9, pid67, pid127, pid263)." }
    },
    cambios: [
      { fuente: "argenprop — Campana", tipo: "bajada", url: "https://www.argenprop.com/terreno-en-venta-en-campana--15925529", nota: "Bloque 1592x — cae junto a los otros 3 IDs familia 1592x. Primera baja masiva coordinada del run. Hipótesis: re-rank temporal vs despublicación del vendedor vs downgrade. Vigilar 14-06." },
      { fuente: "argenprop — Campana", tipo: "bajada", url: "https://www.argenprop.com/terreno-en-venta-en-campana--15925548", nota: "Bloque 1592x — sale en bloque." },
      { fuente: "argenprop — Campana", tipo: "bajada", url: "https://www.argenprop.com/terreno-en-venta-en-campana--15925554", nota: "Bloque 1592x — sale en bloque." },
      { fuente: "argenprop — Campana", tipo: "bajada", url: "https://www.argenprop.com/terreno-en-venta-en-campana--15925571", nota: "Bloque 1592x — sale en bloque." },
      { fuente: "argenprop — Campana", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-countries-y-barrios-cerrados-en-campana--15608517", nota: "REAPARICIÓN — la familia 1560x estuvo en p1 hasta 06-06 (cayó ese día por FIFO con la entrada del 1981x), vuelve tras 7 días afuera. Cadencia muy similar al 19311911/Plottier (9 días), confirma que la categoría 're-emergencia de ID reciente' opera con ciclo ~1 semana, distinta de la 'alta histórica' (que persiste sin re-bajas)." },
      { fuente: "argenprop — Campana", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-la-reserva-cardales--18045092", nota: "Segundo lote del slug 'la-reserva-cardales' (el 15749463 ya estaba en p1). Familia 1804x — antigüedad media, jamás vista antes en p1 del run." },
      { fuente: "argenprop — Campana", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-barrio-el-campo-fincas-exclusivas-cardales--19782477", nota: "SLUG NUEVO en Campana — jamás visto en el run. Familia 1978x — cercana al frontier local 1981x pero NO lo supera (19812510/Las Calandrias sigue como techo de Campana). Entra DEBAJO del frontier ya establecido = 'relleno', no avance." },
      { fuente: "argenprop — Campana", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-cardales-village--18526091", nota: "SLUG NUEVO en Campana — jamás visto. Familia 1852x — antigüedad media. Tercer slug nuevo del run en Campana (tras 'las-calandrias' del 06-06 y 'barrio-el-campo-fincas-exclusivas-cardales' de hoy)." }
    ],
    nota: "Cadencia diaria preservada. **Movimiento exclusivo en Campana (4+/4-), 10 fuentes en espejo absoluto.** Rompe el espejo absoluto del 12-06 sin ser ráfaga multi-fuente. **Patrón NUEVO identificado: baja masiva de familia** — los 4 IDs 15925x caen juntos, atípico vs el FIFO 1+/1- habitual. **Patrón CONSOLIDADO: re-emergencia de ID reciente con cadencia ~1 semana** — 15608517 vuelve tras 7 días (vs 19311911 tras 9 días). **Patrón ya observado, REFORZADO: slug nuevo en Campana** — hoy entran 2 slugs nuevos simultáneos (19782477 + 18526091), elevando a 3 el total de slugs nuevos en Campana del run (incluye 19812510/las-calandrias del 06-06). Re-balanceo geográfico de p1: sale Campana centro (familia 1592x), entra cinturón residencial (Los Cardales / countries). **Frontera generacional global del run sigue en 1983x/Cutral Có (3.º chequeo consecutivo)** — el 19782477 entra DEBAJO, no es avance del frontier. **Rincón cambio estructural DEFINITIVAMENTE confirmado** (3.º chequeo post-salto). Clase histórica acumulativa intacta — los 4 IDs históricos persisten. vacamuertapropiedades: 9.º chequeo consecutivo en canónico .com.ar. No se regenera listings.js (todas las altas son countries/barrios cerrados residenciales fuera del foco industrial). Sugerencias para 14-06: (1) si los 4 15925x vuelven juntos = fue re-rank temporal; si ninguno vuelve = baja real coordinada. (2) Si entra OTRO slug nuevo en Campana = re-balanceo geográfico persistente. (3) Si Cutral Có rota o cae = frontier 1983x se mueve; si persiste 4.º = fijación con holgura máxima. (4) Si reaparece OTRO ID en ventana ~7-9 días en cualquier fuente = cadencia 're-emergencia' confirmadísima. (5) Si Plaza Huincul/Chañar suman 1983x+ propio = ronda de avance multi-fuente arrancando."
  },
  {
    fecha: "2026-06-09",
    snapshot_base: "2026-06-07",
    resumen_por_fuente: {
      "argenprop — Añelo":                         { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Centenario":                    { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — San Patricio del Chañar":       { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0, nota: "Tercer día consecutivo en espejo tras el double-up del 05-06 (familia 1979x). El corredor generacional sigue pausado." },
      "argenprop — Cutral Có":                     { snapshot: 1,  hoy: 1,  agregadas: 0, bajadas: 0 },
      "argenprop — Neuquén capital":               { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Plaza Huincul":                 { snapshot: 5,  hoy: 5,  agregadas: 0, bajadas: 0, nota: "Tercer día consecutivo en espejo tras el 19798515 del 05-06. Pausa más larga del corredor desde su arranque." },
      "argenprop — Plottier":                      { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0, nota: "8214482 PERSISTE (2.º chequeo consecutivo) — refuta 'alta puntual' del 07-06, confirma 'clase histórica rota lento' alineado con 8214464 (Centenario) y 9068551 (Rincón)." },
      "argenprop — Rincón de los Sauces":          { snapshot: 4,  hoy: 6,  agregadas: 2, bajadas: 0, nota: "Rincón ROMPE su techo histórico de 4 publicaciones por primera vez en el run — salta a 6. Doble alta histórica: entran 15827220 (familia 1582x) y 16238703 (familia 1623x), ambos IDs viejos de 8 dígitos jamás vistos. Amplifica el patrón 'alta histórica' inaugurado por 8214482 (Plottier 07-06)." },
      "argenprop — Campana":                       { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0, nota: "Tercer día consecutivo en espejo tras el 1981x del 06-06. Las Calandrias sin segundo ID. Frontera generacional estable." },
      "argenprop — Zárate":                        { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "icasas — Añelo":                            { snapshot: null, hoy: null, agregadas: null, bajadas: null, nota: "Omitido: la paginación rota orden entre cargas y el diff no es confiable." },
      "vacamuertapropiedades — home (terrenos)":   { snapshot: 4,  hoy: 4,  agregadas: 0, bajadas: 0, nota: "Sexto chequeo consecutivo en dominio canónico vacamuertapropiedades.com.ar (sin contar gaps 04-06 y 08-06). Slugs idénticos (pid9, pid67, pid127, pid263)." }
    },
    cambios: [
      { fuente: "argenprop — Rincón de los Sauces", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-rincon-de-los-sauces--15827220", nota: "ALTA HISTÓRICA — JAMÁS visto en ningún snapshot previo del run (verificado contra todos los _check_*.json desde abril). ID de 8 dígitos pero familia 1582x (generación 2017-2019). Régimen 'alta histórica' alineado con 8214482 (Plottier 07-06), 8214464 (Centenario, todo el run), 9068551 (Rincón, todo el run). Rincón rompe su techo histórico de 4 publicaciones por primera vez en el run." },
      { fuente: "argenprop — Rincón de los Sauces", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-rincon-de-los-sauces--16238703", nota: "ALTA HISTÓRICA — JAMÁS visto antes en el run. Familia 1623x, también ID viejo de 8 dígitos. Doble re-superficie simultánea en Rincón: dos avisos antiguos emergen a p1 a la vez. Refuerza que el patrón 'alta histórica' no es idiosincrático de Plottier sino un proceso multi-fuente del motor de ranking de argenprop sobre IDs antiguos." }
    ],
    nota: "Gap de 1 día (no hubo corrida 08-06). **Único movimiento: Rincón 2+/0− (4 → 6 URLs)** — Rincón rompe por PRIMERA VEZ en el run su techo histórico de 4 publicaciones, sumando dos altas históricas simultáneas (familias 1582x y 1623x). 10 fuentes en espejo absoluto. **Confirmación hipótesis 07-06**: (a) Plottier 8214482 PERSISTE 2.º chequeo consecutivo — refuta 'alta puntual', confirma 'clase histórica rota lento'; (b) el patrón 'alta de aviso histórico' se amplifica de Plottier a Rincón, dejando de ser idiosincrático para volverse multi-fuente; (c) refinamiento del modelo — no es solo 7 dígitos, también 8 dígitos de generación 2017-2019 (familias 1582x, 1623x, 1888x); el criterio real es ANTIGÜEDAD DEL AVISO, no longitud del ID. **Corredor generacional pausa por 3.º día consecutivo** — la pausa más larga del run desde su arranque a fines de mayo (tras 1981x del 06-06: espejo 06-07, gap 06-08, espejo 09-06). Si el patrón 'ráfagas cortas + pausas largas' se confirma, el próximo avance debería ser doble. vacamuertapropiedades: 6.º chequeo consecutivo en canónico .com.ar. No se regenera listings.js (Rincón fuera del foco industrial; las altas son URLs sin precio/superficie). Sugerencias para 10-06: (1) si otra fuente (Centenario/Neuquén/Campana) suma su primera alta histórica, confirma 'ronda multi-fuente'; (2) si el corredor retoma con 1981x+, ráfaga 3 esperada (posible avance doble compensando pausa larga); (3) si 15827220/16238703 desaparecen rápido, alta puntual (Rincón vuelve a 4); si persisten, cambio estructural (Rincón pasa a tener set estable de 6)."
  },
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
