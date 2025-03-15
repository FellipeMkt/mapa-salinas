// Criar o mapa interativo
var map = L.map('map', {
    minZoom: 1,    // Defina o zoom mínimo que desejar
    maxZoom: 4,    // Defina o zoom máximo que desejar
    center: [0, 0], // Centraliza a imagem
    zoom: 1,       // Zoom inicial
    crs: L.CRS.Simple,
    scrollWheelZoom: true  // Habilita o zoom com a roda do mouse
});

// A imagem não possui dimensões fixas, então não declaramos `w` e `h` manualmente
// Vamos calcular isso com base na imagem
var image = new Image();
image.src = 'mapa.jpg';  // Coloque o caminho da sua imagem aqui

// Quando a imagem carregar, definimos os limites com base nas suas dimensões
image.onload = function() {
    var w = image.width;  // Largura da imagem
    var h = image.height; // Altura da imagem
    var bounds = [[0, 0], [h, w]];  // Limites da imagem

    // Adicionar a imagem do mapa
    var imageOverlay = L.imageOverlay(image.src, bounds).addTo(map);

    // Ajustar a exibição inicial para caber na tela, garantindo que a imagem inteira seja visível
    map.fitBounds(bounds);

    // Limitar o movimento do mapa para não sair dos limites da imagem
    map.setMaxBounds(bounds);

    // Ajustar a resistência ao arrastar para garantir que o mapa não saia dos limites
    map.options.maxBoundsViscosity = 1.0;

    // Redimensionar a imagem para se ajustar responsivamente
    map.on('resize', function () {
        var size = map.getSize();
        var widthRatio = size.x / w;  // Proporção da largura
        var heightRatio = size.y / h; // Proporção da altura
        var scale = Math.min(widthRatio, heightRatio);  // Seleciona a menor proporção para garantir que a imagem não ultrapasse os limites da tela

        // Nova altura e largura da imagem baseada na escala calculada
        var newBounds = [[0, 0], [h * scale, w * scale]];
        imageOverlay.setBounds(newBounds); // Atualiza a posição da imagem conforme o redimensionamento
        map.fitBounds(newBounds); // Ajusta a exibição do mapa conforme a nova imagem
    });
};
