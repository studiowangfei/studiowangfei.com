$(document).ready(function(){

  function imageSwitch(n){
    return function(){
      for (var i=0; i<11; i++){
        $('#img_'+i).css('opacity', '0');
      }

      $('#img_'+n).css('opacity', '1');
    }
  }


  for (var i=0; i<5; i++){
    $('#button_'+i)
    .mouseenter(imageSwitch(i+1))
    .mouseleave(imageSwitch(0));

    $('#button_'+i).click(imageSwitch(i+6));
  }

  $('.close_button').click(imageSwitch(9));

  function closeButtonPosition(){
    var width = $(window).width();
    console.log(width);
    $('.close_button').css('left', (width-960)*0.5+920+'px');
  }

  closeButtonPosition();
  $(window).resize(function(){
    closeButtonPosition()
  });

});
