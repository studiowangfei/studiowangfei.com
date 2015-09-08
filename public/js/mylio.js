$(document).ready(function(){


  // sprite for user flow images
  for (var i=0; i<16; i++){
    // userflow image sprite
    $('#mylio_userflow_image_' + i)
    .css('background-image', 'url("../img/project/mylio/dark_sprite.jpg")')
    .css('background-size', '1600% 100%')
    .css('background-repeat','no-repeat')
    .css('background-position', 20/3*i+'% 0%');
  }

  // optimize user flow image work for mobile (appx 310px)
  // and optimize mock up options on the bottom

  function mylioUserFlowImageLayout(){
    var containerWidth = $('.feature_container').width();

    // user flow images
    if (containerWidth < 480){
      // regular images
      $('.mylio_userflow_image')
      .css('width', containerWidth*1+'px')
      .css('height', containerWidth*0.702+'px');

      $('.device_orientation img')
      .css('margin', '0 auto');

    }else{
      $('.mylio_userflow_image')
      .css('width', '480px')
      .css('height', '337px');

      $('.device_orientation img')
      .css('margin', '-128px 0 0 15%');
    }

    // mock up opton images
    if (containerWidth < 640){
      $('.mylio_options img')
      .css('width', containerWidth*1+'px')
      .css('height', containerWidth*0.68125+'px');
    }else{
      $('.mylio_options img')
      .css('width', 'initial')
      .css('height', 'initial');
    }
  }

  mylioUserFlowImageLayout();
  $(window).resize(function(){
    mylioUserFlowImageLayout();
  });

  /////////// below is mylio live mock-up script ///////////
  var mylioSwitchIndex = 0;
  function switchPair(i){
    return function(){
      if(i===0 || i===1){
        if(mylioSwitchIndex === 0){
          $('.pic-0, .pic-1').css('border', '4px solid #212121');
          $('.pic-'+i).css('border', '4px solid #2AACE8');
          $('.pic-0 img, .pic-1 img')
          .css('filter', 'none')
          .css('-webkit-filter','none');
          $('.pic-'+i+' img').addClass('selected')
          .css('filter', 'sepia(100%)')
          .css('-webkit-filter','sepia(100%)');
          $('.mylio-mockup-sort-container').animate({scrollTop:285}, 750);
          mylioSwitchIndex = 1;
        }else{
          $('.mylio-mockup-sort-container').animate({scrollTop:0}, 750);
          mylioSwitchIndex = 0;
        }
      }else if(i===2 || i===3){
        if(mylioSwitchIndex === 1){
          $('.pic-2, .pic-3').css('border', '4px solid #212121');
          $('.pic-'+i).css('border', '4px solid #2AACE8');
          $('.pic-2 img, .pic-3 img')
          .css('filter', 'none')
          .css('-webkit-filter','none');
          $('.pic-'+i+' img').addClass('selected')
          .css('filter', 'sepia(100%)')
          .css('-webkit-filter','sepia(100%)');
          $('.mylio-mockup-sort-container').animate({scrollTop:570}, 750);
          mylioSwitchIndex = 2;
        }else{
          $('.mylio-mockup-sort-container').animate({scrollTop: 285}, 750);
          mylioSwitchIndex = 1;
        }
      }else if(i===4 || i===5){
        if (mylioSwitchIndex === 2){
          $('.pic-4, .pic-5').css('border', '4px solid #212121');
          $('.pic-'+i).css('border', '4px solid #2AACE8');
          $('.pic-4 img, .pic-5 img')
          .css('filter', 'none')
          .css('-webkit-filter','none');
          $('.pic-'+i+' img').addClass('selected')
          .css('filter', 'sepia(100%)')
          .css('-webkit-filter','sepia(100%)');
          $('.mylio-mockup-sort-container').animate({scrollTop:936}, 750);
          mylioSwitchIndex = 2;
        }else{
          $('.mylio-mockup-sort-container').animate({scrollTop: 570}, 750);
          mylioSwitchIndex = 2;
        }
      }
      mylioPreviewSwitch();
      opacityControl();
    }
  }

  function opacityControl(){
    if (mylioSwitchIndex === 0){
      $('.pic-2, .pic-3, .pic-4, .pic-5').css('opacity', '0.35');
      $('.pic-0, .pic-1').css('opacity', '1')
    }else if (mylioSwitchIndex === 1){
      $('.pic-0, .pic-1, .pic-4, .pic-5').css('opacity', '0.35');
      $('.pic-2, .pic-3').css('opacity', '1')
    }if (mylioSwitchIndex === 2){
      $('.pic-2, .pic-3, .pic-0, .pic-1').css('opacity', '0.35');
      $('.pic-4, .pic-5').css('opacity', '1')
    }
  }

  opacityControl();

  for(var i=0; i<6; i++){
    $('.pic-'+i).click(
      switchPair(i));
  }

  $('.back').click(function(){
    if(mylioSwitchIndex===0 | mylioSwitchIndex===1){
      $('.mylio-mockup-sort-container').animate({scrollTop:0}, 750);
      mylioSwitchIndex=0;
    }else if(mylioSwitchIndex===2){
      $('.mylio-mockup-sort-container').animate({scrollTop:285}, 750);
      mylioSwitchIndex=1;
    }
    mylioPreviewSwitch();
    opacityControl();
  });

  $('.next').click(function(){
    if(mylioSwitchIndex===0){
      $('.mylio-mockup-sort-container').animate({scrollTop:285}, 750);
      mylioSwitchIndex=1;
    }else if(mylioSwitchIndex===1 | mylioSwitchIndex===2){
      $('.mylio-mockup-sort-container').animate({scrollTop:570}, 750);
      mylioSwitchIndex=2;
    }
    mylioPreviewSwitch();
    opacityControl();
  });

  $('.undo').click(function(){
    if(mylioSwitchIndex===0){
      $('.pic-0, .pic-1').css('border', '4px solid #212121');
      $('.pic-0 img, .pic-1 img')
      .css('filter', 'none')
      .css('-webkit-filter','none');
    }else if(mylioSwitchIndex===1){
      $('.pic-2, .pic-3')
      .css('filter', 'none')
      .css('border', '4px solid #212121');
      $('.pic-2 img, .pic-3 img').css('-webkit-filter','none');
    }else if(mylioSwitchIndex===2){
      $('.pic-4, .pic-5').css('border', '4px solid #212121');
      $('.pic-4 img, .pic-5 img')
      .css('filter', 'none')
      .css('-webkit-filter','none');
    }
  });

  for(var i=0; i<14; i++){
    $('.side-preview').append(
      '<div class="preview-pic" id="preview-'+i+'"><img src="../img/project/mylio/mockup/column_'+i+'.jpg"></div>'
    )
  }

  function mylioPreviewSwitch(){
    if(mylioSwitchIndex === 0){
      $('.mylio-mockup-side-container').animate({ scrollTop: 0 }, 750);
      for(var i=0; i<14; i++){
        $('#preview-'+i).css('opacity', '0.2');
      }
      $('#preview-4').css('opacity', '1');
    }else if(mylioSwitchIndex === 1){
      $('.mylio-mockup-side-container').animate({ scrollTop: 47 }, 750);
      for(var i=0; i<14; i++){
        $('#preview-'+i).css('opacity', '0.2');
      }
      $('#preview-5').css('opacity', '1');
    }else if(mylioSwitchIndex === 2){
      $('.mylio-mockup-side-container').animate({ scrollTop: 114 }, 750);
      for(var i=0; i<14; i++){
        $('#preview-'+i).css('opacity', '0.2');
      }
      $('#preview-6').css('opacity', '1');
    }
  }

  mylioPreviewSwitch();

  $('#preview-4').click(function(){
    mylioSwitchIndex=0;
    mylioPreviewSwitch();
    $('.mylio-mockup-sort-container').animate({scrollTop:0}, 750);
    opacityControl();
  });

  $('#preview-5').click(function(){
    mylioSwitchIndex=1;
    mylioPreviewSwitch();
    $('.mylio-mockup-sort-container').animate({scrollTop:285}, 750);
    opacityControl();
  });

  $('#preview-6').click(function(){
    mylioSwitchIndex=2;
    mylioPreviewSwitch();
    $('.mylio-mockup-sort-container').animate({scrollTop:570}, 750);
    opacityControl();
  });

});
