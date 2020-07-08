$(document).ready(function(){

  // image and brief text change layout according to window width
  function aboutImageLayout(){
    var containerWidth = $('.main-container').width();
    if (containerWidth >= 840){
      $('.about_title')
      .css('margin', '0')
      .css('text-align', 'left');

      $('.about_brief')
      .css('width', '58%')
      .css('margin', '0')
      .css('text-align', 'left');

      $('.about_img')
      .css('width', '360px')
      .css('margin', '0');

    }else{
      $('.about_title')
      .css('margin', '0 auto')
      .css('text-align', 'center');

      $('.about_brief')
      .css('width', '95%')
      .css('margin', '0 auto')
      .css('text-align', 'center')
      .css('font-size', '24px')
      .css('line-height', '32px');

      $('.about_img')
      .css('width', '400px')
      .css('margin', '48px auto 0 auto');
    }
  }

  aboutImageLayout();

  $(window).resize(function(){
    aboutImageLayout()
  });

  // click keyword to show image links
  function clickToShow(i){
    return function(){
      $('.about_img img').hide();
      $('#about_' + i).fadeIn('slow');

      // scroll to the image when in vertical layout
      var containerWidth = $('.main-container').width();
      if (containerWidth < 840){
        $('body, html').animate({scrollTop: 320}, 500);
      }
    }
  }

  for(var i=0; i<12; i++){
    $('#about_link_' + i).click(clickToShow(i));
  }
});
