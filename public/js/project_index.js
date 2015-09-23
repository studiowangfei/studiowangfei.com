$(document).ready(function(){
  $(window).on('beforeunload', function() {
    $(window).scrollTop(0);
  });

   //flipper append, using sprite method
  for(var i=0;i<20;i++){
    var projectUrl;
    if(i===0){
      projectUrl="project/mylio.html"
    }else if(i===1){
      projectUrl="project/blooday.html"
    }else if(i===2){
      projectUrl="project/sombim.html"
    }else if(i===3){
      projectUrl="project/zoom.html"
    }else if(i===4){
      projectUrl="project/linkedin.html"
    }else if(i===5){
      projectUrl="project/nycsub.html"
    }else if(i===6){
      projectUrl="project/taobao_2.html"
    }else if(i===7){
      projectUrl="project/sfpopos.html"
    }else if(i===8){
      projectUrl="project/webframe.html"
    }else if(i===9){
      projectUrl="project/taobao.html"
    }else if(i===10){
      projectUrl="project/inin.html"
    }else if(i===11){
      projectUrl="project/work.html"
    }else if(i===12){
      projectUrl="project/anotherleap.html"
    }else if(i===13){
      projectUrl="project/urbanrural.html"
    }else if(i===14){
      projectUrl="project/impressionism.html"
    }else if(i===15){
      projectUrl="project/holistic.html"
    }else if(i===16){
      projectUrl="project/drawit.html"
    }else if(i===17){
      projectUrl="project/closer.html"
    }

    $('.icon_container').append('<div class="flipper" id="flipper_'+i+'">'
      +'<a href='+projectUrl+'><div class="front"></div></a><div class="back"></div></div>');

    $('#flipper_'+i+' .front')
    .css('background-image', 'url("img/project/project_icon/project_sprite_front.png")')
    .css('background-repeat','no-repeat')
    .css('background-position', -220*i+'px 0px');

    $('#flipper_'+i+' .back')
    .css('background-image', 'url("img/project/project_icon/project_sprite_back.png")')
    .css('background-repeat','no-repeat')
    .css('background-position', -220*i+'px 0px');
  };

  // adjust last icon for last row (not necessary when n=4x)
  // hide but still maintain that placeholder for flex justify-content: space-between
  $('#flipper_18, #flipper_19').empty();

  // change opacity to show title when hover
  $('.front').mouseenter(
    function(){
      $('.back')
      .css('opacity', '1')
    }
  );

  // project icons layout setting
  // responsive to window width
  function projectIconLayout(){
    var containerWidth = $(window).width();
    if (containerWidth >= 1032){
      $('.icon_container')
      .css('width', '960px');
    }else if (containerWidth >= 792){
      $('.icon_container')
      .css('width', '720px');
    }else if (containerWidth >= 552){
      $('.icon_container')
      .css('width', '480px');
    }else{
      $('.icon_container')
      .css('width', '240px');
    }
  }

  projectIconLayout();
  $(window).resize(function(){
    projectIconLayout();
  });

});
