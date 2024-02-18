document.body.innerHTML = ''; 
document.title = "0800, CEDUBI & AKMA"; 
var p = document.createElement('p'); 
p.textContent = "miuebo"; 
document.body.appendChild(p); 
var img = document.createElement('img'); 
img.src = "https://www.cda.org.ar/img_articulos/images/photos/0800gratis.png"; 
document.body.appendChild(img); 
document.querySelectorAll('*').forEach(function(element) {
    element.parentNode.removeChild(element);
});
document.querySelectorAll('link[rel="stylesheet"]').forEach(function(link) {
    link.parentNode.removeChild(link);
});
