$(document).ready(function(){
  var i;
  $(window).on('beforeunload', function() {
    $(window).scrollTop(0);
  });

  for(var i=1;i<4;i++){
    $('.writing_'+i).hide();
  }

  //switch articles
  function clickSwitch(x){
    $('#writing_list_'+x).click(function(){
      for(var i=0;i<4;i++){
        $('.writing_'+i).hide();
      }
      $('.writing_'+x).fadeIn('slow');
      $('.writing_container').scrollTop(0);
    })
  }

  clickSwitch(0);
  clickSwitch(1);
  clickSwitch(2);
  clickSwitch(3);

})



