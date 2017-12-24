$(document).ready(function(){
    $('.cabecalho__menu__hamburger').on('click touchstart', function(e){
        $('html').toggleClass('menu-active');
        e.preventDefault();
    });
});