
$(function () {
    $( "#tabs" ).tabs({ 
    hide: "slideUp", show: "slideDown"
});
     $( ".accordion" ).accordion({
         
     active: false,
  collapsible: true,
       
                                 
                                 });
    $(window).on("load resize", function () {
        $(".fill-screen").css("height", window.innerHeight);
    });

    //add Bootstrap scrollspy
    $('body').scrollspy({
        target: '.navbar',
        offset: 150
    });

    //smooth scrolling
    $('nav a, .down-button a').bind('click', function () {
       
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 120
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    //Parallax scrolling with stellar.js
    $(window).stellar();
    
    setInterval(function(){
    $(".bordfun").css({
        borderBottomLeftRadius: Math.random()*40 +10 +"%",
        borderBottomRightRadius:Math.random()*40 +10  +"%",
        borderTopLeftRadius:Math.random()*40 +10 +"%",
        borderTopRightRadius:Math.random()*40 +10 +"%",
        
        
       
    });},500);

    
});

