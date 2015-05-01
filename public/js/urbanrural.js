$(document).ready(function(){
  var i;
  $(window).on('beforeunload', function() {
    $(window).scrollTop(0);
  });
  $('#scroll').click(function(){
    $('body, html').animate({ scrollTop: 680 }, 'slow');
  });

  //slideshow image append
  var img_number = 2;
  for(var x=0;x<img_number;x++){
    $('.project_img').append(
      '<img id="project_small_' + x + '" src="../img/project/urbanrural/' + x +'_small.jpg"/>'
    );

    $('.project_slide_img').append(
      '<img id="project_big_' + x + '" src="../img/project/urbanrural/' + x +'_big.jpg"/>'
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


  //feature part: click show/hide layers
  $('#02, #03, #04, #05, #06, #07, #08, #09, #10, #11, #12').hide();

  $('#population').click(function(){
        $(this).toggleClass('urbanrural_box');
        $('#urban, #rural, #everything').removeClass('urbanrural_box');
        $('#10, #11, #12').fadeOut('slow');
        $('#02, #06').fadeToggle('slow');
  });


  $('#income').click(function(){
        $(this).toggleClass('urbanrural_box');
        $('#urban, #rural, #everything').removeClass('urbanrural_box');
        $('#10, #11, #12').fadeOut('slow');
        $('#05, #07').fadeToggle('slow');
  });

  $('#housing').click(function(){
        $(this).toggleClass('urbanrural_box');
        $('#urban, #rural, #everything').removeClass('urbanrural_box');
        $('#10, #11, #12').fadeOut('slow');
        $('#03, #04').fadeToggle('slow');
  });

  $('#urban').click(function(){
        $(this).toggleClass('urbanrural_box');
        $('#population, #income, #housing, #rural, #everything')
        .removeClass('urbanrural_box');
        $('#02, #03, #04, #05, #06, #07, #11, #12').fadeOut('slow');
        $('#10').fadeToggle('slow');
  });

  $('#rural').click(function(){
        $(this).toggleClass('urbanrural_box');
        $('#population, #income, #housing, #urban, #everything')
        .removeClass('urbanrural_box');
        $('#02, #03, #04, #05, #06, #07, #10, #12').fadeOut('slow');
        $('#11').fadeToggle('slow');
  });

  $('#policy').click(function(){
        $(this).toggleClass('urbanrural_box');
        $('#everything')
        .removeClass('urbanrural_box');
        $('#12').fadeOut('slow');
        $('#08, #09').fadeToggle('slow');
  });

  $('#everything').click(function(){
        $(this).toggleClass('urbanrural_box');
        $('#population, #income, #housing, #urban, #rural, #policy')
        .removeClass('urbanrural_box');
        $('#02, #03, #04, #05, #06, #07, #08, #09, #10, #11').fadeOut('slow');
        $('#12').fadeToggle('slow');
  });

});



