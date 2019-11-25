// FadeIn effect on home page load
$(document).ready(function(){
  console.log('log');
  $('#cover').fadeOut(2000);
});

// Scroll to top function
$('.scroll_to').click(function () {
    $('body').animate(
      {
        scrollTop: 0
      },
      "smooth"
    );
});
