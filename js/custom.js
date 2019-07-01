$(function() {



$('.brand-sldier-wrp').owlCarousel({
    loop:true,
    margin:10,
    rtl:true,
    loop:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            
        },
        600:{
            items:3,
           
        },
        1000:{
            items:5,
           
            
        }
    }
})

$('.test-slide').owlCarousel({
    loop:true,
    margin:10,
    rtl:true,
    loop:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            
        },
        600:{
            items:1,
           
        },
        1000:{
            items:1,
           
            
        }
    }
})




});