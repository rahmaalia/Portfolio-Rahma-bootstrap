//li active
var selector = '.navbar-nav a';

$(selector).on('click', function () {
  $(selector).removeClass('active');
  $(this).addClass('active');
});

//javascript for navigation bar effect on scroll
$(function () {
  $(document).scroll(function () {
    var $nav = $('nav');
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});
