// Criar o mapa interativo
var map = L.map('map', {
    minZoom: -2,  // Agora permite zoom negativo
    maxZoom: 4,    
    center: [0, 0], 
    zoom: 1,       
    crs: L.CRS.Simple,
    scrollWheelZoom: true,  
    dragging: true, 
    maxBoundsViscosity: 1.0
});

// Carregar a imagem e definir limites automaticamente
var image = new Image();
image.src = 'mapa.jpg'; 

image.onload = function() {
    var w = image.width;
    var h = image.height;
    var bounds = [[0, 0], [h, w]];

    // Adicionar a imagem ao mapa
    var imageOverlay = L.imageOverlay(image.src, bounds).addTo(map);

    // Ajustar para caber na tela
    map.fitBounds(bounds);
    
    // Mantém os limites corretamente no celular e desktop
    map.setMaxBounds(bounds);

    // Corrige problemas de redimensionamento no celular
    window.addEventListener('resize', function() {
        map.invalidateSize();
        map.setMaxBounds(bounds);
    });
};
