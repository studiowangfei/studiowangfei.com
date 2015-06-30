$(document).ready(function(){
  $(window).on('beforeunload', function() {
    $(window).scrollTop(0);
  });

  // top section responsive to scroll up and down
  $(window).scroll(function(){
    $('.top-container').css('background-color', 'black')
    .css('border-bottom', 'none');
    $('#logo').css('color', 'white');
    $('#current').css('color', 'white');
    $('.item').hover(function(){
      $(this).css('color', 'white');
    }, function(){
      $(this).css('color', '#888888');
      $('#current').css('color', 'white');
    });
    var topMargin = $(window).scrollTop();
    if (topMargin === 0){
      $('.top-container').css('background-color', 'white')
      .css('border-bottom', '1px solid #e3e3e3');
      $('#current').css('color', 'black');
      $('#logo').css('color', 'black');
      $('.item').hover(function(){
        $(this).css('color', 'black');
      }, function(){
        $(this).css('color', '#888888');
        $('#current').css('color', 'black');
      });
    }
  });

  /*//resize top fixed menu
  var widthForTop = $('.main-container').width();
  $('.top-section').css('width', widthForTop+'px');

  $(window).resize(function(){
    var widthForTop = $('.main-container').width();
    $('.top-section').css('width', widthForTop+'px');
  });*/

   //flipper append, using sprite method
  for(var i=0;i<12;i++){
    var projectUrl;
    if(i===0){
      projectUrl="project/taobao_2.html"
    }else if(i===1){
      projectUrl="project/nycsub.html"
    }else if(i===2){
      projectUrl="project/inin.html"
    }else if(i===3){
      projectUrl="project/taobao.html"
    }else if(i===4){
      projectUrl="project/sfpopos.html"
    }else if(i===5){
      projectUrl="project/work.html"
    }else if(i===6){
      projectUrl="project/anotherleap.html"
    }else if(i===7){
      projectUrl="project/urbanrural.html"
    }else if(i===8){
      projectUrl="project/impressionism.html"
    }else if(i===9){
      projectUrl="project/holistic.html"
    }else if(i===10){
      projectUrl="project/drawit.html"
    }else if(i===11){
      projectUrl="project/closer.html"
    }

    $('.icon_container').append('<div class="flipper" id="flipper_'+i+'"><a href='+projectUrl+'><div class="front"></div></a><div class="back"></div></div>');
    $('#flipper_'+i+' .front').css('background-image', 'url("img/project/project_icon/project_sprite_front.png")').css('background-repeat','no-repeat').css('background-position', -220*i+'px 0px');
    $('#flipper_'+i+' .back').css('background-image', 'url("img/project/project_icon/project_sprite_back.png")').css('background-repeat','no-repeat').css('background-position', -220*i+'px 0px');
  };

  $('.front').mouseenter(
    function(){
      $('.back').css('opacity', '1')
  });
});
