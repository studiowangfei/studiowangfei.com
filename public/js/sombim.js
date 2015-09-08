$(document).ready(function(){

  // showing title when hovering on user flow images
  function showTitle(n, i){
    return function(){
      $('.sombim_userflow_'+ i +' p')
      .css('opacity', n);
    }
  }

  for (var i=0; i<16; i++){
    // append images to its div in order
    $('.sombim_userflow_' + i)
    .append('<img class="sombim_userflow_image" id="sombim_userflow_image_'+i+'" src="../img/project/sombim/bim_'+i+'.png" />');

    // showing image title
    $('#sombim_userflow_image_' + i)
    .mouseenter(showTitle(1, i))
    .mouseleave(showTitle(0, i));
  }

  // images change layout according to window width
  function sombimImageLayout(){
    var containerWidth = $('.feature_container').width();
    if (containerWidth >= 920){
      $('.sombim_userflow_0, .sombim_userflow_1,'+
        ' .sombim_userflow_8, .sombim_userflow_9')
      .css('width', '75%');
      $('.sombim_userflow_0, .sombim_userflow_8')
      .css('margin-right', '-50%');
      $('.sombim_userflow_1, .sombim_userflow_9')
      .css('margin-top', '48px');

      $('.sombim_userflow_set2_left')
      .css('width', '33%');
      $('.sombim_userflow_4')
      .css('width', '63%')
      .css('margin-left', '4%');

      $('.sombim_userflow_5, .sombim_userflow_6, .sombim_userflow_7')
      .css('width', '60%');
      $('.sombim_userflow_5, .sombim_userflow_6')
      .css('margin-right', '-40%');
      $('.sombim_userflow_6')
      .css('margin-top', '40px');
      $('.sombim_userflow_7')
      .css('margin-top', '80px');

      $('.sombim_userflow_10, .sombim_userflow_11')
      .css('width', '92%')
      .css('margin', '0 auto');

      $('.sombim_userflow_set p')
      .css('text-align', 'right');

      $('.sombim_userflow_10 p, .sombim_userflow_11 p')
      .css('text-align', 'center');

    }else{
      $('.sombim_userflow_0, .sombim_userflow_1,'+
        ' .sombim_userflow_set2_left, .sombim_userflow_4,'+
        ' .sombim_userflow_5, .sombim_userflow_6, .sombim_userflow_7,'+
        ' .sombim_userflow_8, .sombim_userflow_9,'+
        ' .sombim_userflow_10, .sombim_userflow_11')
      .css('width', containerWidth*0.9 + 'px')
      .css('margin', '0 auto');

      $('.sombim_userflow_set p')
      .css('text-align', 'center');
    }
  }

  sombimImageLayout();

  $(window).resize(function(){
    sombimImageLayout()
  });

});
