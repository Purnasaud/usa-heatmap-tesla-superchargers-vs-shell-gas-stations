# USA Fueling & Charging Heatmap — Tesla Superchargers vs Shell Gas Stations

An interactive Google Maps heatmap comparing **Tesla Supercharger** stations with **Shell gas station** locations across the United States.

## 🔗 Live Demo (Open the web map)
**https://purnasaud.github.io/usa-heatmap-tesla-superchargers-vs-shell-gas-stations/**


## How to run locally

> Loading Google Maps from `file://` can cause API key/referrer issues. Run a tiny local server.

**Python 3**
```bash
python -m http.server 8000
# then visit
http://localhost:8000
```

**Node (http-server)**
```bash
npx http-server -p 8000
# then visit
http://localhost:8000
```

You can open `index.html` directly, but you might see “This page can’t load Google Maps correctly” if your API key has referrer restrictions. Prefer running a local server.

## Files
- `index.html` — Main web page (header, map container, toggles, footer)
- `styles.css` — Basic responsive layout
- `shellStations.js` — Array of `{ lat, lng }` for **Shell gas stations**
- `teslaStations.js` — Array of `{ lat, lng }` for **Tesla Superchargers**
- `script.js` — Initializes the map and **two heatmap layers** with custom (non-default) gradients

> We no longer use `data.js`. Data is split into `shellStations.js` and `teslaStations.js`.

## Data
- Tesla Superchargers: loaded from `USA - Tesla Super Charging Stations.csv`
- Shell gas stations: loaded from `shell_ev_USA.csv`

## Troubleshooting
- **No points showing**: confirm `shellStations.js` / `teslaStations.js` are loaded *before* `script.js` in `index.html`.
- **API popup / gray map**: check billing, API enablement, and referrer restrictions; prefer running via local server.
- **Performance**: large datasets are fine for heatmaps, but avoid other heavy map overlays.
