$('.menu-btn').on('click', function(e){
     e.preventDefault();
     $(this).toggleClass('menu-btn_active');
     $('.menu').toggleClass('menu-active');
});

$(".list").on('click', function(a){
     a.preventDefault();
     $('.menu-btn').removeClass('menu-btn_active')
     $('.menu').removeClass('menu-active');
});

$('.element').on('click', function(k){
     k.preventDefault();
     $('.discription').slideToggle(1000);
     $('.discription').animate({
          opasity: 0.5
     }, 1000);
})