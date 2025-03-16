// Criar o mapa interativo
var map = L.map('map', {
    minZoom: 1,    
    maxZoom: 4,    
    center: [0, 0], 
    zoom: 1,       
    crs: L.CRS.Simple,
    scrollWheelZoom: true,  
    dragging: true, // Garante que o arrastar esteja ativado
    maxBoundsViscosity: 1.0  // Mantém os limites fixos
});

// Carregar a imagem e definir limites automaticamente
var image = new Image();
image.src = 'mapa.jpg';  // Certifique-se de que o nome está correto

image.onload = function() {
    var w = image.width;
    var h = image.height;
    var bounds = [[0, 0], [h, w]];

    // Adicionar a imagem ao mapa
    var imageOverlay = L.imageOverlay(image.src, bounds).addTo(map);

    // Ajustar para caber na tela
    map.fitBounds(bounds);
    
    // **Corrigindo o problema da limitação no celular**
    map.setMaxBounds(bounds);

    // **Evita que o mapa perca os limites no celular**
    window.addEventListener('resize', function() {
        map.invalidateSize();  // Força o Leaflet a recalcular o tamanho do mapa
        map.setMaxBounds(bounds); // Reaplica os limites corretamente
    });
};
