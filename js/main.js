$(document).ready(function(){
    
    var clicked = false;
    var $header = $('header');
    $header.find('.nav-btn').click(function(){
       var $this = $(this);
       if(!clicked){
          clicked = true; $this.parent().toggleClass('active');
           setTimeout(function(){
               clicked = false;
           },1450);
       } 
    });
    
    $(document).on('click',function(e){
        var clickover = $(e.target);
        if(!clickover.closest('header').length && $('nav').hasClass('active')){
            $('nav').removeClass('active');
        }
    });
    
    var $mainSection = $('.main-section');
    $(window).scroll(function(){
        if($(window).scrollTop() >= $mainSection.height()+100){
            $header.addClass('sticky');
        }else{
         $header.removeClass('sticky');
            }
    });
});