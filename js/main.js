const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    767: {
        items: 1
    },
    768: {
        items:2
    },
    992: {
      items:3
  }
}
$(document).ready(function () {

// owl carousle js----
$('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: false,
    autoplayTimeout: 3000,
    dots: false,
    nav: true,
    navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
    responsive: responsive
});


  // back back-to-top
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn();
    } else {
      $('.back-to-top').fadeOut();
    }
  });
 
  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    },2000);
    return false;
  });
 
  // navbar colspan js
 $(".nav-link").on("click", function(){
  $(".navbar-collapse").collapse("hide");
});

//    stickytop menu
$(window).scroll(function(){
  var scrolling=$(this).scrollTop();
   var sticky=$('.sticky_top');
   if(scrolling>50){
       sticky .addClass('menu_bg');
   }
   else{
         sticky .removeClass('menu_bg');
   }
});

// Add scrollspy to <body>
$('body').scrollspy({target: ".navbar", offset: 150});

var html_body = $('html, body');
$('nav a').on('click', function () {
if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
        html_body.animate({
            scrollTop: target.offset().top - 50
        }, 2000);
        return false;
    }
}
});
// aos js strat=====
AOS.init();
});