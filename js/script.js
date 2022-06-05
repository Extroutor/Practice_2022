$('.menu-btn').on('click', function(e) {
    e.preventDefault();
    $('.menu').toggleClass('menu-active');   
    $('.menu-btn').toggleClass('menu-btn-active'); 
})
