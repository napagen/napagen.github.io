
$(document).ready(function(){

    let myHello = $(".hello").offset().top;

    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('html, body').animate({scrollTop: top-myHello}, 1000);
    });

    

    $(window).scroll(function(){

        let heightMyWindow = $(window).height();
        
        let heightMyDoc = $(document).height();

        let myScroll = $(this).scrollTop();

        let myHello = $(".hello").offset().top;

        let myPromo = $(".promo").offset().top;

        let myTech = $(".techno").offset().top;

        let myWorks = $(".works").offset().top;

        console.log("heightMyDoc " + heightMyDoc);
        console.log("heightMyWindow " + heightMyWindow);      
        console.log("myScroll " + myScroll);
        console.log("myHello " + myHello);
        console.log("myPromo " + myPromo);
        console.log("myTech " + myTech);
        console.log("myWorks " + myWorks);
        console.log("_");

        if (myScroll > myHello) {
             $(".promo__text").addClass("fadeIn").removeClass("hide");
        }

         if (myScroll > myTech-heightMyWindow*0.3 || myScroll < myHello) {
              $(".promo__text").removeClass("fadeIn").addClass("hide");
        }


        if (myScroll > myTech-heightMyWindow*0.3) {
            $(".icon").addClass("fadeIn").removeClass("hide");
        }
        if (myScroll < myTech-heightMyWindow*0.8 || myScroll > myWorks-heightMyWindow*0.3) {
            $(".icon").removeClass("fadeIn").addClass("hide");
        }


        
        if (myScroll > myWorks-heightMyWindow/2) {
            $("#wrks_wrp").addClass("fadeIn").removeClass("hide");
        }

        if (myScroll < myWorks-heightMyWindow*0.8) {
            $("#wrks_wrp").removeClass("fadeIn").addClass("hide");
        }

     });















});