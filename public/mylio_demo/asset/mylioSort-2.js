$(document).ready(function(){

  var switchIndex = 0;
  function switchPair(i){
    return function(){
      if(i===0 || i===1){
        if(switchIndex === 0){
          $('.pic-0, .pic-1').css('border', '4px solid black');
          $('.pic-'+i).css('border', '4px solid #2AACE8');
          $('.pic-0 img, .pic-1 img').css('-webkit-filter','none');
          $('.pic-'+i+' img').addClass('selected').css('-webkit-filter','sepia(100%)');
          $('.sort-container').animate({scrollTop:312}, 500);
          switchIndex = 1;
        }else{
          $('.sort-container').animate({scrollTop:0}, 500);
          switchIndex = 0;
        }
      }else if(i===2 || i===3){
        if(switchIndex === 1){
          $('.pic-2, .pic-3').css('border', '4px solid black');
          $('.pic-'+i).css('border', '4px solid #2AACE8');
          $('.pic-2 img, .pic-3 img').css('-webkit-filter','none');
          $('.pic-'+i+' img').addClass('selected').css('-webkit-filter','sepia(100%)');
          $('.sort-container').animate({scrollTop:624}, 500);
          switchIndex = 2;
        }else{
          $('.sort-container').animate({scrollTop: 312}, 500);
          switchIndex = 1;
        }
      }else if(i===4 || i===5){
        if (switchIndex === 2){
          $('.pic-4, .pic-5').css('border', '4px solid black');
          $('.pic-'+i).css('border', '4px solid #2AACE8');
          $('.pic-4 img, .pic-5 img').css('-webkit-filter','none');
          $('.pic-'+i+' img').addClass('selected').css('-webkit-filter','sepia(100%)');
          $('.sort-container').animate({scrollTop:936}, 500);
          switchIndex = 2;
        }else{
          $('.sort-container').animate({scrollTop: 624}, 500);
          switchIndex = 2;
        }
      }
      previewSwitch();
      opacityControl();
    }
  }

  function opacityControl(){
    if (switchIndex === 0){
      $('.pic-2, .pic-3, .pic-4, .pic-5').css('opacity', '0.35');
      $('.pic-0, .pic-1').css('opacity', '1')
    }else if (switchIndex === 1){
      $('.pic-0, .pic-1, .pic-4, .pic-5').css('opacity', '0.35');
      $('.pic-2, .pic-3').css('opacity', '1')
    }if (switchIndex === 2){
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
    if(switchIndex===0 | switchIndex===1){
      $('.sort-container').animate({scrollTop:0}, 500);
      switchIndex=0;
    }else if(switchIndex===2){
      $('.sort-container').animate({scrollTop:312}, 500);
      switchIndex=1;
    }
    previewSwitch();
    opacityControl();
  });

  $('.next').click(function(){
    if(switchIndex===0){
      $('.sort-container').animate({scrollTop:312}, 500);
      switchIndex=1;
    }else if(switchIndex===1 | switchIndex===2){
      $('.sort-container').animate({scrollTop:624}, 500);
      switchIndex=2;
    }
    previewSwitch();
    opacityControl();
  });

  $('.undo').click(function(){
    if(switchIndex===0){
      $('.pic-0, .pic-1').css('border', '4px solid black');
      $('.pic-0 img, .pic-1 img').css('-webkit-filter','none');
    }else if(switchIndex===1){
      $('.pic-2, .pic-3').css('border', '4px solid black');
      $('.pic-2 img, .pic-3 img').css('-webkit-filter','none');
    }else if(switchIndex===2){
      $('.pic-4, .pic-5').css('border', '4px solid black');
      $('.pic-4 img, .pic-5 img').css('-webkit-filter','none');
    }
  });

  for(var i=0; i<14; i++){
    $('.side-preview').append(
      '<div class="preview-pic" id="preview-'+i+'"><img src="asset/column_'+i+'.jpg"></div>'
    )
  }

  function previewSwitch(){
    if(switchIndex === 0){
      $('.side-container').animate({ scrollTop: 0 }, 500);
      for(var i=0; i<14; i++){
        $('#preview-'+i).css('opacity', '0.2');
      }
      $('#preview-4').css('opacity', '1');
    }else if(switchIndex === 1){
      $('.side-container').animate({ scrollTop: 47 }, 500);
      for(var i=0; i<14; i++){
        $('#preview-'+i).css('opacity', '0.2');
      }
      $('#preview-5').css('opacity', '1');
    }else if(switchIndex === 2){
      $('.side-container').animate({ scrollTop: 114 }, 500);
      for(var i=0; i<14; i++){
        $('#preview-'+i).css('opacity', '0.2');
      }
      $('#preview-6').css('opacity', '1');
    }
  }

  previewSwitch();

  $('#preview-4').click(function(){
    switchIndex=0;
    previewSwitch();
    $('.sort-container').animate({scrollTop:0}, 500);
    opacityControl();
  });

  $('#preview-5').click(function(){
    switchIndex=1;
    previewSwitch();
    $('.sort-container').animate({scrollTop:312}, 500);
    opacityControl();
  });

  $('#preview-6').click(function(){
    switchIndex=2;
    previewSwitch();
    $('.sort-container').animate({scrollTop:624}, 500);
    opacityControl();
  });
})
