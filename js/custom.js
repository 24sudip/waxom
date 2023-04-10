$(function(){

    $(window).scroll(function(){
        var scrolling = $(this).scrollTop()
        if(scrolling > 50){
            $(".menu_bg").addClass("nav_bg")
        }else{
            $(".menu_bg").removeClass("nav_bg")
        }
    
        if(scrolling > 30){
            $(".back_to_top").fadeIn(500)
        }else{
            $(".back_to_top").fadeOut(500)
        }
    
      })
    
      $(".back_to_top").click(function(){
          $('html, body').animate({
              scrollTop:0
          }, 2000)
      })

      $('.counter').counterUp({
        delay: 10,
        time: 1500
    });
})
