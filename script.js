// smooth movement of hexagons while you're scrolling

window.addEventListener('scroll', function(e) {
    
    var div = document.querySelectorAll('.hexamove');
div.forEach(function(element, index) {

    const rect = element.getBoundingClientRect();
const position = rect.top * -1 / 6 + 'px';;
   /* console.log(position);*/
element.style.marginTop = position;
    
});
    
});