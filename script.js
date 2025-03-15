// Criar o mapa interativo
var map = L.map('map', {
    minZoom: 1,
    maxZoom: 1,   // Limite o zoom para 1
    center: [0, 0],
    zoom: 1,      // Zoom inicial
    crs: L.CRS.Simple,
    scrollWheelZoom: false  // Desativa o zoom com a roda do mouse
});

// Definir as dimensões da imagem do mapa
var w = 2000, h = 1500; // Ajuste as dimensões da sua imagem conforme necessário
var bounds = [[0, 0], [h, w]];  // Limites da imagem

// Adicionar a imagem do mapa
L.imageOverlay('mapa.jpg', bounds).addTo(map);

// Ajustar a exibição inicial para caber na tela, garantindo que a imagem inteira seja visível
map.fitBounds(bounds);

// Limitar o movimento do mapa para não sair dos limites da imagem
map.setMaxBounds(bounds);

// Ajustar a resistência ao arrastar para garantir que o mapa não saia dos limites
map.options.maxBoundsViscosity = 1.0;
