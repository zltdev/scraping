# Log de bloqueos — Scraping Vaca Muerta

Actualización: 2026-04-20

Portales con bloqueo anti-bot al usar WebFetch. Para correr con Claude for Chrome.

| Portal | URL | Síntoma |
|---|---|---|
| Zonaprop | https://www.zonaprop.com.ar/terrenos-venta-anelo.html | HTTP 403 (Cloudflare) |
| MercadoLibre | https://inmuebles.mercadolibre.com.ar/terrenos-lotes/venta/neuquen/anelo/ | HTTP 403 |
| Properati | https://www.properati.com.ar/s/anelo/terreno/venta | HTTP 403 |
| Coldwell Banker | https://coldwellbanker.com.ar/propiedad/terreno-en-venta-en-anelo-vaca-muerta-neuquen-lote-para-desarrollo--4373470 | HTTP 403 |
| La Gran Inmobiliaria | https://lagraninmobiliaria.com/337157-ruta-17-anelo-vaca-muerta-100 | ECONNREFUSED (sitio caído) |
| Solar Urbano Inmob. | https://www.solarurbano.com.ar/p/2306735-Terreno-Parque-Industrial-A%C3%B1elo | Devuelve homepage en vez del listing (JS-rendered) |

## URLs pendientes para Chrome extension

### Zonaprop — páginas de listado por localidad
- https://www.zonaprop.com.ar/terrenos-venta-anelo.html
- https://www.zonaprop.com.ar/terrenos-venta-rincon-de-los-sauces.html
- https://www.zonaprop.com.ar/terrenos-venta-neuquen-capital.html
- https://www.zonaprop.com.ar/terrenos-venta-centenario.html
- https://www.zonaprop.com.ar/terrenos-venta-plottier.html
- https://www.zonaprop.com.ar/terrenos-venta-cutral-co.html
- https://www.zonaprop.com.ar/terrenos-venta-plaza-huincul.html
- https://www.zonaprop.com.ar/terrenos-venta-san-patricio-del-chanar.html
- https://www.zonaprop.com.ar/terrenos-venta-q-vaca-muerta.html

### MercadoLibre — páginas de listado
- https://inmuebles.mercadolibre.com.ar/terrenos-lotes/venta/neuquen/anelo/
- https://inmuebles.mercadolibre.com.ar/terrenos-lotes/venta/neuquen/rincon-de-los-sauces/
- https://inmuebles.mercadolibre.com.ar/terrenos-lotes/venta/neuquen/confluencia/neuquen/
- https://inmuebles.mercadolibre.com.ar/terrenos-lotes/venta/neuquen/confluencia/centenario/
- https://inmuebles.mercadolibre.com.ar/terrenos-lotes/venta/neuquen/confluencia/plottier/
- https://inmuebles.mercadolibre.com.ar/terrenos-lotes/venta/neuquen/cutral-co/
- https://inmuebles.mercadolibre.com.ar/terrenos-lotes/venta/neuquen/anelo/san-patricio-del-chanar/

### Properati — páginas de listado
- https://www.properati.com.ar/s/anelo/terreno/venta
- https://www.properati.com.ar/s/rincon-de-los-sauces/terreno/venta
- https://www.properati.com.ar/s/neuquen-capital/terreno/venta
- https://www.properati.com.ar/s/centenario-nqn/terreno/venta
- https://www.properati.com.ar/s/plottier/terreno/venta
- https://www.properati.com.ar/s/cutral-co/terreno/venta
- https://www.properati.com.ar/s/san-patricio-del-chanar/terreno/venta
