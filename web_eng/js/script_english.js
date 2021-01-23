$(document).ready(function(){
    //scroll da página//
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("aba");                
        }else{
            $('.navbar').removeClass("aba"); 
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show"); 
        }else{
            $('.scroll-up-btn').removeClass("show");  
        }
    })

    //deslizar para o inicio//
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    // mudança do menu para a aba//
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    //Animação de texto - página inicial//
    var typed = new Typed(".typing", {
        strings: ["Young", "Baroque", "Classic", "Romantic", "Everyone"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true        
    });

    //owl carousel//
    $(".slider").owlCarousel({
            margin: 20,
            loop:true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsive: {
                0:{
                    items:  1,
                    nav: false
                },
                600:{
                    items: 2,
                    nav: false
                },
                1000:{
                    items: 3,
                    nav: false
                }
            }
    });

    
});