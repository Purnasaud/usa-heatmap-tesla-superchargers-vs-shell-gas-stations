let map, teslaHeatmap, shellHeatmap;

function initMap() {
  const usCenter = { lat: 39.5, lng: -98.0 };
  map = new google.maps.Map(document.getElementById('map'), {
    center: usCenter,
    zoom: 4,
    mapTypeId: 'roadmap',
    streetViewControl: false,
    mapTypeControl: true,
    fullscreenControl: true
  });

  const toLatLng = (arr) => (Array.isArray(arr) ? arr : []).map(p => new google.maps.LatLng(Number(p.lat), Number(p.lng)));

  const teslaHeatData = toLatLng(typeof teslaStations !== 'undefined' ? teslaStations : []);
  const shellHeatData = toLatLng(typeof shellStations !== 'undefined' ? shellStations : []);

  const gradientTesla = [
    'rgba(0,0,0,0)',
    'rgba(0, 120, 255, 1)',
    'rgba(0, 220, 180, 1)',
    'rgba(255, 255, 0, 1)'
  ];
  const gradientShell = [
    'rgba(0,0,0,0)',
    'rgba(255, 200, 0, 1)',
    'rgba(255, 120, 0, 1)',
    'rgba(255, 0, 0, 1)'
  ];

  teslaHeatmap = new google.maps.visualization.HeatmapLayer({
    data: teslaHeatData,
    radius: 20,
    opacity: 0.6,
    gradient: gradientTesla
  });
  shellHeatmap = new google.maps.visualization.HeatmapLayer({
    data: shellHeatData,
    radius: 20,
    opacity: 0.6,
    gradient: gradientShell
  });

  teslaHeatmap.setMap(map);
  shellHeatmap.setMap(map);

  const teslaToggle = document.getElementById('toggleTesla');
  const shellToggle = document.getElementById('toggleShell');
  if (teslaToggle) teslaToggle.addEventListener('change', e => teslaHeatmap.setMap(e.target.checked ? map : null));
  if (shellToggle) shellToggle.addEventListener('change', e => shellHeatmap.setMap(e.target.checked ? map : null));
}

window.initMap = initMap;