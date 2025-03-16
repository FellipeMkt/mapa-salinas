// Criar o mapa interativo
var map = L.map('map', {
    minZoom: -1, // Permite zoom out extra
    maxZoom: 4,
    center: [0, 0],
    zoom: 1,
    crs: L.CRS.Simple
});

// Definir as dimensões da imagem do mapa
var w = 100%, h = 100%; // Ajuste para o tamanho real da sua imagem
var bounds = [[0, 0], [h, w]];

// Adicionar a imagem do mapa
L.imageOverlay('mapa.jpg', bounds).addTo(map);

// Ajustar a exibição inicial para caber na tela
map.fitBounds(bounds);

// Limitar a área de arrasto para não sair da imagem
map.setMaxBounds(bounds);

// Garantir que o mapa se ajuste corretamente em diferentes telas
window.addEventListener('resize', () => {
    map.invalidateSize();
});
