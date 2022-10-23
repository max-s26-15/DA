$('.menu-btn').on('click', function(e){
     e.preventDefault();

     let width = parseInt($('body').css('width'));
     let ifVisible = $('body').css("overflow-y");
     if(width <= 650 && ifVisible == 'visible'){
          $('body').css("overflow-y", 'hidden');
     }else{
          $('body').css("overflow-y", 'visible');
     }

     $(this).toggleClass('menu-btn_active');
     $('.menu').toggleClass('menu-active');
});

$(".list").on('click', function(a){
     a.preventDefault();
     $('.menu-btn').removeClass('menu-btn_active')
     $('.menu').removeClass('menu-active');
});


$('.block_element2').toggle();

$('.element').on('click', function(k){
     k.preventDefault();
     $('.block_element2').slideToggle(1000);
     $('.block_element2').animate({
          opasity: 0.5
     }, 2000);
     
     /* $('.block_element1').css("height", "100%"); */
});