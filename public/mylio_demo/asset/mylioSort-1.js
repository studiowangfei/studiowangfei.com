$(document).ready(function(){

  var switchIndex = 0;
  function switchPair(i){
    return function(){
      if(i===0 | i===1){
        $('.pic-0, .pic-1').css('border', '4px solid black');
        $('.pic-'+i).css('border', '4px solid #2AACE8');
        $('.pic-0 img, .pic-1 img').css('-webkit-filter','none');
        $('.pic-'+i+' img').addClass('selected').css('-webkit-filter','sepia(100%)');
        $('#pair-0, #pair-2')
        .css('z-index', '0');
        $('#pair-1')
        .css('z-index', '1');
        switchIndex = 1;
      }else if(i===2 | i===3){
        $('.pic-2, .pic-3').css('border', '4px solid black');
        $('.pic-'+i).css('border', '4px solid #2AACE8');
        $('.pic-2 img, .pic-3 img').css('-webkit-filter','none');
        $('.pic-'+i+' img').addClass('selected').css('-webkit-filter','sepia(100%)');
        $('#pair-0, #pair-1')
        .css('z-index', '0');
        $('#pair-2')
        .css('z-index', '1');
        switchIndex = 2;
      }else if(i===4 | i===5){
        $('.pic-4, .pic-5').css('border', '4px solid black');
        $('.pic-'+i).css('border', '4px solid #2AACE8');
        $('.pic-4 img, .pic-5 img').css('-webkit-filter','none');
        $('.pic-'+i+' img').addClass('selected').css('-webkit-filter','sepia(100%)');
        $('#pair-0, #pair-1')
        .css('z-index', '0');
        $('#pair-2')
        .css('z-index', '1')
        switchIndex = 2;
      }
      previewSwitch();
    }
  }

  for(var i=0; i<6; i++){
    $('.pic-'+i).click(switchPair(i));
  }

  $('.back').click(function(){
    if(switchIndex===0 | switchIndex===1){
      $('#pair-1, #pair-2').css('z-index', '0');
      $('#pair-0').css('z-index', '1');
      switchIndex=0;
    }else if(switchIndex===2){
      $('#pair-0, #pair-2').css('z-index', '0');
      $('#pair-1').css('z-index', '1');
      switchIndex=1;
    }
    previewSwitch();
  });

  $('.next').click(function(){
    if(switchIndex===0){
      $('#pair-0, #pair-2').css('z-index', '0');
      $('#pair-1').css('z-index', '1');
      switchIndex=1;
    }else if(switchIndex===1 | switchIndex===2){
      $('#pair-0, #pair-1').css('z-index', '0');
      $('#pair-2').css('z-index', '1');
      switchIndex=2;
    }
    previewSwitch();
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

  for(var i=0; i<5; i++){
    $('.bottom-preview').append(
      '<div class="preview-pic" id="preview-'+i+'"><img src="asset/preview_'+i+'.jpg"></div>'
    )
  }

  function previewSwitch(){
    if(switchIndex === 0){
      $('.bottom-container').animate({ scrollLeft: 0 }, 750);
      $('#preview-0, #preview-2, #preview-3, #preview-4').css('opacity', '0.25');
      $('#preview-1').css('opacity', '1');
    }else if(switchIndex === 1){
      $('.bottom-container').animate({ scrollLeft: 286 }, 750);
      $('#preview-0, #preview-1, #preview-3, #preview-4').css('opacity', '0.25');
      $('#preview-2').css('opacity', '1');
    }else if(switchIndex === 2){
      $('.bottom-container').animate({ scrollLeft: 572 }, 750);
      $('#preview-0, #preview-1, #preview-2, #preview-4').css('opacity', '0.25');
      $('#preview-3').css('opacity', '1');
    }
  }

  previewSwitch();

  $('#preview-1').click(function(){
    switchIndex=0;
    previewSwitch();
    $('#pair-1, #pair-2').css('z-index', '0');
    $('#pair-0').css('z-index', '1');
  });

  $('#preview-2').click(function(){
    switchIndex=1;
    previewSwitch();
    $('#pair-0, #pair-2').css('z-index', '0');
    $('#pair-1').css('z-index', '1');
  });

  $('#preview-3').click(function(){
    switchIndex=2;
    previewSwitch();
    $('#pair-0, #pair-1').css('z-index', '0');
    $('#pair-2').css('z-index', '1');
  });
})
