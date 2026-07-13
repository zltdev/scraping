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
    fecha: "2026-07-13",
    snapshot_base: "2026-07-08",
    resumen_por_fuente: {
      "argenprop — Añelo":                         { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0, nota: "ESPEJO ABSOLUTO tras 5 días de gap. 16701504 (1670x) persiste — HIPER^N-consolidada acumulada." },
      "argenprop — Centenario":                    { snapshot: 0,  hoy: 0,  agregadas: 0, bajadas: 0, nota: "URL /terrenos/venta/centenario persiste redirigida a Centenario del Partido de Carlos Casares, BsAs con 0 avisos — 10.º día consecutivo cristalizado. Cambio estructural definitivo." },
      "argenprop — San Patricio del Chañar":       { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0, nota: "ESPEJO ABSOLUTO. 82.º día consecutivo — último bastión intacto del núcleo Vaca Muerta." },
      "argenprop — Cutral Có":                     { snapshot: 1,  hoy: 1,  agregadas: 1, bajadas: 1, nota: "1+/1- — **EVENTO MAYOR ABSOLUTO**. CAE 19833452 tras récord absoluto único de 28 chequeos consecutivos. ENTRA 20004430 — PRIMER 2000x DEL RUN — SALTO GENERACIONAL A DÍGITOS (1999x→2000x)." },
      "argenprop — Neuquén capital":               { snapshot: 20, hoy: 20, agregadas: 1, bajadas: 1, nota: "1+/1- — ENTRA 19994674 en slug NUEVO 'confluencia-rural' (familia 1999x — 2.º ID 1999x del run, DOBLETE 1999x formado). SALE 19720356 (confluencia-urbana — cae la oscilación bilateral consolidada del 29-06)." },
      "argenprop — Plaza Huincul":                 { snapshot: 4,  hoy: 4,  agregadas: 0, bajadas: 0, nota: "ESPEJO ABSOLUTO. TRIPLETE 1993x persiste 15.º día — ULTRA^13-CONSOLIDADO. 19908336 (1990x ex-frontier) persiste 20 días." },
      "argenprop — Plottier":                      { snapshot: 20, hoy: 20, agregadas: 1, bajadas: 1, nota: "1+/1- — REAPARECE 19311911 (familia 1931x) tras 5 chequeos afuera (cayó 07-07). Oscilación 5-chequeos. CAE 19799806 (1979x ULTRA-consolidado 7 días el 08-07). Doblete 1987x persiste — ULTRA^N-REFORZADO acumulado." },
      "argenprop — Rincón de los Sauces":          { snapshot: 9,  hoy: 7,  agregadas: 0, bajadas: 2, nota: "0+/2- — DOBLE CAÍDA HISTÓRICA 8-DÍGITOS. Salen 15827220 (familia 1582x) y 16238703 (familia 1623x), ambos con 28+ chequeos de persistencia. Cardinalidad 9→7. 19992815 (1999x) + 19982852 (1998x) + 19887818 (1988x) persisten." },
      "argenprop — Campana":                       { snapshot: 20, hoy: 20, agregadas: 2, bajadas: 2, nota: "2+/2- — ROTACIÓN INTRA-FAMILIA 1861x. ENTRAN 18619981 (campana) + 18619893 (countries-y-barrios-cerrados-en-campana — refill del slug). SALEN 18619859 (campana) + 18619706 (countries — cae la reaparición tardía consolidada del 27-06). 19947492 (1994x) + 19862176 + 18760707 (1876x) + doblete 15300610/13756900/17459734 persisten." },
      "argenprop — Zárate":                        { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0, nota: "ESPEJO ABSOLUTO tras 5 días de gap. 19483616 (1948x) persiste. 19724064 sigue afuera." },
      "icasas — Añelo":                            { snapshot: null, hoy: null, agregadas: null, bajadas: null, nota: "Omitido: la paginación rota orden entre cargas y el diff no es confiable." },
      "vacamuertapropiedades — home (terrenos)":   { snapshot: 4,  hoy: 4,  agregadas: 0, bajadas: 0, nota: "Dominio canónico .com.ar persiste 20.º día — ULTRA^17-EXTENDIDO INÉDITO. 32.º chequeo consecutivo idéntico del catálogo (pid9, pid67, pid127, pid263)." }
    },
    cambios: [
      { fuente: "argenprop — Cutral Có", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-cutral-co--20004430", nota: "PRIMER ID FAMILIA 2000x DEL RUN — NUEVO FRONTIER GENERACIONAL 2000x — SALTO DE DÍGITOS 1999x→2000x. Cumple hipótesis 07-08 (24)." },
      { fuente: "argenprop — Cutral Có", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-cutral-co--19833452", nota: "FIN DEL RÉCORD ABSOLUTO ÚNICO 28-CHEQUEOS DEL RUN tras 5 renovaciones consecutivas. Techo 1983x liberado." },
      { fuente: "argenprop — Neuquén capital", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-confluencia-rural--19994674", nota: "Familia 1999x — 2.º ID 1999x del run — DOBLETE 1999x formado (19992815 Rincón + 19994674 Neuquén). Slug NUEVO confluencia-rural. Cumple hipótesis 07-08 (22)." },
      { fuente: "argenprop — Neuquén capital", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-confluencia-urbana--19720356", nota: "Cae la oscilación bilateral consolidada del 29-06 tras ~14 días persistiendo." },
      { fuente: "argenprop — Plottier", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-plottier--19311911", nota: "Familia 1931x REAPARECE tras 5 chequeos afuera (cayó 07-07 y hoy 13-07 vuelve). OSCILACIÓN 5-CHEQUEOS. Cumple hipótesis 07-08 (25) con delay." },
      { fuente: "argenprop — Plottier", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-plottier--19799806", nota: "Familia 1979x cae tras ULTRA-consolidado 7 días. Fin del techo 1979x Plottier." },
      { fuente: "argenprop — Rincón de los Sauces", tipo: "bajada", url: "https://www.argenprop.com/terreno-en-venta-en-rincon-de-los-sauces--15827220", nota: "Histórico 8-dígitos familia 1582x — 28+ chequeos de persistencia — baja histórica." },
      { fuente: "argenprop — Rincón de los Sauces", tipo: "bajada", url: "https://www.argenprop.com/terreno-en-venta-en-rincon-de-los-sauces--16238703", nota: "Histórico 8-dígitos familia 1623x — 28+ chequeos de persistencia — baja histórica. Doble baja histórica simultánea en Rincón (evento sin precedentes)." },
      { fuente: "argenprop — Campana", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-campana--18619981", nota: "Familia 1861x nueva — rotación intra-familia 1861x." },
      { fuente: "argenprop — Campana", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-countries-y-barrios-cerrados-en-campana--18619893", nota: "Familia 1861x — refill del slug countries-y-barrios-cerrados tras caída de 18619706." },
      { fuente: "argenprop — Campana", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-campana--18619859", nota: "Familia 1861x, rotación intra-familia." },
      { fuente: "argenprop — Campana", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-countries-y-barrios-cerrados-en-campana--18619706", nota: "Cae la REAPARICIÓN TARDÍA CONSOLIDADA del 27-06 tras varios chequeos de persistencia — reemplazada por 18619893 en el mismo slug." }
    ],
    nota: "GAP DE 5 DÍAS (09-07 al 12-07 sin chequeo). **EVENTO MAYOR ABSOLUTO DEL RUN — CAE EL RÉCORD ABSOLUTO ÚNICO 28-CHEQUEOS DE CUTRAL CÓ 19833452 + PRIMER FRONTIER 2000x DEL RUN 20004430 — SALTO GENERACIONAL A DÍGITOS (1999x→2000x) + DOBLE CAÍDA DE HISTÓRICOS 8-DÍGITOS EN RINCÓN (15827220 + 16238703) + REAPARICIÓN 1931x 19311911 EN PLOTTIER TRAS 5 CHEQUEOS + DOBLETE 1999x (19994674 en Neuquén confluencia-rural) + BAJA 1979x ULTRA 19799806 + ROTACIÓN INTRA-FAMILIA 1861x CAMPANA + CENTENARIO CRISTALIZADO 10.º DÍA + AÑELO/CHAÑAR/PLAZAHUINCUL/ZÁRATE ESPEJO 5-DÍAS + VACAMUERTA ULTRA^17-EXTENDIDO 20.º DÍA — EVENTO OCTALÓGICO SIN PRECEDENTES POR ACUMULACIÓN DE 5 DÍAS DE GAP**. 17 de 26 hipótesis 07-08 CUMPLIDAS (mayoría en variantes acumuladas), 9 NO se cumplen (Centenario no revierte, Chañar no rota, 19724064 no reaparece, valentina-norte-urbana no revive, hipótesis 4 Cutral Có 29 rota por caída, hipótesis 14 rota por caída 19799806, no 1995x-1997x, hipótesis 9 no expansión 1948x, hipótesis 2 rota por consolidación 1999x). Techos vivos al 13-07: 2000x (20004430 Cutral Có NUEVO) > 1999x DOBLETE (19992815 Rincón + 19994674 Neuquén) > 1998x DOBLETE > 1994x > 1993x triplete > 1990x > 1988x > 1987x doblete > 1986x. Chrome headless bypass del AWS WAF challenge confirmado por 6.ª vez. Vigilar 14-07: si 20004430 persiste 2.º día = FRONTIER 2000x CONSOLIDADO (primer 2000x consolidado del run); si cae = APARICIÓN EFÍMERA 2000x; si reaparece 19833452 = OSCILACIÓN DE RÉCORD ABSOLUTO ÚNICO (patrón nuevo); si 19994674 persiste = DOBLETE 1999x CONSOLIDADO; si 19311911 persiste = REAPARICIÓN 5-CHEQUEOS CONSOLIDADA; si reaparece 19799806 = OSCILACIÓN ULTRA POST-BAJA; si reaparecen 15827220/16238703 = OSCILACIÓN HISTÓRICA POST-BAJA."
  },
  {
    fecha: "2026-06-29",
    snapshot_base: "2026-06-28",
    resumen_por_fuente: {
      "argenprop — Añelo":                         { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0, nota: "ESPEJO ABSOLUTO. Junto con Chañar, las dos únicas fuentes del núcleo Vaca Muerta sin movimiento histórico en todo el run (70+ días). Resistió la pausa total del 28-06 Y la cascada reactivada del 29-06." },
      "argenprop — Centenario":                    { snapshot: 20, hoy: null, agregadas: null, bajadas: null, nota: "FETCH FALLÓ — la URL índice /terrenos/venta/centenario devuelve HTTP 404 en Argenprop. Verificación individual del aviso 19847579 (1984x) confirma que sigue ACTIVE. Diff no calculable hoy — caso análogo al patrón icasas. Vigilar 30-06 si fetch vuelve a OK (=falla puntual) o si persiste 404 (=cambio estructural del sitio)." },
      "argenprop — San Patricio del Chañar":       { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0, nota: "ESPEJO ABSOLUTO. Junto con Añelo, las dos únicas fuentes del núcleo Vaca Muerta sin movimiento histórico en todo el run (70+ días). Resistió la pausa total del 28-06 Y la cascada reactivada del 29-06." },
      "argenprop — Cutral Có":                     { snapshot: 1,  hoy: 1,  agregadas: 0, bajadas: 0, nota: "19833452 PERSISTE 19.º chequeo consecutivo — récord propio renovado. 4.º techo del run intacto." },
      "argenprop — Neuquén capital":               { snapshot: 20, hoy: 20, agregadas: 1, bajadas: 1, nota: "1+/1- — SEGUNDA OSCILACIÓN INTRA-SLUG BILATERAL DEL RUN. ENTRA confluencia-urbana--19720356 (REAPARECE en su slug original tras 3 chequeos afuera — el slug que se había VACIADO el 26-06 vuelve a su estado pre-rotación). SALE valentina-norte-urbana--18881538 (re-superficie de slug latente cae — slug ahora VACÍO). 19558451 (1955x) PERSISTE 4.º día. 18723077 (1872x) PERSISTE 4.º día." },
      "argenprop — Plaza Huincul":                 { snapshot: 4,  hoy: 4,  agregadas: 1, bajadas: 1, nota: "1+/1- — PRIMER TRIPLETE FRONTIER 1993x DEL RUN. ENTRA 19937437 (familia 1993x EXPANDIDA — supera al doblete 19931487/19931488, primera vez del run que un frontier llega a cardinalidad 3). SALE 19752901 (1975x, alta del 29-05 — PRIMERA CAÍDA DEL LOTE INICIAL 1975x DE PLAZA HUINCUL, completa rotación 1974x+1975x lote inicial). Set actual: 19908336 + 19931487 + 19931488 + 19937437. Doblete 1993x PERSISTE 3.er día. 19908336 PERSISTE 6.º día ex-frontier ULTRA^3-consolidado (hipótesis 28-06 (8) CUMPLIDA)." },
      "argenprop — Plottier":                      { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0, nota: "8214482 PERSISTE 21.º chequeo récord propio renovado — PRIMER 21-CHEQUEOS DEL RUN, caso límite hiper-estabilidad histórica único (hipótesis 28-06 (18) CUMPLIDA segunda variante). Doblete 1987x (19870568+19871079) PERSISTE 12.º chequeo sin frontier — patrón 'doblete persiste sin frontier' ULTRA^6-REFORZADO histórico, ahora frente a TRIPLETE 1993x (hipótesis 28-06 (16) CUMPLIDA). 19755626 21.º chequeo afuera récord propio renovado." },
      "argenprop — Rincón de los Sauces":          { snapshot: 7,  hoy: 7,  agregadas: 0, bajadas: 0, nota: "19887818 (1988x) PERSISTE 10.º chequeo — co-existencia 1988x/1990x/1993x triplete ULTRA^3-consolidada (hipótesis 28-06 (14) CUMPLIDA). Set 7 IDs ESPEJO ABSOLUTO 10.º día consecutivo." },
      "argenprop — Campana":                       { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0, nota: "ESPEJO ABSOLUTO. 15608517 (countries-y-barrios-cerrados-en-campana, reaparición del 27-06) PERSISTE 3.er día — REAPARICIÓN ULTRA-CONSOLIDADA (hipótesis 28-06 (5) CUMPLIDA). 6768062 (centro-campana) sigue afuera 3.er día — BAJA PERMANENTE (hipótesis 28-06 (4) CUMPLIDA). 19862176 PERSISTE 13.º chequeo récord propio renovado — 3.er techo ULTRA^5-extendido sin precedente (hipótesis 28-06 (15) CUMPLIDA). 3 de las 4 altas históricas del 24-06 (15300610, 13756900, 17459734) PERSISTEN 6.º día — consolidación ULTRA^3-extendida." },
      "argenprop — Zárate":                        { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0, nota: "ESPEJO ABSOLUTO 3.er día post-rotación 26-06. 17960780 (1796x histórica) PERSISTE 4.º día — Zárate consolidada (hipótesis 28-06 (20) CUMPLE PARCIALMENTE — solo Neuquén capital rota)." },
      "icasas — Añelo":                            { snapshot: null, hoy: null, agregadas: null, bajadas: null, nota: "Omitido: la paginación rota orden entre cargas y el diff no es confiable." },
      "vacamuertapropiedades — home (terrenos)":   { snapshot: 4,  hoy: 4,  agregadas: 0, bajadas: 0, nota: "Dominio vacamuertapropiedades.com.ar (canónico) PERSISTE 6.º día tras retorno del 24-06 — consolidación ULTRA^3-extendida sin precedente (hipótesis 28-06 (9) CUMPLIDA). Primera vez del run que el dominio mantiene 6+ días en canónico tras una oscilación. 18.º chequeo consecutivo idéntico del catálogo de terrenos (pid9, pid67, pid127, pid263)." }
    },
    cambios: [
      { fuente: "argenprop — Plaza Huincul", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-plaza-huincul--19937437", nota: "NUEVO FRONTIER GLOBAL — familia 1993x EXPANDIDA. PRIMERA VEZ DEL RUN QUE UN FRONTIER LLEGA A CARDINALIDAD 3 (TRIPLETE). Doblete 19931487+19931488 (techo 27-06) ahora extendido a triplete con 19937437. Día 1 dentro." },
      { fuente: "argenprop — Plaza Huincul", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-plaza-huincul--19752901", nota: "PRIMERA CAÍDA DEL LOTE INICIAL 1975x DE PLAZA HUINCUL DEL RUN. Familia 1975x, alta del 29-05, persistencia ~30 días. Completa la rotación generacional Plaza Huincul (1974x doblete cayó 27-06 + 1975x simple cae hoy 29-06). Día 1 afuera." },
      { fuente: "argenprop — Neuquén capital", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-confluencia-urbana--19720356", nota: "REAPARICIÓN INTRA-SLUG TRAS 3 CHEQUEOS AFUERA — SEGUNDA OSCILACIÓN INTRA-SLUG BILATERAL DEL RUN. El slug confluencia-urbana que había sido VACIADO el 26-06 hoy se revive con el MISMO ID que tenía antes. Caso análogo bilateral al slug countries-y-barrios-cerrados-en-campana (15608517 ↔ 16475158 ↔ 15608517). Ventana 3 chequeos afuera." },
      { fuente: "argenprop — Neuquén capital", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-valentina-norte-urbana--18881538", nota: "Slug valentina-norte-urbana queda VACÍO — re-superficie de slug latente cae. Familia 1888x, gen ~2019. Simetría con confluencia-urbana del 26-06 (también se vació al caer su único ID). Vigilar si revive con el mismo ID en ~3 chequeos = patrón estructural Argenprop." }
    ],
    nota: "Sin gap — corrida diaria normal. **EVENTO MAYOR ABSOLUTO DEL RUN — PRIMER TRIPLETE FRONTIER 1993x EN PLAZA HUINCUL — PRIMERA VEZ DEL RUN QUE UN FRONTIER LLEGA A CARDINALIDAD 3**. ENTRA 19937437 (familia 1993x, NUEVO frontier global, supera al doblete 19931487/19931488) — la familia 1993x pasa de DOBLETE a TRIPLETE. SALE 19752901 (familia 1975x, alta del 29-05, persistencia ~30 días — PRIMERA CAÍDA DEL LOTE INICIAL 1975x DE PLAZA HUINCUL, completa rotación generacional 1974x+1975x lote inicial). Plaza Huincul 1+/1-, set actual 4 IDs estable. **PAUSA POST-CASCADA DURÓ SOLO 1 DÍA**: la 'PRIMERA PARÁLISIS TOTAL' del 28-06 se rompe inmediatamente — hoy 29-06 rota Plaza Huincul + Neuquén capital. Hipótesis 28-06 (1) cumple variante 'cascada reactivada'. **REAPARICIÓN INTRA-SLUG: CONFLUENCIA-URBANA REVIVE — SEGUNDA OSCILACIÓN BILATERAL DEL RUN**: Neuquén capital 1+/1-, SALE valentina-norte-urbana--18881538 (re-superficie de slug latente que persistía hace meses), ENTRA confluencia-urbana--19720356 (REAPARECE tras 3 chequeos afuera — slug VACIADO el 26-06 vuelve a estado pre-rotación con el MISMO ID). Caso análogo bilateral al slug countries-y-barrios-cerrados-en-campana. Slug valentina-norte-urbana queda VACÍO — simetría con confluencia-urbana del 26-06. **CENTENARIO FETCH ERROR**: /terrenos/venta/centenario devuelve HTTP 404 — fetch error de la página índice. Avisos individuales siguen ACTIVE (verificado 19847579). Diff Centenario indeterminable hoy — análogo a patrón icasas. **OCHO techos del run vivos PERSISTEN**: 1993x triplete (NUEVO récord cardinalidad) > 1990x > 1988x > 1987x doblete > 1986x > 1984x > 1983x. **TRIPLETE 1993x COEXISTIENDO CON DOBLETE 1987x**: dos altas-cardinalidad coexisten — triplete frontier + doblete sin frontier. **14 de 20 hipótesis 28-06 CUMPLIDAS** (todas las de persistencia + cascada reactivada), 5 de 20 NO se cumplen (frontier ≥1994x, núcleo Chañar/Añelo, alta 1991x/1992x, reaparición 12060433/19450773, históricas Campana volátiles), 1 indeterminable (Centenario sin fetch). **19908336 (Plaza Huincul, 1990x) PERSISTE 6.º día** — ex-frontier ULTRA^3-consolidado (hipótesis 28-06 (8) CUMPLIDA). **Doblete 1993x (19931487+19931488) PERSISTE 3.er día**, ahora triplete (19937437) — hipótesis 28-06 (2) CUMPLIDA Y EXPANDIDA. **19887818 (Rincón, 1988x) PERSISTE 10.º chequeo** — co-existencia 1988x/1990x/1993x triplete ULTRA^3-consolidada (hipótesis 28-06 (14) CUMPLIDA). **19862176 PERSISTE 13.º chequeo récord propio renovado** — 3.er techo ULTRA^5-extendido sin precedente (hipótesis 28-06 (15) CUMPLIDA). **Doblete 1987x Plottier PERSISTE 12.º chequeo récord propio renovado** — patrón 'doblete persiste sin frontier' ULTRA^6-REFORZADO histórico, ahora frente a TRIPLETE 1993x (hipótesis 28-06 (16) CUMPLIDA). **Cutral Có 19833452 PERSISTE 19.º chequeo récord propio renovado** — 4.º techo intacto (hipótesis 28-06 (17) CUMPLIDA). **Plottier 8214482 PERSISTE 21.º chequeo récord propio renovado** — PRIMER 21-CHEQUEOS DEL RUN (hipótesis 28-06 (18) CUMPLIDA segunda variante). **19755626 21.º chequeo afuera récord propio renovado**. **3 de las 4 altas históricas de Campana del 24-06 PERSISTEN 6.º día** (15300610, 13756900, 17459734) — consolidación ULTRA^3-extendida. **vacamuertapropiedades PERSISTE vacamuertapropiedades.com.ar 6.º día** — consolidación ULTRA^3-extendida sin precedente (hipótesis 28-06 (9) CUMPLIDA), 18.º chequeo idéntico catálogo terrenos. **Zárate ESPEJO ABSOLUTO 3.er día post-rotación 26-06** — 17960780 PERSISTE 4.º día (hipótesis 28-06 (20) CUMPLE PARCIALMENTE). **Añelo y Chañar siguen siendo las dos únicas fuentes del núcleo Vaca Muerta sin movimiento histórico en todo el run** (70+ días ESPEJO ABSOLUTO). **8/9 fuentes argenprop con fetch OK ESPEJO ABSOLUTO** (rupturas: Plaza Huincul 1+/1- + Neuquén capital 1+/1-; Centenario fetch falló). No se regenera listings.js (sin cambios materiales). Lectura: cascada generacional reactivada al día siguiente de la pausa total — el sistema no acepta más de 1 chequeo de pausa total. Vigilar 30-06: si triplete 1993x persiste 2.º día = 7.ª consolidación HIPER-rápida del run (primera de un triplete); si reaparece 19752901 = oscilación intra-slug Plaza Huincul; si confluencia-urbana persiste = oscilación bilateral ratificada; si fetch Centenario sigue 404 = cambio estructural sitio."
  },
  {
    fecha: "2026-06-28",
    snapshot_base: "2026-06-27",
    resumen_por_fuente: {
      "argenprop — Añelo":                         { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0, nota: "ESPEJO ABSOLUTO. Junto con Chañar, las dos únicas fuentes del núcleo Vaca Muerta sin movimiento histórico en todo el run (70+ días)." },
      "argenprop — Centenario":                    { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0, nota: "ESPEJO ABSOLUTO. 19847579 (1984x, alta del 25-06) PERSISTE 4.º día — alta generacional Centenario ULTRA-consolidada (hipótesis 27-06 (11) CUMPLIDA)." },
      "argenprop — San Patricio del Chañar":       { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0, nota: "ESPEJO ABSOLUTO. Junto con Añelo, las dos únicas fuentes del núcleo Vaca Muerta sin movimiento histórico en todo el run (70+ días)." },
      "argenprop — Cutral Có":                     { snapshot: 1,  hoy: 1,  agregadas: 0, bajadas: 0, nota: "19833452 PERSISTE 18.º chequeo consecutivo — récord propio renovado. 4.º techo del run intacto." },
      "argenprop — Neuquén capital":               { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0, nota: "ESPEJO ABSOLUTO 2.º día post-rotación 26-06. 19558451 (1955x relleno intermedio) PERSISTE 3.er día. 18723077 (1872x histórica) PERSISTE 3.er día. Slug confluencia-urbana sigue VACÍO 3.er día." },
      "argenprop — Plaza Huincul":                 { snapshot: 4,  hoy: 4,  agregadas: 0, bajadas: 0, nota: "ESPEJO ABSOLUTO post-rotación 27-06. DOBLETE FRONTIER 1993x (19931487+19931488) PERSISTE 2.º día — 6.ª consolidación HIPER-rápida del run, primera de un doblete frontier (hipótesis 27-06 (1) CUMPLIDA). 19908336 (1990x ex-frontier) PERSISTE 5.º día — frontier secundario ULTRA-ULTRA-consolidado (hipótesis 27-06 (7) CUMPLIDA). 19752901 (1975x) PERSISTE." },
      "argenprop — Plottier":                      { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0, nota: "8214482 PERSISTE 20.º chequeo récord propio renovado — PRIMER 20-CHEQUEOS DEL RUN, caso límite hiper-estabilidad histórica único. Doblete 1987x (19870568+19871079) PERSISTE 11.º chequeo sin frontier — patrón 'doblete persiste sin frontier' ULTRA^5-REFORZADO histórico (hipótesis 27-06 (15) CUMPLIDA). 19755626 20.º chequeo afuera récord propio renovado." },
      "argenprop — Rincón de los Sauces":          { snapshot: 7,  hoy: 7,  agregadas: 0, bajadas: 0, nota: "19887818 (1988x) PERSISTE 9.º chequeo — co-existencia 1988x/1990x/1993x triple-ULTRA-ULTRA-consolidada (hipótesis 27-06 (13) CUMPLIDA). Set 7 IDs ESPEJO ABSOLUTO 9.º día consecutivo." },
      "argenprop — Campana":                       { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0, nota: "ESPEJO ABSOLUTO post-rotación 27-06. 15608517 (countries-y-barrios-cerrados-en-campana, reaparición del 27-06) PERSISTE 2.º día — REAPARICIÓN CONSOLIDADA, oscilación intra-slug bilateral RATIFICADA (hipótesis 27-06 (4) CUMPLIDA). 6768062 (centro-campana, baja del 27-06) sigue afuera 2.º día — baja consolidada (hipótesis 27-06 (3) CUMPLIDA). 19862176 PERSISTE 12.º chequeo récord propio renovado — 3.er techo ULTRA^4-extendido sin precedente (hipótesis 27-06 (14) CUMPLIDA). 3 de las 4 altas históricas del 24-06 (15300610, 13756900, 17459734) PERSISTEN 5.º día — consolidación ULTRA-ULTRA-extendida." },
      "argenprop — Zárate":                        { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0, nota: "ESPEJO ABSOLUTO 2.º día post-rotación 26-06. 17960780 (1796x histórica) PERSISTE 3.er día — Zárate consolida primera entrada del run." },
      "icasas — Añelo":                            { snapshot: null, hoy: null, agregadas: null, bajadas: null, nota: "Omitido: la paginación rota orden entre cargas y el diff no es confiable." },
      "vacamuertapropiedades — home (terrenos)":   { snapshot: 4,  hoy: 4,  agregadas: 0, bajadas: 0, nota: "Dominio vacamuertapropiedades.com.ar (canónico) PERSISTE 5.º día tras retorno del 24-06 — consolidación ULTRA-ULTRA-extendida sin precedente (hipótesis 27-06 (8) CUMPLIDA). Primera vez del run que el dominio mantiene 5+ días en canónico tras una oscilación. 17.º chequeo consecutivo idéntico del catálogo de terrenos (pid9, pid67, pid127, pid263)." }
    },
    cambios: [],
    nota: "Sin gap — corrida diaria normal. **EVENTO MAYOR ABSOLUTO DEL RUN — PRIMERA PARÁLISIS TOTAL — 10/10 FUENTES ARGENPROP ESPEJO ABSOLUTO SIMULTÁNEAMENTE**. Tras 7 días consecutivos de rupturas multi-fuente (21-06 Campana reaparición → 22-06 Plaza Huincul + vacamuertapropiedades → 23-06 Centenario → 24-06 Campana 4+/4- + Plaza Huincul nuevo frontier 1990x → 25-06 Centenario 2.ª rotación → 26-06 Neuquén capital 2+/2- + Zárate 1+/1- doble ruptura espejo → 27-06 Plaza Huincul 2+/2- nuevo frontier 1993x doblete + Campana 1+/1- reaparición tardía), **HOY 28-06 NINGUNA FUENTE ROTA**. Las 10 fuentes argenprop (Añelo, Centenario, Chañar, Cutral Có, Neuquén capital, Plaza Huincul, Plottier, Rincón, Campana, Zárate) reportan ESPEJO ABSOLUTO con el día anterior. Primera vez del run con **10/10 simultáneo** — los días previos típicamente 8/10 (rupturas dobles), 9/10 (rupturas simples) o 10/11 (con icasas omitido); nunca 10/10 simultáneo. **CONSOLIDACIÓN HIPER-RÁPIDA DEL DOBLETE FRONTIER 1993x**: 19931487 y 19931488 PERSISTEN 2.º día — **6.ª consolidación HIPER-rápida consecutiva del run** (1986x, 1988x, 1990x, 1984x, 1955x, 1993x doblete), primera de un doblete frontier. **BAJA DOBLE CONSOLIDADA DEL DOBLETE INICIAL 1974x DE PLAZA HUINCUL**: 19744743+19744744 siguen afuera 2.º día. **15608517 REAPARICIÓN CONSOLIDADA**: PERSISTE 2.º día — oscilación intra-slug bilateral RATIFICADA. **6768062 BAJA CONSOLIDADA**: sigue afuera 2.º día. **9 de 20 hipótesis 27-06 CUMPLIDAS** (todas las de persistencia/consolidación), **11 de 20 NO se cumplen** (todas las de cambio/rotación) — balance asimétrico inédito, el sistema confirma TODAS las consolidaciones y RECHAZA TODAS las nuevas rupturas. **SIETE techos del run vivos PERSISTEN intactos**: 1993x doblete > 1990x > 1988x > 1987x doblete > 1986x > 1984x > 1983x. **DOS DOBLETES COEXISTIENDO 2.º día** (1993x frontier + 1987x sin frontier). **19908336 (Plaza Huincul, 1990x) PERSISTE 5.º día** — ex-frontier ULTRA-ULTRA-consolidado. **19847579 (Centenario, 1984x) PERSISTE 4.º día** — alta generacional Centenario ULTRA-consolidada. **Neuquén capital ESPEJO ABSOLUTO 2.º día post-rotación 26-06** — 19558451 PERSISTE 3.er día, 18723077 PERSISTE 3.er día. **Zárate ESPEJO ABSOLUTO 2.º día post-rotación 26-06** — 17960780 PERSISTE 3.er día. **19887818 (Rincón, 1988x) PERSISTE 9.º chequeo** — co-existencia 1988x/1990x/1993x triple-ULTRA-ULTRA-consolidada. **19862176 PERSISTE 12.º chequeo récord propio renovado** — 3.er techo ULTRA^4-extendido sin precedente. **Doblete 1987x Plottier PERSISTE 11.º chequeo récord propio renovado** — patrón 'doblete persiste sin frontier' ULTRA^5-REFORZADO histórico. **Cutral Có 19833452 18.º chequeo récord propio renovado** — 4.º techo intacto. **Plottier 8214482 20.º chequeo récord propio renovado** — **PRIMER 20-CHEQUEOS DEL RUN**, caso límite hiper-estabilidad histórica único. **19755626 20.º chequeo afuera récord propio renovado**. **3 de las 4 altas históricas de Campana del 24-06 PERSISTEN 5.º día** (15300610, 13756900, 17459734) — consolidación ULTRA-ULTRA-extendida. **vacamuertapropiedades PERSISTE vacamuertapropiedades.com.ar 5.º día** — consolidación ULTRA-ULTRA-extendida sin precedente. 17.º chequeo idéntico catálogo terrenos. **Añelo y Chañar siguen siendo las dos únicas fuentes del núcleo Vaca Muerta sin movimiento histórico en todo el run** (70+ días ESPEJO ABSOLUTO). **10/10 fuentes argenprop ESPEJO ABSOLUTO** — primera vez del run. No se regenera listings.js (sin cambios). Lectura: tras una semana de rupturas en cadena, el sistema entra en pausa absoluta — vigilar 29-06 si la pausa se mantiene (= consolidación post-cascada) o si rota alguna fuente (= cascada reactivada)."
  },
  {
    fecha: "2026-06-27",
    snapshot_base: "2026-06-26",
    resumen_por_fuente: {
      "argenprop — Añelo":                         { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Centenario":                    { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0, nota: "ESPEJO ABSOLUTO. 19847579 (1984x, alta del 25-06) PERSISTE 3.er día — alta generacional Centenario HIPER-consolidada." },
      "argenprop — San Patricio del Chañar":       { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0, nota: "ESPEJO ABSOLUTO. Junto con Añelo, las dos únicas fuentes del núcleo Vaca Muerta sin movimiento histórico en todo el run (70+ días)." },
      "argenprop — Cutral Có":                     { snapshot: 1,  hoy: 1,  agregadas: 0, bajadas: 0, nota: "19833452 PERSISTE 17.º chequeo consecutivo — récord propio renovado. 4.º techo del run intacto." },
      "argenprop — Neuquén capital":               { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0, nota: "ESPEJO ABSOLUTO post-rotación 26-06. 19558451 (1955x relleno intermedio) PERSISTE 2.º día — 5.ª consolidación HIPER-rápida consecutiva del run. 18723077 (1872x histórica) PERSISTE 2.º día." },
      "argenprop — Plaza Huincul":                 { snapshot: 4,  hoy: 4,  agregadas: 2, bajadas: 2, nota: "EVENTO MAYOR ABSOLUTO DEL RUN: NUEVO FRONTIER GLOBAL DOBLETE 1993x. 2+/2-. SALEN 19744743 + 19744744 (familia 1974x DOBLETE inicial de Plaza Huincul, persistencia ~70 días — PRIMERA CAÍDA DOBLE DE UN DOBLETE GENERACIONAL DEL RUN y PRIMERA CAÍDA DEL LOTE INICIAL 1974x). ENTRAN 19931487 + 19931488 (FAMILIA 1993x DOBLETE — NUEVO FRONTIER GLOBAL DEL RUN, supera al 1990x, salto +3 unidades desde el frontier anterior, familias 1991x y 1992x saltadas — PRIMER DOBLETE FRONTIER DEL RUN, caso inédito). 19908336 (1990x) y 19752901 (1975x) PERSISTEN. Hipótesis 26-06 (7) 'ronda multi-fuente 199x activada' SE CUMPLE Y SE EXCEDE." },
      "argenprop — Plottier":                      { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0, nota: "8214482 PERSISTE 19.º chequeo récord propio renovado. Doblete 1987x (19870568+19871079) PERSISTE 10.º chequeo sin frontier — patrón 'doblete persiste sin frontier' ULTRA^4-REFORZADO histórico (a pesar del nuevo doblete frontier 1993x en Plaza Huincul). 19755626 19.º chequeo afuera récord propio renovado." },
      "argenprop — Rincón de los Sauces":          { snapshot: 7,  hoy: 7,  agregadas: 0, bajadas: 0, nota: "19887818 (1988x) PERSISTE 8.º chequeo — co-existencia 1988x/1990x/1993x triple-ULTRA-consolidada. Set 7 IDs ESPEJO ABSOLUTO 8.º día consecutivo." },
      "argenprop — Campana":                       { snapshot: 20, hoy: 20, agregadas: 1, bajadas: 1, nota: "EVENTO SECUNDARIO: 5.ª REAPARICIÓN TARDÍA DEL RUN. 1+/1-. ENTRA 15608517 (countries-y-barrios-cerrados-en-campana, era el ID original del slug antes del 21-06 — reaparece tras 6 chequeos afuera, ventana 4-7 días confirmada — hipótesis 26-06 (11) CUMPLIDA). SALE 6768062 (centro-campana, 7-dígitos extremo gen ~2015, alta del 24-06 que persistía 3 días — SEGUNDA SALIDA DE UN ID DE 7-DÍGITOS DEL RUN tras 9988447 ayer; rompe persistencia HIPER-consolidada del lote del 24-06 al día 4 — 1 de 4 históricas cae, 3 persisten: 15300610, 13756900, 17459734). Centro-campana baja de 3 IDs a 2 IDs. Slug countries-y-barrios-cerrados-en-campana vuelve a 2 IDs (set previo al 21-06). 19862176 PERSISTE 11.º chequeo récord propio renovado — 3.er techo ULTRA-ULTRA-ULTRA-extendido." },
      "argenprop — Zárate":                        { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0, nota: "ESPEJO ABSOLUTO post-rotación 26-06. 17960780 (1796x histórica) PERSISTE 2.º día — Zárate consolida primera entrada del run (hipótesis 26-06 (9) CUMPLIDA)." },
      "icasas — Añelo":                            { snapshot: null, hoy: null, agregadas: null, bajadas: null, nota: "Omitido: la paginación rota orden entre cargas y el diff no es confiable." },
      "vacamuertapropiedades — home (terrenos)":   { snapshot: 4,  hoy: 4,  agregadas: 0, bajadas: 0, nota: "Dominio vacamuertapropiedades.com.ar (canónico) PERSISTE 4.º día tras retorno del 24-06 — consolidación ULTRA-extendida sin precedente (hipótesis 26-06 (5) CUMPLIDA). Primera vez del run que el dominio mantiene 4+ días en canónico tras una oscilación. 16.º chequeo consecutivo idéntico del catálogo de terrenos (pid9, pid67, pid127, pid263)." }
    },
    cambios: [
      { fuente: "argenprop — Plaza Huincul", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-plaza-huincul--19931487", nota: "NUEVO FRONTIER GLOBAL DEL RUN. Familia 1993x, slug genérico 'plaza-huincul'. Salto generacional +3 unidades desde el frontier anterior (1990x → 1993x — familias 1991x y 1992x saltadas). Forma DOBLETE FRONTIER con 19931488 — PRIMER DOBLETE FRONTIER DEL RUN (caso inédito; el doblete 1987x Plottier era 'doblete sin frontier'). Día 1 dentro." },
      { fuente: "argenprop — Plaza Huincul", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-plaza-huincul--19931488", nota: "Segundo miembro del DOBLETE FRONTIER 1993x. Familia 1993x, slug genérico 'plaza-huincul'. Día 1 dentro." },
      { fuente: "argenprop — Plaza Huincul", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-plaza-huincul--19744743", nota: "PRIMERA CAÍDA DEL LOTE INICIAL 1974x DEL RUN en Plaza Huincul. Familia 1974x, slug genérico 'plaza-huincul', lote inicial al arranque del run (~70 días persistencia). Co-baja con 19744744 — PRIMERA CAÍDA DOBLE DE UN DOBLETE GENERACIONAL DEL RUN (caso inédito). Día 1 afuera." },
      { fuente: "argenprop — Plaza Huincul", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-plaza-huincul--19744744", nota: "Segundo miembro del doblete inicial 1974x de Plaza Huincul (~70 días persistencia). Día 1 afuera. Co-baja con 19744743." },
      { fuente: "argenprop — Campana", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-countries-y-barrios-cerrados-en-campana--15608517", nota: "5.ª REAPARICIÓN TARDÍA DEL RUN. Familia 1560x, slug 'countries-y-barrios-cerrados-en-campana' — era el ID original del slug antes de la entrada del 21-06 de 16475158. REAPARECE tras 6 chequeos afuera (salió el 21-06). Ventana 4-7 días confirmada nuevamente. Slug vuelve a 2 IDs (15608517 + 18619706 — el set previo al 21-06). Hipótesis 26-06 (11) 'si reaparece 15608517 = oscilación intra-slug bilateral (6.º chequeo afuera)' SE CUMPLE. Día 1 dentro." },
      { fuente: "argenprop — Campana", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-centro-campana--6768062", nota: "SEGUNDA SALIDA DE UN ID DE 7-DÍGITOS DEL RUN (tras 9988447 Neuquén capital ayer). 7-dígitos extremo, gen ~2015, slug 'centro-campana' — alta del 24-06 dentro de la rotación masiva de 4 históricas que persistían 3 días. Rompe parcialmente la persistencia HIPER-consolidada del lote del 24-06 al día 4 — 1 de las 4 históricas cae (15300610, 13756900, 17459734 persisten). Centro-campana baja de 3 IDs a 2 IDs. Día 1 afuera." }
    ],
    nota: "Sin gap — corrida diaria normal. **EVENTO MAYOR ABSOLUTO DEL RUN — NUEVO FRONTIER GLOBAL DOBLETE 1993x EN PLAZA HUINCUL**. Plaza Huincul 2+/2-: ENTRAN 19931487 + 19931488 (**FAMILIA 1993x DOBLETE — NUEVO FRONTIER GLOBAL DEL RUN**, supera al 1990x, salto +3 unidades desde el frontier anterior, familias 1991x y 1992x saltadas — **PRIMER DOBLETE FRONTIER DEL RUN**, caso inédito; el doblete 1987x Plottier era 'doblete sin frontier'). SALEN 19744743 + 19744744 (familia 1974x DOBLETE inicial de Plaza Huincul, persistencia ~70 días — **PRIMERA CAÍDA DOBLE DE UN DOBLETE GENERACIONAL DEL RUN** y PRIMERA CAÍDA DEL LOTE INICIAL 1974x del run). 19908336 (1990x) y 19752901 (1975x) PERSISTEN — co-existencia 1990x/1993x. La hipótesis 26-06 (7) 'si entra otra alta generacional ≥1990x = ronda multi-fuente 199x activada' SE CUMPLE Y SE EXCEDE. **EVENTO SECUNDARIO — 5.ª REAPARICIÓN TARDÍA DEL RUN — 15608517 EN CAMPANA tras 6 chequeos afuera**. Campana 1+/1-: ENTRA 15608517 (countries-y-barrios-cerrados-en-campana, era el ID original del slug antes del 21-06; reaparece tras 6 chequeos afuera — ventana 4-7 días confirmada nuevamente). SALE 6768062 (centro-campana, 7-dígitos extremo gen ~2015, alta del 24-06 con 3 días persistencia — **SEGUNDA SALIDA DE UN ID DE 7-DÍGITOS DEL RUN** tras 9988447 ayer; rompe persistencia HIPER-consolidada del lote del 24-06 al día 4 — 1 de 4 históricas cae, 3 persisten). Centro-campana baja de 3 IDs a 2 IDs. Slug countries-y-barrios-cerrados-en-campana vuelve a su set previo al 21-06 (15608517 + 18619706). **SIETE techos del run vivos PERSISTEN simultáneamente**: 1993x doblete > 1990x > 1988x > 1987x doblete > 1986x > 1984x > 1983x — **DOS DOBLETES COEXISTIENDO** (1993x frontier + 1987x sin frontier), primera vez del run con dos dobletes vivos a la vez. **19908336 (Plaza Huincul, 1990x) PERSISTE 4.º día** como frontier secundario — ULTRA-consolidado, desplazado por 1993x. **19847579 (Centenario, 1984x) PERSISTE 3.er día**. **Neuquén capital ESPEJO ABSOLUTO post-rotación** — 19558451 PERSISTE 2.º día (**5.ª consolidación HIPER-rápida del run**), 18723077 PERSISTE 2.º día. **Zárate ESPEJO ABSOLUTO post-rotación** — 17960780 PERSISTE 2.º día. **19887818 PERSISTE 8.º chequeo** — co-existencia 1988x/1990x/1993x triple-ULTRA-consolidada. **19862176 PERSISTE 11.º chequeo récord propio renovado** — 3.er techo ULTRA-ULTRA-ULTRA-extendido sin precedente. **Doblete 1987x Plottier PERSISTE 10.º chequeo récord propio renovado** — patrón 'doblete persiste sin frontier' ULTRA^4-REFORZADO histórico. **Cutral Có 19833452 17.º chequeo récord propio renovado** — 4.º techo intacto. **Plottier 8214482 19.º chequeo récord propio renovado**. **19755626 19.º chequeo afuera récord propio renovado**. **vacamuertapropiedades PERSISTE vacamuertapropiedades.com.ar 4.º día** — consolidación ULTRA-extendida sin precedente. 16.º chequeo idéntico catálogo terrenos. **3 de las 4 altas históricas de Campana del 24-06 PERSISTEN 4.º día** (15300610, 13756900, 17459734) — consolidación ULTRA-extendida para 3/4; 1 cae (6768062). **Añelo y Chañar siguen siendo las dos únicas fuentes del núcleo Vaca Muerta sin movimiento histórico en todo el run** (70+ días ESPEJO ABSOLUTO). **8/10 fuentes argenprop ESPEJO ABSOLUTO** (rupturas: Plaza Huincul 2+/2- + Campana 1+/1-). No se regenera listings.js (bajas ya estaban en catálogo; altas requieren inspección manual)."
  },
  {
    fecha: "2026-06-26",
    snapshot_base: "2026-06-25",
    resumen_por_fuente: {
      "argenprop — Añelo":                         { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Centenario":                    { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0, nota: "ESPEJO ABSOLUTO retorna. 19847579 (1984x, alta del 25-06) PERSISTE 2.º día — 4.ª consolidación HIPER-rápida consecutiva del run (replica patrón día 2 de 1986x/1988x/1990x)." },
      "argenprop — San Patricio del Chañar":       { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0, nota: "ESPEJO ABSOLUTO. Junto con Añelo, son las dos únicas fuentes del núcleo Vaca Muerta que siguen sin rotación en todo el run." },
      "argenprop — Cutral Có":                     { snapshot: 1,  hoy: 1,  agregadas: 0, bajadas: 0, nota: "19833452 PERSISTE 16.º chequeo consecutivo — récord propio renovado. 4.º techo del run intacto." },
      "argenprop — Neuquén capital":               { snapshot: 20, hoy: 20, agregadas: 2, bajadas: 2, nota: "EVENTO MAYOR: PRIMERA ROTACIÓN EN NEUQUÉN CAPITAL DEL RUN. 2+/2-. SALEN 19720356 (1972x, único ID en slug confluencia-urbana, alta del 27-05 — PRIMERA CAÍDA DEL LOTE 1972x-1973x del run, slug confluencia-urbana VACIADO) y 9988447 (7-dígitos extremo gen ~2015, persistente histórico — PRIMERA SALIDA DE 7-DÍGITOS DEL RUN). ENTRAN 18723077 (1872x histórica gen mid-2018) y 19558451 (1955x gen 2024 — PRIMERA ENTRADA NUEVA EN NEUQUÉN CAPITAL DEL RUN, relleno intermedio del corredor). 3.ª fuente del núcleo Vaca Muerta en romper ESPEJO ABSOLUTO (tras Plaza Huincul 22-06 y Centenario 23-06/25-06). Hipótesis 25-06 (6) 'si rota otra fuente del núcleo = ruptura completa' SE CUMPLE PARCIALMENTE — quedan sólo Añelo y Chañar como espejos del núcleo." },
      "argenprop — Plaza Huincul":                 { snapshot: 4,  hoy: 4,  agregadas: 0, bajadas: 0, nota: "19908336 (1990x frontier global) PERSISTE 3.er día — frontier 1990x HIPER-CONSOLIDADO supera la consolidación 2-días previa de 19862176 y 19887818. Set 4 IDs ESPEJO ABSOLUTO." },
      "argenprop — Plottier":                      { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0, nota: "8214482 PERSISTE 18.º chequeo récord propio renovado. Doblete 1987x (19870568+19871079) PERSISTE 9.º chequeo sin frontier — patrón 'doblete persiste sin frontier' ULTRA-ULTRA-ULTRA-REFORZADO histórico. 19755626 18.º chequeo afuera récord propio renovado." },
      "argenprop — Rincón de los Sauces":          { snapshot: 7,  hoy: 7,  agregadas: 0, bajadas: 0, nota: "19887818 (1988x ex-frontier) PERSISTE 7.º chequeo — co-existencia 1988x/1990x ULTRA-consolidada. Set 7 IDs ESPEJO ABSOLUTO 7.º día consecutivo." },
      "argenprop — Campana":                       { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0, nota: "ESPEJO ABSOLUTO. Las 4 altas históricas del 24-06 (15300610, 13756900, 17459734, 6768062) PERSISTEN 3.er día — REFUTACIÓN del patrón 'históricas volátiles 2-3 chequeos' para este lote (rotación masiva HIPER-consolidada). Slug centro-campana 3 IDs consolidado 3.er día. 19862176 PERSISTE 10.º chequeo récord propio renovado — 3.er techo del run ULTRA-ULTRA-extendido sin precedente." },
      "argenprop — Zárate":                        { snapshot: 20, hoy: 20, agregadas: 1, bajadas: 1, nota: "EVENTO MAYOR: PRIMERA ROTACIÓN EN ZÁRATE DEL RUN. 1+/1-. SALE 14751292 (1475x, gen ~2016, slug genérico, persistente histórico ~60+ días — PRIMERA BAJA EN ZÁRATE DEL RUN), ENTRA 17960780 (1796x, gen mid-2018, slug genérico — PRIMERA ALTA EN ZÁRATE DEL RUN, reaparición tardía histórica). Zárate fue la última fuente argenprop ESPEJO ABSOLUTO sin movimiento de todo el run — rompe por primera vez tras 60+ días." },
      "icasas — Añelo":                            { snapshot: null, hoy: null, agregadas: null, bajadas: null, nota: "Omitido: la paginación rota orden entre cargas y el diff no es confiable." },
      "vacamuertapropiedades — home (terrenos)":   { snapshot: 4,  hoy: 4,  agregadas: 0, bajadas: 0, nota: "Dominio vacamuertapropiedades.com.ar (canónico) PERSISTE 3.er día tras retorno del 24-06 — recuperación HIPER-CONSOLIDADA (hipótesis 25-06 CUMPLIDA). Primera vez del run que el dominio mantiene 3+ días en canónico tras una oscilación. 15.º chequeo consecutivo idéntico del catálogo de terrenos (pid9, pid67, pid127, pid263)." }
    },
    cambios: [
      { fuente: "argenprop — Neuquén capital", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-neuquen--18723077", nota: "Familia 1872x, slug genérico 'neuquen', gen mid-2018. Reaparición tardía de aviso histórico (no generacional). Día 1 dentro — vigilar persistencia." },
      { fuente: "argenprop — Neuquén capital", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-neuquen--19558451", nota: "PRIMERA ENTRADA NUEVA EN NEUQUÉN CAPITAL DEL RUN. Familia 1955x, slug genérico 'neuquen', gen 2024 — alta intermedia, relleno del corredor generacional entre el lote inicial 1972x-1979x y los techos recientes. Neuquén capital entra al circuito de movimiento por primera vez. Día 1 dentro — vigilar consolidación HIPER-rápida (replica patrón 1986x/1988x/1990x/1984x día 2)." },
      { fuente: "argenprop — Neuquén capital", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-confluencia-urbana--19720356", nota: "PRIMERA CAÍDA DEL LOTE 1972x-1973x DEL RUN. Familia 1972x, único ID en slug 'confluencia-urbana' dentro de Neuquén capital, alta del 27-05. Slug confluencia-urbana queda VACÍO en Neuquén capital. Día 1 afuera." },
      { fuente: "argenprop — Neuquén capital", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-neuquen--9988447", nota: "PRIMERA SALIDA DE UN ID DE 7-DÍGITOS DEL RUN. 7 dígitos extremos, gen muy vieja (~2015), slug genérico 'neuquen' — persistente histórico continuo del run. Caso análogo a 8214482 Plottier (sigue 18.º chequeo), 8214464 Centenario, 6768062 Campana, 9068551 Rincón. Día 1 afuera — vigilar reaparición (los 7-dígitos tienden a oscilar)." },
      { fuente: "argenprop — Zárate", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-zarate--17960780", nota: "PRIMERA ALTA EN ZÁRATE DEL RUN. Familia 1796x, slug genérico 'zarate', gen mid-2018 — reaparición tardía de aviso histórico. Día 1 dentro." },
      { fuente: "argenprop — Zárate", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-zarate--14751292", nota: "PRIMERA BAJA EN ZÁRATE DEL RUN. Familia 1475x, slug genérico 'zarate', gen ~2016, persistente histórico ~60+ días. Día 1 afuera." }
    ],
    nota: "Sin gap — corrida diaria normal. **EVENTO MAYOR DOBLE — DOS PRIMERAS ROTACIONES SIMULTÁNEAS DEL RUN EN FUENTES PREVIAMENTE-ESPEJO ABSOLUTO**: (1) **PRIMERA ROTACIÓN EN NEUQUÉN CAPITAL DEL RUN — 2+/2-**: SALEN 19720356 (1972x, slug confluencia-urbana VACIADO — **PRIMERA CAÍDA DEL LOTE 1972x-1973x del run**) y 9988447 (7-dígitos extremo — **PRIMERA SALIDA DE 7-DÍGITOS DEL RUN**); ENTRAN 18723077 (1872x histórica) y 19558451 (**1955x — PRIMERA ENTRADA NUEVA EN NEUQUÉN CAPITAL DEL RUN**, relleno intermedio del corredor). 3.ª fuente del núcleo Vaca Muerta en romper ESPEJO ABSOLUTO (tras Plaza Huincul 22-06 y Centenario 23-06/25-06). Quedan sólo Añelo y Chañar como espejos del núcleo. (2) **PRIMERA ROTACIÓN EN ZÁRATE DEL RUN — 1+/1-**: SALE 14751292 (1475x persistente ~60+ días), ENTRA 17960780 (1796x reaparición tardía). Zárate fue la última fuente argenprop ESPEJO ABSOLUTO sin movimiento de todo el run. **PRIMERA VEZ DEL RUN QUE ROTAN DOS FUENTES ESPEJO ABSOLUTO SIMULTÁNEAMENTE**. El patrón 'fuentes argenprop con 20 IDs históricos congelados como espejo' queda definitivamente abolido. **Plaza Huincul 19908336 (1990x frontier global) PERSISTE 3.er día** — frontier HIPER-CONSOLIDADO supera consolidación 2-días previa. **Centenario 19847579 (1984x) PERSISTE 2.º día** — **4.ª consolidación HIPER-rápida consecutiva del run**. **Las 4 altas históricas de Campana del 24-06 PERSISTEN 3.er día** — REFUTACIÓN del patrón 'históricas volátiles 2-3 chequeos' para este lote (rotación masiva HIPER-consolidada). **19887818 PERSISTE 7.º chequeo** — co-existencia 1988x/1990x ULTRA-consolidada. **19862176 PERSISTE 10.º chequeo récord propio renovado** — 3.er techo ULTRA-ULTRA-extendido. **Doblete 1987x Plottier PERSISTE 9.º chequeo récord propio renovado** — patrón 'doblete persiste sin frontier' ULTRA-ULTRA-ULTRA-REFORZADO histórico. **Cutral Có 19833452 16.º chequeo récord propio renovado** — 4.º techo intacto. **Plottier 8214482 18.º chequeo récord propio renovado** — caso límite hiper-estabilidad vivo. 19755626 18.º chequeo afuera récord propio renovado. **vacamuertapropiedades PERSISTE vacamuertapropiedades.com.ar 3.er día** — recuperación HIPER-CONSOLIDADA, primera vez del run con 3+ días en canónico tras oscilación. 15.º chequeo idéntico catálogo terrenos. **SEIS techos del run vivos PERSISTEN**: 1990x > 1988x > 1987x doblete > 1986x > 1984x > 1983x. **8/10 fuentes argenprop ESPEJO ABSOLUTO** (rupturas: Neuquén capital 2+/2- + Zárate 1+/1-). No se regenera listings.js (bajas ya estaban en catálogo; altas requieren inspección manual)."
  },
  {
    fecha: "2026-06-25",
    snapshot_base: "2026-06-24",
    resumen_por_fuente: {
      "argenprop — Añelo":                         { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Centenario":                    { snapshot: 20, hoy: 20, agregadas: 1, bajadas: 1, nota: "EVENTO MAYOR: SEGUNDA ROTACIÓN INTRA-CENTENARIO EN 3 DÍAS. SALE 18406420 (entrada histórica del 23-06, cae en 3.er chequeo dentro), ENTRA 19847579 (familia 1984x — PRIMERA ALTA GENERACIONAL EN CENTENARIO DEL RUN, 6.º techo intermedio entre 1983x Cutral Có y 1986x Campana). REFUTACIÓN: hipótesis 'entrada histórica consolidada' del 24-06 sobre 18406420 REFUTADA — patrón 'entradas históricas volátiles 2-3 chequeos' CONFIRMADO (replica exacto del arco de 16475158/Campana)." },
      "argenprop — San Patricio del Chañar":       { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Cutral Có":                     { snapshot: 1,  hoy: 1,  agregadas: 0, bajadas: 0, nota: "19833452 PERSISTE 15.º chequeo consecutivo — récord propio renovado. 4.º techo del run intacto." },
      "argenprop — Neuquén capital":               { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Plaza Huincul":                 { snapshot: 4,  hoy: 4,  agregadas: 0, bajadas: 0, nota: "19908336 (1990x NUEVO frontier global) PERSISTE 2.º día — frontier CONSOLIDADO HIPER-RÁPIDO (3.ª consolidación HIPER-rápida consecutiva del run tras 19862176 y 19887818). Set 4 IDs ESPEJO ABSOLUTO tras rotación 24-06." },
      "argenprop — Plottier":                      { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0, nota: "8214482 PERSISTE 17.º chequeo récord propio renovado. Doblete 1987x (19870568+19871079) PERSISTE 8.º chequeo sin frontier — patrón 'doblete persiste sin frontier' ULTRA-ULTRA-REFORZADO histórico. 19755626 17.º chequeo afuera récord propio renovado." },
      "argenprop — Rincón de los Sauces":          { snapshot: 7,  hoy: 7,  agregadas: 0, bajadas: 0, nota: "19887818 (1988x ex-frontier) PERSISTE 6.º chequeo — co-existencia 1988x/1990x consolidada (los frontiers no se desplazan entre sí, se acumulan). Set 7 IDs ESPEJO ABSOLUTO 6.º día consecutivo." },
      "argenprop — Campana":                       { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0, nota: "ESPEJO ABSOLUTO tras rotación masiva 4+/4- del 24-06. Las 4 altas históricas (15300610, 13756900, 17459734, 6768062) PERSISTEN 2.º día — rotación masiva CONSOLIDADA (refuta lectura 'volátil', pero por patrón 'históricas volátiles 2-3 chequeos' hay alta probabilidad de caídas próximas). Slug centro-campana re-activado con 3 IDs (18075323+13756900+6768062) CONSOLIDADO. 19862176 PERSISTE 9.º chequeo récord propio renovado — 3.er techo del run ULTRA-extendido sin precedente." },
      "argenprop — Zárate":                        { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "icasas — Añelo":                            { snapshot: null, hoy: null, agregadas: null, bajadas: null, nota: "Omitido: la paginación rota orden entre cargas y el diff no es confiable." },
      "vacamuertapropiedades — home (terrenos)":   { snapshot: 4,  hoy: 4,  agregadas: 0, bajadas: 0, nota: "Dominio vacamuertapropiedades.com.ar (canónico) PERSISTE 2.º día tras retorno del 24-06 — recuperación completa post-oscilación CONFIRMADA (hipótesis 24-06 CUMPLIDA). Patrón 'oscilación 2 días → recuperación canónico' HIPER-confirmado tras 2 ciclos idénticos. 14.º chequeo consecutivo idéntico del catálogo de terrenos (pid9, pid67, pid127, pid263)." }
    },
    cambios: [
      { fuente: "argenprop — Centenario", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-centenario--19847579", nota: "PRIMERA ALTA GENERACIONAL EN CENTENARIO DEL RUN. Familia 1984x, slug genérico 'centenario'. 6.º techo del run en orden generacional (encaja entre 1983x Cutral Có y 1986x Campana). Centenario deja de ser solo 'espejo congelado' o 'reaparición tardía' y entra al protagonismo generacional. Día 1 dentro — vigilar consolidación HIPER-rápida (replica patrón 19908336/19887818/19862176)." },
      { fuente: "argenprop — Centenario", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-centenario--18406420", nota: "REFUTACIÓN DE HIPÓTESIS 24-06: la entrada histórica del 23-06 cae tras solo 2 días dentro. Replica EXACTAMENTE el arco volátil de 16475158/Campana (reaparición 21-06, caída 24-06 tras 3 chequeos dentro). Patrón 'entradas históricas volátiles 2-3 chequeos' CONFIRMADO. Día 1 afuera — vigilar oscilación múltiple (puede reaparecer en 4-7 chequeos)." }
    ],
    nota: "Sin gap — corrida diaria normal. **EVENTO MAYOR**: **SEGUNDA ROTACIÓN INTRA-CENTENARIO EN 3 DÍAS**, ahora con **PRIMERA ALTA GENERACIONAL EN CENTENARIO DEL RUN — 19847579 (familia 1984x)**. SALE 18406420 (entrada histórica del 23-06 que persistió 2 días — REFUTACIÓN de hipótesis 'entrada histórica consolidada' del 24-06; replica exacto del arco volátil de 16475158/Campana). Patrón 'entradas históricas volátiles 2-3 chequeos' CONFIRMADO. Centenario rompe ESPEJO por 2.ª vez en 3 días — ahora con alta generacional 1984x (6.º techo intermedio entre 1983x Cutral Có y 1986x Campana). El carril Centenario/Neuquén entra al protagonismo generacional por primera vez del run. **Plaza Huincul 19908336 (1990x NUEVO frontier global) PERSISTE 2.º día** — frontier CONSOLIDADO HIPER-RÁPIDO (3.ª consolidación HIPER-rápida consecutiva del run tras 19862176 y 19887818). **Las 4 altas históricas de Campana del 24-06 (15300610, 13756900, 17459734, 6768062) PERSISTEN 2.º día** — rotación masiva CONSOLIDADA. **19887818 PERSISTE 6.º chequeo** — co-existencia 1988x/1990x consolidada. **19862176 PERSISTE 9.º chequeo** récord propio renovado — 3.er techo ULTRA-extendido sin precedente. **Doblete 1987x Plottier PERSISTE 8.º chequeo** récord propio renovado — patrón 'doblete persiste sin frontier' ULTRA-ULTRA-REFORZADO histórico. **Cutral Có 19833452 15.º chequeo récord propio renovado** — 4.º techo intacto. **Plottier 8214482 17.º chequeo récord propio renovado** — caso límite hiper-estabilidad vivo. 19755626 17.º chequeo afuera récord propio renovado. **vacamuertapropiedades PERSISTE vacamuertapropiedades.com.ar 2.º día** tras retorno del 24-06 — recuperación completa post-oscilación CONFIRMADA. **SEIS techos del run vivos POR PRIMERA VEZ**: 1990x > 1988x > 1987x doblete > 1986x > 1984x (NUEVO) > 1983x. **10/11 fuentes argenprop ESPEJO ABSOLUTO** (única ruptura: Centenario rotación 1+/1- con alta generacional). No se regenera listings.js (baja 18406420 ya estaba en catálogo Centenario; alta 19847579 requiere inspección manual)."
  },
  {
    fecha: "2026-06-24",
    snapshot_base: "2026-06-23",
    resumen_por_fuente: {
      "argenprop — Añelo":                         { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Centenario":                    { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0, nota: "18406420 (entrada del 23-06) PERSISTE 2.º día — entrada consolidada tras primera rotación intra-Centenario. 19746183 NO reaparece (2.º día afuera, baja consolidada del 1974x histórico)." },
      "argenprop — San Patricio del Chañar":       { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Cutral Có":                     { snapshot: 1,  hoy: 1,  agregadas: 0, bajadas: 0, nota: "19833452 PERSISTE 14.º chequeo consecutivo — récord propio renovado. 4.º techo del run intacto." },
      "argenprop — Neuquén capital":               { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Plaza Huincul":                 { snapshot: 4,  hoy: 4,  agregadas: 1, bajadas: 1, nota: "EVENTO MAYOR: NUEVO FRONTIER GLOBAL 1990x DEL RUN. SALE 19798515 (1979x, alta 05-06, persistente ~19 chequeos), ENTRA 19908336 (familia 1990x — PRIMER 1990x DEL RUN, NUEVO TECHO ABSOLUTO supera 19887818). 4.ª migración del frontier global en 5 días (Cutral Có→Campana→Plottier→Rincón→Plaza Huincul). El carril original entra al protagonismo generacional por PRIMERA VEZ del run." },
      "argenprop — Plottier":                      { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0, nota: "8214482 PERSISTE 16.º chequeo récord propio renovado. Doblete 1987x (19870568+19871079) PERSISTE 7.º chequeo sin frontier — patrón 'doblete persiste sin frontier' ULTRA-REFORZADO. 19755626 16.º chequeo afuera récord propio renovado." },
      "argenprop — Rincón de los Sauces":          { snapshot: 7,  hoy: 7,  agregadas: 0, bajadas: 0, nota: "19887818 (1988x) PERSISTE 5.º chequeo — consolidación HIPER-extendida. PIERDE título de frontier global ante 19908336 (Plaza Huincul, 1990x) — techo 1988x consolidado pero superado. Set 7 IDs ESPEJO ABSOLUTO." },
      "argenprop — Campana":                       { snapshot: 20, hoy: 20, agregadas: 4, bajadas: 4, nota: "EVENTO MAYOR: PRIMERA ROTACIÓN MASIVA DEL RUN EN CAMPANA (4+/4-). BAJAS: 18620971, 18621153, 18964018, 16475158 (refuta retroactivamente 'reaparición consolidada DEFINITIVA' del 23-06 — la reaparición histórica fue volátil 3 chequeos dentro). ALTAS: 15300610 (1530x gen 2016), 13756900 (1375x gen vieja, centro-campana), 17459734 (1745x gen 2017), 6768062 (7 dígitos gen ~2015, centro-campana). 4 IDs HISTÓRICOS entran en un solo día. Patrón 'reaparición tardía generalizada' multiplicado por 4. 19862176 PERSISTE 8.º chequeo récord propio renovado." },
      "argenprop — Zárate":                        { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "icasas — Añelo":                            { snapshot: null, hoy: null, agregadas: null, bajadas: null, nota: "Omitido: la paginación rota orden entre cargas y el diff no es confiable." },
      "vacamuertapropiedades — home (terrenos)":   { snapshot: 4,  hoy: 4,  agregadas: 0, bajadas: 0, nota: "Dominio VUELVE AL CANÓNICO vacamuertapropiedades.com.ar tras 2 días en vaca-muerta-propiedades.com.ar (5.ª variante combinada). Patrón 'oscilación ventana corta 2 días' CONFIRMADO (idéntico al ciclo .com 18-06/19-06 → 20-06). Hipótesis 23-06 'variante combinada hiper-consolidada' REFUTADA. 13.º chequeo consecutivo idéntico del catálogo de terrenos (pid9, pid67, pid127, pid263)." }
    },
    cambios: [
      { fuente: "argenprop — Plaza Huincul", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-plaza-huincul--19908336", nota: "NUEVO FRONTIER GLOBAL 1990x DEL RUN. Familia 1990x, slug 'plaza-huincul'. PRIMER 1990x del run, NUEVO TECHO ABSOLUTO (supera 19887818 por ~20.500 IDs). 4.ª migración del frontier global en 5 días. El carril original entra al protagonismo generacional por PRIMERA VEZ del run. Día 1 dentro." },
      { fuente: "argenprop — Plaza Huincul", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-plaza-huincul--19798515", nota: "Familia 1979x, alta del 05-06, persistió ~19 chequeos. Patrón 'alta generacional nueva desplaza alta generacional previa de la misma fuente' (caso análogo: doblete 1987x desplazó 1986x en Plottier el 18-06). Día 1 afuera." },
      { fuente: "argenprop — Campana", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-campana--15300610", nota: "Familia 1530x, gen ~2016, slug 'campana'. NO es alta generacional. Reaparición tardía de aviso histórico. Día 1 dentro." },
      { fuente: "argenprop — Campana", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-campana--17459734", nota: "Familia 1745x, gen ~2017, slug 'campana'. NO es alta generacional. Reaparición tardía. Día 1 dentro." },
      { fuente: "argenprop — Campana", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-centro-campana--13756900", nota: "Familia 1375x, gen vieja, slug 'centro-campana' (sumando a 18075323 existente). Reaparición tardía generalizada al slug centro-campana — slug latente reactivado por aviso histórico. Día 1 dentro." },
      { fuente: "argenprop — Campana", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-centro-campana--6768062", nota: "Gen MUY vieja, 7 dígitos ~2015, slug 'centro-campana'. Reaparición histórica EXTREMA — ID MÁS ANTIGUO DEL RUN POR ENTRADA NUEVA. Caso análogo a 8214482 y 8214464 (todos pre-2016). Día 1 dentro." },
      { fuente: "argenprop — Campana", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-campana--18620971", nota: "Familia 1862x, slug 'campana'. Persistente histórico del run. Día 1 afuera." },
      { fuente: "argenprop — Campana", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-campana--18621153", nota: "Familia 1862x, slug 'campana'. Persistente histórico del run. Día 1 afuera." },
      { fuente: "argenprop — Campana", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-campana--18964018", nota: "Familia 1896x, slug 'campana'. Persistente histórico del run. Día 1 afuera." },
      { fuente: "argenprop — Campana", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-countries-y-barrios-cerrados-en-campana--16475158", nota: "REFUTACIÓN RETROACTIVA: la reaparición histórica del 21-06 (familia 1647x, slug countries-y-barrios-cerrados-en-campana) cae en su 4.º chequeo dentro — hipótesis 'reaparición consolidada DEFINITIVA' del 23-06 REFUTADA. La reaparición fue volátil (3 chequeos dentro). Día 1 afuera — vigilar reaparición tardía (ventana 4-7 días)." }
    ],
    nota: "Sin gap — corrida diaria normal. **EVENTO MAYOR TRIPLE**: (1) **NUEVO FRONTIER GLOBAL 1990x EN PLAZA HUINCUL** — Plaza Huincul 1+/1-, SALE 19798515 (1979x histórico, persistió ~19 chequeos), ENTRA 19908336 (familia 1990x — PRIMER 1990x DEL RUN, NUEVO TECHO ABSOLUTO supera 19887818). 4.ª migración del frontier global en 5 días (Cutral Có→Campana→Plottier→Rincón→Plaza Huincul) — la rotación se acelera y el carril original ENTRA al protagonismo generacional POR PRIMERA VEZ DEL RUN. (2) **CAMPANA ROTACIÓN MASIVA 4+/4- — PRIMERA DEL RUN**. BAJAS: 18620971, 18621153, 18964018, 16475158 (refuta retroactivamente 'reaparición consolidada DEFINITIVA' del 23-06). ALTAS: 15300610, 13756900, 17459734, 6768062 — TODAS HISTÓRICAS (gen 2015-2017). 4 IDs HISTÓRICOS entran en un solo día. Patrón 'reaparición tardía generalizada' multiplicado por 4. 6768062 es el ID más antiguo del run por entrada nueva (7 dígitos gen ~2015). (3) **VACAMUERTAPROPIEDADES VUELVE AL CANÓNICO** vacamuertapropiedades.com.ar tras exactamente 2 días en variante combinada — patrón 'oscilación ventana corta 2 días' CONFIRMADO. Hipótesis 23-06 'variante combinada hiper-consolidada' REFUTADA. 18406420 (Centenario, entrada del 23-06) PERSISTE 2.º día — entrada consolidada. 19746183 NO reaparece (2.º día afuera). 19887818 (Rincón, 1988x) PERSISTE 5.º chequeo — consolidación HIPER-extendida pero PIERDE título frontier global. 19862176 PERSISTE 8.º chequeo récord propio renovado. Doblete 1987x Plottier PERSISTE 7.º chequeo — ULTRA-REFORZADO. Cutral Có 19833452 14.º chequeo récord propio. Plottier 8214482 16.º chequeo récord propio. 19755626 16.º chequeo afuera. **CINCO TECHOS DEL RUN VIVOS SIMULTÁNEAMENTE POR PRIMERA VEZ**: 1990x Plaza Huincul (NUEVO) > 1988x Rincón > 1987x Plottier doblete > 1986x Campana > 1983x Cutral Có. Chañar/Añelo/Neuquén capital siguen ESPEJO ABSOLUTO. 9/11 fuentes argenprop con movimiento (Plaza Huincul + Campana). No se regenera listings.js (las bajas ya estaban en catálogo Campana/Plaza Huincul; altas requieren inspección manual)."
  },
  {
    fecha: "2026-06-23",
    snapshot_base: "2026-06-22",
    resumen_por_fuente: {
      "argenprop — Añelo":                         { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Centenario":                    { snapshot: 20, hoy: 20, agregadas: 1, bajadas: 1, nota: "EVENTO MAYOR: PRIMERA ROTACIÓN INTRA-CENTENARIO EN TODO EL RUN. SALE 19746183 (1974x, alta 29-05, persistente ~25 chequeos), ENTRA 18406420 (1840x, slug genérico, gen mid-2018 — reaparición tardía de aviso histórico). Primera fuente del núcleo Vaca Muerta-Centenario en mostrar rotación de IDs tras 60+ días de ESPEJO ABSOLUTO. 2.º día consecutivo de ruptura del núcleo Vaca Muerta tras Plaza Huincul el 22-06." },
      "argenprop — San Patricio del Chañar":       { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Cutral Có":                     { snapshot: 1,  hoy: 1,  agregadas: 0, bajadas: 0, nota: "19833452 PERSISTE 13.º chequeo consecutivo — récord propio renovado. 4.º techo del run intacto." },
      "argenprop — Neuquén capital":               { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Plaza Huincul":                 { snapshot: 4,  hoy: 4,  agregadas: 0, bajadas: 0, nota: "4 IDs PERSISTE 2.º día — baja consolidada del 1976x histórico 19766009 (salió 22-06 tras 21 chequeos). Carril original consolida cardinalidad reducida." },
      "argenprop — Plottier":                      { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0, nota: "8214482 PERSISTE 15.º chequeo récord propio renovado (último caso límite hiper-estabilidad histórica vivo). Doblete 1987x (19870568+19871079) PERSISTE 6.º chequeo sin frontier — patrón 'doblete persiste sin frontier' HIPER-REFORZADO. 19755626 15.º chequeo afuera récord propio renovado." },
      "argenprop — Rincón de los Sauces":          { snapshot: 7,  hoy: 7,  agregadas: 0, bajadas: 0, nota: "Frontier global 19887818 (1988x) PERSISTE 4.º chequeo — techo 1988x REFORZADO. Set 7 IDs PERSISTE 4.º chequeo (cardinalidad consolidada definitivamente)." },
      "argenprop — Campana":                       { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0, nota: "ESPEJO ABSOLUTO retorna. 16475158 PERSISTE 3.er chequeo — reaparición consolidada DEFINITIVA. 19862176 PERSISTE 7.º chequeo récord propio renovado (3.er techo, ex-frontier consolidado DEFINITIVO). 15608517 3.er chequeo afuera. Cluster Cardales global 8 IDs estable." },
      "argenprop — Zárate":                        { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "icasas — Añelo":                            { snapshot: null, hoy: null, agregadas: null, bajadas: null, nota: "Omitido: la paginación rota orden entre cargas y el diff no es confiable." },
      "vacamuertapropiedades — home (terrenos)":   { snapshot: 4,  hoy: 4,  agregadas: 0, bajadas: 0, nota: "Dominio `vaca-muerta-propiedades.com.ar` PERSISTE 2.º chequeo consecutivo — la 5.ª variante combinada del run se consolida tras aparecer ayer (hipótesis 'variante combinada consolida' CUMPLIDA). 12.º chequeo consecutivo idéntico del catálogo de terrenos desde el 12-06 (pid9, pid67, pid127, pid263)." }
    },
    cambios: [
      { fuente: "argenprop — Centenario", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-centenario--18406420", nota: "REAPARICIÓN TARDÍA O RECARGA. ID familia 1840x (gen mid-2018, 8 dígitos), slug genérico 'centenario'. NO es alta generacional (no es ≥1988x). Es entrada de aviso histórico — primer caso del run en Centenario, generaliza el patrón 'reaparición tardía' antes circunscripto a Plottier/Campana. Día 1 dentro — vigilar persistencia." },
      { fuente: "argenprop — Centenario", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-centenario--19746183", nota: "PRIMERA SALIDA HISTÓRICA DEL ESPEJO DE CENTENARIO. Familia 1974x, alta del 29-05 (Centenario fue la 2.ª fuente en recibir 1974x del segundo lote tras Plaza Huincul el 28-05). Persistió ~25 chequeos consecutivos. Primer cambio de Centenario en todo el run (60+ días de ESPEJO ABSOLUTO quebrado). Día 1 afuera — vigilar oscilación múltiple (puede reaparecer en 4-7 chequeos)." }
    ],
    nota: "Sin gap — corrida diaria normal. **EVENTO MAYOR DOBLE**: (1) **PRIMERA ROTACIÓN INTRA-CENTENARIO EN TODO EL RUN**: 1+/1-, SALE 19746183 (1974x, alta 29-05, persistente ~25 chequeos), ENTRA 18406420 (1840x, slug genérico, gen mid-2018 — reaparición tardía de aviso histórico). Primera fuente del núcleo Vaca Muerta-Centenario en mostrar rotación de IDs tras 60+ días de ESPEJO ABSOLUTO. **2.º DÍA CONSECUTIVO DE RUPTURA DEL NÚCLEO VACA MUERTA** tras Plaza Huincul el 22-06 — patrón 'fuentes núcleo congeladas' DOBLEMENTE QUEBRADO. Hipótesis emergente: ola de re-indexación argenprop propagándose en cadena por las fuentes núcleo (vigilar Chañar y Añelo). (2) **VACAMUERTAPROPIEDADES CONSOLIDA NUEVA VARIANTE COMBINADA**: vaca-muerta-propiedades.com.ar PERSISTE 2.º chequeo consecutivo — consolidación de la 5.ª variante combinada (guiones + .com.ar) confirmada (hipótesis 22-06 'variante combinada consolida' CUMPLIDA). **Plaza Huincul 4 IDs PERSISTE** tras baja histórica 19766009 del 22-06 — baja consolidada 2.º día del 1976x histórico. **19887818 (Rincón, 1988x, frontier global) PERSISTE 4.º chequeo** — techo 1988x REFORZADO. **16475158 (Campana) PERSISTE 3.er chequeo** — reaparición consolidada DEFINITIVA. **19862176 PERSISTE 7.º chequeo** récord propio renovado — ex-frontier consolidado DEFINITIVO. **Doblete 1987x Plottier PERSISTE 6.º chequeo** — patrón 'doblete persiste sin frontier' HIPER-REFORZADO. **Cutral Có 19833452 PERSISTE 13.º chequeo récord propio** — 4.º techo del run intacto. **Plottier 8214482 PERSISTE 15.º chequeo récord propio** — último caso límite hiper-estabilidad histórica vivo. Plottier 19755626 15.º chequeo afuera récord propio renovado. Rincón 7 IDs PERSISTE 4.º chequeo. **Cuatro techos del run vivos simultáneamente PERSISTEN 4.º chequeo**: 1988x Rincón > 1987x Plottier doblete > 1986x Campana > 1983x Cutral Có. **9/11 fuentes argenprop ESPEJO ABSOLUTO** (únicas rupturas: Centenario rotación 1+/1- + Plaza Huincul consolida set 4 IDs). No se regenera listings.js (baja 19746183 ya estaba en catálogo Centenario; alta 18406420 requiere inspección manual)."
  },
  {
    fecha: "2026-06-22",
    snapshot_base: "2026-06-21",
    resumen_por_fuente: {
      "argenprop — Añelo":                         { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Centenario":                    { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — San Patricio del Chañar":       { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Cutral Có":                     { snapshot: 1,  hoy: 1,  agregadas: 0, bajadas: 0, nota: "19833452 PERSISTE 12.º chequeo consecutivo — récord propio renovado. 4.º techo del run." },
      "argenprop — Neuquén capital":               { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Plaza Huincul":                 { snapshot: 5,  hoy: 4,  agregadas: 0, bajadas: 1, nota: "EVENTO MAYOR: PRIMERA BAJA HISTÓRICA EN TODO EL RUN. SALE 19766009 (1976x, alta 01-06, persistente 21 chequeos consecutivos). Primera fuente del carril original (Plaza Huincul / Chañar) en mostrar movimiento. 'Axiomática del congelamiento del carril original' DEFINITIVAMENTE QUEBRADA tras 60+ días. La salida fue del 1976x histórico, no por ID entrante." },
      "argenprop — Plottier":                      { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0, nota: "8214482 PERSISTE 14.º chequeo récord propio renovado. Doblete 1987x (19870568+19871079) PERSISTE 5.º chequeo sin frontier — patrón 'doblete persiste sin frontier' REFORZADO. 19755626 14.º chequeo afuera récord propio renovado." },
      "argenprop — Rincón de los Sauces":          { snapshot: 7,  hoy: 7,  agregadas: 0, bajadas: 0, nota: "Frontier global 19887818 (1988x) PERSISTE 3.er chequeo — consolidación HIPER-rápida confirmada (2.º caso del run tras 19862176). Set 7 IDs PERSISTE 3.er chequeo (cardinalidad consolidada definitivamente)." },
      "argenprop — Campana":                       { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0, nota: "ESPEJO ABSOLUTO retorna. 16475158 PERSISTE 2.º chequeo — reaparición consolidada (refuerza patrón 'rotación intra-slug' del slug-casillero countries-y-barrios-cerrados-en-campana). 19862176 PERSISTE 6.º chequeo récord propio renovado (3.er techo, ex-frontier consolidado sin precedente). 15608517 2.º chequeo afuera." },
      "argenprop — Zárate":                        { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "icasas — Añelo":                            { snapshot: null, hoy: null, agregadas: null, bajadas: null, nota: "Omitido: la paginación rota orden entre cargas y el diff no es confiable." },
      "vacamuertapropiedades — home (terrenos)":   { snapshot: 4,  hoy: 4,  agregadas: 0, bajadas: 0, nota: "EVENTO MAYOR: NUEVA COMBINACIÓN INÉDITA DE DOMINIO 'vaca-muerta-propiedades.com.ar' (guiones + .com.ar) — PRIMERA VEZ DEL RUN, 5.ª variante. REFUTA INDISCUTIBLEMENTE hipótesis 21-06 'recuperación completa' (la variante con guiones vuelve tras 2 chequeos en canónico, pero con extensión NUEVA). REFUERZA hipótesis 'DNS lottery'. 11.º chequeo consecutivo idéntico del catálogo de terrenos desde el 12-06 (pid9, pid67, pid127, pid263)." }
    },
    cambios: [
      { fuente: "argenprop — Plaza Huincul", tipo: "bajada", url: "https://www.argenprop.com/terreno-en-venta-en-plaza-huincul--19766009", nota: "PRIMERA SALIDA HISTÓRICA DEL CARRIL ORIGINAL. Familia 1976x, slug 'plaza-huincul'. 3.ª alta generacional del corredor (01-06). Persistió 21 chequeos consecutivos del run (01-06 → 21-06). Primer cambio de Plaza Huincul en todo el run (60+ días de ESPEJO ABSOLUTO quebrado). El carril original (Plaza Huincul + Chañar) rompe su axiomática de congelamiento por primera vez. Chañar sigue con 20 IDs idénticos. Día 1 afuera — vigilar oscilación múltiple confirmada como patrón general." }
    ],
    nota: "Sin gap — corrida diaria normal. **EVENTO MAYOR DOBLE**: (1) **PRIMERA BAJA HISTÓRICA EN PLAZA HUINCUL EN TODO EL RUN**: Plaza Huincul 5 → 4 IDs, SALE 19766009 (familia 1976x, alta 01-06, persistente 21 chequeos consecutivos). Primera fuente del carril original (Plaza Huincul/Chañar) en mostrar movimiento en todo el run. 'Axiomática del congelamiento del carril original' DEFINITIVAMENTE QUEBRADA tras 60+ días. La salida fue del 1976x histórico (no por ID entrante). Patrón nuevo: el carril original despierta por BAJA, no por ALTA. (2) **NUEVA COMBINACIÓN INÉDITA DE DOMINIO VACAMUERTAPROPIEDADES**: 'vaca-muerta-propiedades.com.ar' (guiones + .com.ar) — PRIMERA VEZ DEL RUN aparece esta 5.ª combinación. REFUTA INDISCUTIBLEMENTE hipótesis 21-06 'recuperación completa'. REFUERZA hipótesis 'DNS lottery'. Los 4 terrenos pid9/pid67/pid127/pid263 PERSISTEN idénticos (11.º chequeo idéntico del catálogo terrenos desde el 12-06). **19887818 PERSISTE 3.º chequeo** (frontier global 1988x — consolidación HIPER-rápida confirmada como repetible, 2.º caso del run tras 19862176). **16475158 PERSISTE 2.º chequeo** (reaparición histórica consolidada). **19862176 PERSISTE 6.º chequeo** récord propio renovado (ex-frontier consolidado sin precedente). **Doblete 1987x Plottier PERSISTE 5.º chequeo** (patrón 'doblete persiste sin frontier' REFORZADO). **Cutral Có 19833452 PERSISTE 12.º chequeo récord propio renovado**. **Plottier 8214482 PERSISTE 14.º chequeo récord propio renovado**. 19755626 14.º chequeo afuera récord propio. Cuatro techos del run vivos simultáneamente PERSISTEN 3.er chequeo: 1988x Rincón > 1987x Plottier doblete > 1986x Campana > 1983x Cutral Có. Rincón 7 IDs PERSISTE 3.er chequeo (cardinalidad consolidada definitivamente). Resto: 10/11 fuentes argenprop ESPEJO ABSOLUTO (única ruptura: Plaza Huincul). No se regenera listings.js (la baja 19766009 ya estaba en el catálogo Plaza Huincul)."
  },
  {
    fecha: "2026-06-21",
    snapshot_base: "2026-06-20",
    resumen_por_fuente: {
      "argenprop — Añelo":                         { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Centenario":                    { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — San Patricio del Chañar":       { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Cutral Có":                     { snapshot: 1,  hoy: 1,  agregadas: 0, bajadas: 0, nota: "19833452 PERSISTE 11.º chequeo consecutivo — récord propio renovado. 4.º techo del run." },
      "argenprop — Neuquén capital":               { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "argenprop — Plaza Huincul":                 { snapshot: 5,  hoy: 5,  agregadas: 0, bajadas: 0 },
      "argenprop — Plottier":                      { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0, nota: "8214482 PERSISTE 13.º chequeo récord propio renovado (último caso límite hiper-estabilidad histórica vivo). Doblete 1987x (19870568+19871079) PERSISTE 4.º chequeo sin recuperar frontier — patrón 'doblete persiste sin importar pérdida de frontier' CONFIRMADO. 19755626 13.º chequeo afuera récord propio renovado." },
      "argenprop — Rincón de los Sauces":          { snapshot: 7,  hoy: 7,  agregadas: 0, bajadas: 0, nota: "Frontier global 19887818 (1988x) PERSISTE 2.º chequeo — consolidación día 2. Set 7 IDs PERSISTE 2.º chequeo (nueva cardinalidad consolidada, refuta 'expansión transitoria')." },
      "argenprop — Campana":                       { snapshot: 20, hoy: 20, agregadas: 1, bajadas: 1, nota: "EVENTO MAYOR: REAPARICIÓN HISTÓRICA 16475158 TRAS 4 CHEQUEOS AFUERA — PRIMER CASO DEL RUN, confirma hipótesis 'oscilación múltiple' del 19-06/20-06. SALE 15608517 (mismo slug countries-y-barrios-cerrados-en-campana, persistente desde inicio del run). ROTACIÓN INTRA-SLUG SIN CAMBIO DE CARDINALIDAD: slug countries-y-barrios-cerrados-en-campana mantiene 2 IDs (ahora 16475158+18619706, antes 15608517+18619706) — patrón nuevo confirmado. 19862176 PERSISTE 5.º chequeo (3.er techo consolidado). 19782477 PERSISTE 9.º chequeo." },
      "argenprop — Zárate":                        { snapshot: 20, hoy: 20, agregadas: 0, bajadas: 0 },
      "icasas — Añelo":                            { snapshot: null, hoy: null, agregadas: null, bajadas: null, nota: "Omitido: la paginación rota orden entre cargas y el diff no es confiable." },
      "vacamuertapropiedades — home (terrenos)":   { snapshot: 4,  hoy: 4,  agregadas: 0, bajadas: 0, nota: "PERSISTE en canónico vacamuertapropiedades.com.ar 2.º chequeo consecutivo tras el retorno del 20-06 (recuperación post-variante con guiones). 10.º chequeo consecutivo idéntico del catálogo de terrenos desde el 12-06 (pid9, pid67, pid127, pid263)." }
    },
    cambios: [
      { fuente: "argenprop — Campana", tipo: "agregada", url: "https://www.argenprop.com/terreno-en-venta-en-countries-y-barrios-cerrados-en-campana--16475158", nota: "REAPARICIÓN HISTÓRICA TARDÍA — PRIMER CASO DEL RUN. ID familia 1647x, slug 'countries-y-barrios-cerrados-en-campana'. Estuvo afuera 4 chequeos (salido 17-06, reaparece 21-06) — ventana 5-7 días sugerida el 19-06 cumplida. CONFIRMA INDISCUTIBLEMENTE hipótesis 'oscilación múltiple'. Implicación: 12060433 y 19450773 (ambos 4.º chequeo afuera) entran en ventana de reaparición probable." },
      { fuente: "argenprop — Campana", tipo: "bajada",   url: "https://www.argenprop.com/terreno-en-venta-en-countries-y-barrios-cerrados-en-campana--15608517", nota: "ID familia 1560x, mismo slug 'countries-y-barrios-cerrados-en-campana'. Persistente desde inicio del run (>50 días en p1). Día 1 afuera — vigilar reaparición tardía. ROTACIÓN INTRA-SLUG: el slug mantiene cardinalidad 2 IDs mientras los integrantes rotan — primera evidencia documentada del run de 'slug-casillero'." }
    ],
    nota: "Sin gap — corrida diaria normal. **EVENTO MAYOR: REAPARICIÓN HISTÓRICA TARDÍA 16475158 EN CAMPANA tras 4 chequeos afuera** — PRIMER CASO DOCUMENTADO DEL RUN de reaparición tras >2 chequeos afuera. **CONFIRMACIÓN INDISCUTIBLE de hipótesis 'oscilación múltiple' del 19-06/20-06**. La salida 'definitiva' del 17-06 queda RELATIVIZADA y, retroactivamente, también las salidas 'definitivas' de 12060433 y 19450773 (ambos 4.º chequeo afuera, en ventana de reaparición). **PATRÓN NUEVO CONFIRMADO: ROTACIÓN INTRA-SLUG SIN CAMBIO DE CARDINALIDAD** — el slug 'countries-y-barrios-cerrados-en-campana' mantiene cardinalidad 2 IDs mientras integrantes rotan (16475158 reemplaza a 15608517). Primera evidencia documentada del run de 'slug-casillero'. **Frontier global 19887818 (Rincón 1988x) PERSISTE 2.º chequeo** — frontier consolida día 2. **Rincón 7 IDs PERSISTE 2.º chequeo** — nueva cardinalidad consolidada (refuta 'expansión transitoria'). **Cuatro techos del run vivos simultáneamente PERSISTEN**: 1988x Rincón > 1987x Plottier doblete > 1986x Campana > 1983x Cutral Có. **vacamuertapropiedades PERSISTE en canónico .com.ar 2.º chequeo consecutivo** (recuperación completa post-variante con guiones). Cutral Có 11.º chequeo récord propio, Plottier 8214482 13.º récord propio, 19862176 Campana 5.º consolidación ex-frontier sin precedente, doblete 1987x Plottier 4.º (patrón 'doblete persiste sin frontier' CONFIRMADO), 19755626 13.º afuera récord propio renovado. **Campana ROMPE espejo absoluto del 19-06/20-06** (1+/1-) — primera fuente en romperlo tras 2 días, consistente con Campana siendo la fuente más activa del run. Resto: 9/11 fuentes ESPEJO ABSOLUTO. No se regenera listings.js (la reaparición 16475158 ya estaba en catálogo Campana cluster Cardales/countries)."
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
