$(document).ready(function () {

   //Mobile functions
   function mobileMenu() { // So the weapon menus line up together
      if ($(window).width() <=900){
         $('.menu li').click(function () {
            $('.menu').css({'opacity' : '0', 'visibility' : 'hidden'});
         });
         $('.back').click(function () {
            $('.menu').css({'opacity' : '1', 'visibility' : 'visible'});;
         });
         $('.gen').click(function() {
            $('.back').css("top", "20%");
         });
         $('.eth, .bod').click(function() {
            $('.back').css("top", "35%");
         });
      }
   }
   mobileMenu();

    $('.gen').click(function () {
        $('.gen-menu').addClass("pickmenu");
        $('.back').addClass("pickmenuback");
        $('.bod-menu, .eth-menu').removeClass("pickmenu");
    });

    $('.bod').click(function () {
        $('.bod-menu').addClass("pickmenu");
        $('.back').addClass("pickmenuback");
        $('.gen-menu, .eth-menu').removeClass("pickmenu");
    });

    $('.eth').click(function () {
        $('.eth-menu').addClass("pickmenu");
        $('.back').addClass("pickmenuback");
        $('.bod-menu, .gen-menu').removeClass("pickmenu");
    });
    $('.back').click(function () {
        $('.gen-menu, .bod-menu, .eth-menu').removeClass("pickmenu");
        $('.back').removeClass("pickmenuback");
    });

    //Change .image class path based off specific clicks!!

    var val1 = "athletic"
    val2 = "male"
    val0 = "body";

    function pickCharacter(value0, value1, value2) {
        $('.image').attr('src', 'img/' + value0 + '/' + value1 + "-" + value2 + ".svg");
    }

    pickCharacter(val0, val1, val2);


    $('.eth-menu li').click(function () {
        val0 = "face";
        val1 = $(this).text().toLowerCase();
        pickCharacter(val0, val1, val2);
    });

    $('.gen-menu li').click(function () {
        val2 = $(this).text().toLowerCase();
        pickCharacter(val0, val1, val2);
    });

    $('.bod-menu li').click(function () {
        val0 = "body";
        val1 = $(this).text().toLowerCase();
        pickCharacter(val0, val1, val2);
    });

});
