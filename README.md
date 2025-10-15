


# USA Fueling & Charging Heatmap — Tesla Superchargers vs Shell Gas Stations

An interactive Google Maps heatmap comparing **Tesla Supercharger** stations with **Shell gas station** locations across the United States.

# Link to Open run the webmap


## How to run

1. Open `index.html` in a modern browser (Chrome/Edge/Firefox).  
2. Ensure you have internet access so the Google Maps JS API can load.  
3. Use the toggles to show/hide each heatmap layer.

## Files
- `index.html` — Main web page (header, map container, toggles, footer)
- `styles.css` — Basic responsive layout
- `shellStations.js` — Array of { lat, lng } for Shell gas stations 
- `teslaStations.js` — Array of { lat, lng } for Tesla Superchargers
- `script.js` — Initializes the map and two heatmap layers with custom (non-default) gradients

## Data
- Tesla Superchargers: loaded from `USA - Tesla Super Charging Stations.csv`
- Shell EV Chargers: loaded from `shell_ev_USA.csv`


