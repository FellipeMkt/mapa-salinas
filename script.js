// Criar o mapa interativo
var map = L.map('map', {
    minZoom: -1, // Permite zoom out extra
    maxZoom: 4,
    center: [0, 0],
    zoom: 1,
    crs: L.CRS.Simple
});

// Definir as dimensões da imagem do mapa
var w = 2000, h = 1500; // Ajuste para o tamanho real da sua imagem
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

// Coordenadas da área que você quer centralizar no mapa
const areaCoordenadas = [0.5, 0.5];  // Exemplo de coordenadas

// Alterar o comportamento do botão
const centralizarBtn = document.getElementById('toggleTheme');
centralizarBtn.addEventListener('click', () => {
    // Centralizar no ponto desejado
    map.setView(areaCoordenadas, 2); // O '2' é o nível de zoom, ajuste conforme necessário
});
