$(document).ready(function () {
    $('.kosmo-slider').slick({  
   infinite: true,
   slidesToShow: 3,
   slidesToScroll: 3,
   dots:true,
    responsive: [
   {
     breakpoint: 480,
     settings: {
       slidesToShow: 2,
       slidesToScroll: 2
     }
   }
 ]
 });
});