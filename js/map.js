const tilesProvider = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

let mapa = L.map('mapa').setView([51.505, -0.09], 13);

L.tileLayer(tilesProvider, {
    maxZoom: 18
}).addTo(mapa);