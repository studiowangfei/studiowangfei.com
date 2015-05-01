$(document).ready(function(){
  $(window).on('beforeunload', function() {
    $(window).scrollTop(0);
  });

  // no feature, adding margin
  $('.bottom-section').css('margin-top', '224px');

  $('#qrCode').click(function(){
    $('#qrCode_img').fadeToggle('fast');
    $('#sfphoto').fadeToggle('fast');
  });

});
