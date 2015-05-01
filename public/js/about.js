$(document).ready(function(){
      $(window).on('beforeunload', function() {
            $(window).scrollTop(0);
      });

      $('#about_1').css('display', 'initial');

      var i;
      function createCallback(i){
          return function(){
            $('.about_img img').hide();
            $('#about_' + i).fadeIn('slow');
          }
      }

      for(i=1; i<12; i++){
            $('#about_link_' + i).click(createCallback(i));
      }

});
