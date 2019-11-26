
// _____________ FadeIn effect on home page load  _____________
$(document).ready(function(){
  console.log('log');
  $('#cover').fadeOut(2000);
});

//  _____________  Homepage scrolling functions  _____________
// Scroll to second container
function scrollNext() {
  var elmnt = document.getElementById("home-section-2");
  elmnt.scrollIntoView();
}
// Scroll to third container
function scrollNext2() {
  var elmnt = document.getElementById("home-section-3");
  elmnt.scrollIntoView();
}
// Scroll to fourth container
function scrollNext3() {
  var elmnt = document.getElementById("home-section-4");
  elmnt.scrollIntoView();
}

//  _____________  Smooth scroll to Top  _____________
$('.scroll_to').click(function () {
    $('body').animate(
      {
        scrollTop: 0
      },
      "smooth"
    );
});
