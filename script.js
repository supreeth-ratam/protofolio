const parallax = document.getElementById('parallax')

window.addEventListener(scroll , function(){
    let offset = window.scrollY;
    parallax.style.backgroundPosition = offset*0.5 +'px';

})