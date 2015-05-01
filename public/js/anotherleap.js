$(document).ready(function(){
  $(window).on('beforeunload', function() {
    $(window).scrollTop(0);
  });
  $('#scroll').click(function(){
    $('body, html').animate({ scrollTop: 1850 }, 1200);
  });

  //slideshow image append
  var img_number = 12;
  for(var x=0;x<img_number;x++){
    $('.project_img').append(
      '<img id="project_small_' + x + '" src="../img/project/anotherleap/' + x +'_small.jpg"/>'
    );

    $('.project_slide_img').append(
      '<img id="project_big_' + x + '" src="../img/project/anotherleap/' + x +'_big.jpg"/>'
    );
  };

  //project slideshow (automatic on page top-right)
  $(".project_img > img:gt(0)").hide();

  function slideSwitch(){
    $('.project_img > img:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('.project_img');
  }

  //slideshow pause when hover
  var theInterval;
  function startSlide() {
    theInterval = setInterval(slideSwitch, 4000);
  }

  function stopSlide() {
    clearInterval(theInterval);
  }

  $(function(){
    startSlide();
    $('.project_img').hover(function(){
      stopSlide();
    }, function(){
      startSlide();
    })
  });


  //project slideshow new window & slide resize
  function slide_resize(){
    /* slide responsive to window, initial and resize*/
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();
    var slideHeight = $('.project_slide').height();
    if(windowHeight-slideHeight>0){
      $('.project_slide').css('margin-top', (windowHeight-slideHeight)*0.5+'px');
    }else{
      $('.project_slide').css('margin-top', '48px');
    }
    $('#project_arrow_left, #project_arrow_right').css('margin-top', (slideHeight-72)*0.5+'px');
  };


  $(window).resize(function(){
    slide_resize();
  });

  var slideshowIndex =0;
  function project_slideshow(id){
    return function(){
      slideshowIndex = id;
      $('body, html').css('overflow', 'hidden');
      $('.project_slide_container').show();
      $('.project_slide_img img').hide();
      $('#project_big_'+id).fadeIn('slow');
      slide_resize();
    }
  }


  function project_slide_prev(){
    if (slideshowIndex === 0) {
      slideshowIndex = img_number-1;
      $('.project_slide_img img').hide();
      $('#project_big_'  + slideshowIndex).fadeIn('slow');
    } else {
      slideshowIndex--;
      $('.project_slide_img img').hide();
      $('#project_big_'  + slideshowIndex).fadeIn('slow');
    }
  }

  function project_slide_next(){
    if (slideshowIndex === img_number-1) {
      slideshowIndex = 0;
      $('.project_slide_img img').hide();
      $('#project_big_'  + slideshowIndex).fadeIn('slow');
    } else {
      slideshowIndex++;
      $('.project_slide_img img').hide();
      $('#project_big_'  + slideshowIndex).fadeIn('slow');
    }
  }

  for(var y=0;y<img_number;y++){
    $('#project_small_'+y).click(project_slideshow(y));
  };

  $('#project_arrow_left').click(project_slide_prev);
  $('#project_arrow_right').click(project_slide_next);
  $('.project_slide_img img').click(project_slide_next);


  $(document).keyup(function(e) {
    if (e.keyCode == 27) {
      $('body, html').css('overflow', 'auto');
      $('.project_slide_container').hide();
    };
  }); // escape key maps to keycode '27'

  $('.project_close').click(function(){
      $('body, html').css('overflow', 'auto');
      $('.project_slide_container').hide();
  });


  // feature on the bottom of page
  for(var i=1; i<8; i++){
    $('#anotherleap_right').append(
      '<img id="mani_' + i + '" src="../img/project/anotherleap/artworks/' + i + '.png"/>'
    );
  };

  $('#manifesto').click(function(){
    $('#anotherleap_left img, #anotherleap_right img').fadeOut();
    $('.al_bold').removeClass('al_red');
  });

  var n;
  function manifesto_click(n){
    return function(){
      $('.al_bold').removeClass('al_red');
      $('#manifesto_'+n).toggleClass('al_red');
      $('#anotherleap_right img').hide();
      $('#mani_'+n).fadeToggle('slow');
      $('#mani_'+n).click(function(){
        $(this).fadeOut('slow');
        $('.al_bold').removeClass('al_red');

      });
    }
  };

  for(n=1; n<8; n++){
    $('#manifesto_'+n).click(manifesto_click(n));
  };

  for(var x=1; x<15; x++){
    $('#anotherleap_left').append(
      '<img id="art_' + x + '" src="../img/project/anotherleap/artworks/' + x + '.gif"/>'
    );
  };

  $('#works').click(function(){
    $('#anotherleap_left img, #anotherleap_right img').fadeOut();
    $('.al_bold').removeClass('al_red');
  });

  var y;
  function works_click(y){
    return function(){
      $('.al_bold').removeClass('al_red');
      $('#works_'+y).toggleClass('al_red');
      $('#anotherleap_left img').hide();
      $('#art_'+y).fadeToggle('slow');
      $('#art_'+y).click(function(){
        $(this).fadeOut('slow');
        $('.al_bold').removeClass('al_red');
      });
    }
  };

  for(y=1; y<15; y++){
    $('#works_'+y).click(works_click(y));
  };


});
