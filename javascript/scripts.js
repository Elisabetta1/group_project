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


// Scroll to bottom function
// $('.scroll_bottom').click(function jumpScroll() {
//   window.scrollTo(0,10000);
// }
