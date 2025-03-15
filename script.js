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
var bounds = [[0, 0], [h, w]];  // Definir os limites da imagem

// Adicionar a imagem do mapa
L.imageOverlay('mapa.jpg', bounds).addTo(map);

// Ajustar a exibição inicial para caber na tela, garantindo que a imagem inteira seja visível
map.fitBounds(bounds);

// Limitar o movimento do mapa para não sair dos limites da imagem
map.setMaxBounds(bounds);

// Ajustar a resistência ao arrastar para garantir que o mapa não saia dos limites
map.options.maxBoundsViscosity = 1.0;  // Pode ajustar de 0 a 1, sendo 1 mais rígido
