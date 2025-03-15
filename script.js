// Criar o mapa interativo
var map = L.map('map', {
    minZoom: 1,
    maxZoom: 4,
    center: [0, 0],
    zoom: 1,
    crs: L.CRS.Simple
});

// Definir as dimensões da imagem do mapa
var w = 2000, h = 1500; // Ajuste para o tamanho da sua imagem
var bounds = [[0, 0], [h, w]];

// Adicionar a imagem do mapa
L.imageOverlay('mapa.jpg', bounds).addTo(map);

// Ajustar a exibição inicial para caber na tela
map.fitBounds(bounds);
