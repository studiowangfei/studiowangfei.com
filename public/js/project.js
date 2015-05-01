$(document).ready(function(){
  $(window).on('beforeunload', function() {
        $(window).scrollTop(0);
  });

  $('.front').mouseenter(
  function(){
    $('.back').css('opacity', '1')
  });

});
