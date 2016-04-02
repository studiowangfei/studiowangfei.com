$(document).ready(function(){

  // no feature, add margin
  $('.bottom-section').css('margin-top', '224px');

  for(var i=0; i<4; i++){
    $('#contact_option_'+i).click(imgSwitch(i));
  }

  function imgSwitch(x){
    return function(){
      for(var i=0; i<4; i++){
        $('#switch_img_'+i).css('opacity', '0');
      }
      $('#switch_img_'+x).css('opacity', '1');
    }
  }

  // image and brief text change layout according to window width
  function contactImageLayout(){
    var containerWidth = $('.main-container').width();
    if (containerWidth >= 840){
      $('.contact_title')
      .css('margin', '0')
      .css('text-align', 'left');

      $('.contact_brief')
      .css('width', '50.25%')
      .css('margin', '0')
      .css('text-align', 'left');

      $('.contact_img')
      .css('width', '360px')
      .css('margin', '0');

    }else{
      $('.contact_title')
      .css('margin', '0 auto')
      .css('text-align', 'center');

      $('.contact_brief')
      .css('width', '80%')
      .css('margin', '0 auto')
      .css('text-align', 'center');

      $('.contact_img')
      .css('width', '480px')
      .css('margin', '48px auto 0 auto');
    }
  }

  contactImageLayout();

  $(window).resize(function(){
    contactImageLayout()
  });


});
