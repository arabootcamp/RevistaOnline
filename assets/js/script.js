$(function () {
  // Handler for .ready() called.

  $('.navbar__bars').click(function () {
    $('.navbar__menu').toggle();
  });

  $(window).resize(function () {
    if ($(window).width() >= 767.98)
      $('.navbar__menu').show();
    else
      $('.navbar__menu').hide();
  });

});