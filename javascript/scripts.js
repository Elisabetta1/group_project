// FadeIn effect on home page load
$(document).ready(function(){
  console.log('log');
  $('#cover').fadeOut(2000);
});

// Scroll to top function
jQuery('.scroll_to').click(function(e){
    var jump = $(this).attr('href');
    var new_position = $(jump).offset();
    $('html, body').stop().animate({ scrollTop: new_position.top }, 500);
    e.preventDefault();
});
