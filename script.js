// Navigation title fade in/out effect

var isVisible = false;
  $('#navbar-title').click(function(){
    $(window).scrollTop(0);
 });
  $(window).scroll(function(){
     var shouldBeVisible = $(window).scrollTop()>150;
     if (shouldBeVisible && !isVisible) {
          isVisible = true;
          $('#navbar-title').fadeIn("slow");
     } else if (isVisible && !shouldBeVisible) {
          isVisible = false;
          $('#navbar-title').fadeOut("fast");
    }
});

//Hiding navbar collapse on link click

  $('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});

// Scrolling effect

  $(document).ready(function($) {
    $(".scroll").click(function(event){     
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 400);
    });
});
