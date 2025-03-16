// Criar o mapa interativo
var map = L.map('map', {
    minZoom: -2,  // Permite afastar mais o zoom
    maxZoom: 4,   // Permite zoom in
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

    // **CALCULAR O ZOOM INICIAL AUTOMATICAMENTE**
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;
    
    var widthRatio = screenWidth / w;
    var heightRatio = screenHeight / h;
    
    var initialZoom = Math.log2(Math.min(widthRatio, heightRatio));  // Calcula o zoom inicial correto

    map.setMinZoom(initialZoom); // Define um zoom mínimo dinâmico
    map.setView([h / 2, w / 2], initialZoom); // Centraliza a imagem e ajusta o zoom inicial
    
    // Mantém os limites corretamente no celular e desktop
    map.setMaxBounds(bounds);

    // Corrige problemas de redimensionamento no celular
    window.addEventListener('resize', function() {
        map.invalidateSize();
        map.setMaxBounds(bounds);
    });
};
