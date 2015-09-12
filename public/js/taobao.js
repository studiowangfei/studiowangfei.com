$(document).ready(function(){

  //feature part: small poker images append, using sprite
  for(var i=0; i<108; i++){
    if (i<54){
      $('.taobao_items_1').append(
      '<div class="movetop" id="taobao_poker_small_' + i + '"></div>'
      );
    }else{
      $('.taobao_items_2').append(
      '<div class="movetop" id="taobao_poker_small_' + i + '"></div>'
      );
    }
    var poker_width = $('.movetop').width();
    $('.movetop').css('height', poker_width*1.5+'px');
    $('#taobao_poker_small_'+i)
      .css('background-image', 'url("../img/project/taobao/poker/taobao_sprite.png")')
      .css('-webkit-background-size', '10800% 100%')
      .css('background-repeat','no-repeat')
      .css('background-position', 0.9345*i+'% 0%');
  }

  $(window).resize(function(){
    var poker_width = $('.movetop').width();
    $('.movetop').css('height', poker_width*1.5+'px');
  });

  // poker sort
  var left_1 = [0,1,2,15,28,41];
  var left_2 = [108, 3, 16, 29, 42, 4, 17, 30, 43, 5, 18, 31, 44, 6, 19, 32, 45]
  var left_3 = [109, 7, 20, 33, 46, 8, 21, 34, 47, 9, 22, 35, 48, 10, 23, 36, 49]
  var left_4 = [110, 11, 24, 37, 50, 12, 25, 38, 51, 13, 26, 39, 52, 14, 27, 40, 53]

  var right_1 = [54, 55, 56, 69, 82, 95];
  var right_2 = [108, 57, 70, 83, 96, 58, 71, 84, 97, 59, 72, 85, 98, 60, 73, 86, 99]
  var right_3 = [109, 61, 74, 87, 100, 62, 75, 88, 101, 63, 76, 89, 102, 64, 77, 90, 103]
  var right_4 = [110, 65, 78, 91, 104, 66, 79, 92, 105, 67, 80, 93, 106, 68, 81, 94, 107]

  function change_layout(){
    $('.movetop').css('transition', 'top 0.3s, left 0.3s')
    .css('margin-right', '-7%');

    // joker row move
    for (var i=0;i<left_1.length;i++){
      var poker_height = $('#taobao_poker_small_0').width() * 1.5;
      $('#taobao_poker_small_'+left_1[i]).css('top', -1.5*poker_height+'px');
      if(i<2){
        $('#taobao_poker_small_'+left_1[i]).css('left', 12+'%');
      }
      if(i>1){
        $('#taobao_poker_small_'+left_1[i]).css('left', 12+22-(i-1)*12+'%');
      }
    }

    for (var i=0;i<right_1.length;i++){
      var poker_height = $('#taobao_poker_small_0').width() * 1.5;
      $('#taobao_poker_small_'+right_1[i]).css('top', -1.5*2*poker_height+'px');
      if(i<2){
        $('#taobao_poker_small_'+right_1[i]).css('left', 53+12+'%');
      }
      if(i>1){
        $('#taobao_poker_small_'+right_1[i]).css('left', 53+12+22-(i-1)*12+'%');
      }
    }

    // 2-4 rows move
    function poker_sort(x, y, z){
      for (var i=1;i<x.length;i++){
        var poker_height = $('#taobao_poker_small_0').width() * 1.5;
        $('#taobao_poker_small_'+x[i]).css('top', (x[0]-108-z)*1.5*poker_height+'px');
        if(i<5){
          $('#taobao_poker_small_'+x[i]).css('left', y-3-(x[0]-108)*4-(i-1)*12+'%');
        }
        if(i>4 && i<9){
          $('#taobao_poker_small_'+x[i]).css('left', y-3-(x[0]-108)*4+11-(i-5)*12+'%');
        }
        if(i>8 && i<13){
          $('#taobao_poker_small_'+x[i]).css('left', y-3-(x[0]-108)*4+22-(i-9)*12+'%');
        }
        if(i>12){
          $('#taobao_poker_small_'+x[i]).css('left', y-3-(x[0]-108)*4+33-(i-13)*12+'%');
        }
      }
    }

    poker_sort(left_2, 0, 0)
    poker_sort(left_3, 0, 0)
    poker_sort(left_4, 0, 0)

    poker_sort(right_2, 53, 1)
    poker_sort(right_3, 53, 1)
    poker_sort(right_4, 53, 1)
  }

  //click and sort
  $('#taobao_sort').click(function(){
    change_layout();
    $('.poker_title').fadeIn('slow');

    $(window).resize(function(){
      var top = $('#taobao_poker_small_0').css('top');
      if(top === '0px'){
        return false
      }else{
        change_layout();
      }
    })
  });

  //click and reset
  $('#taobao_reset').click(function(){
    $('.movetop').css('transition', 'top 0.3s, left 0.3s');
    $('.poker_title').fadeOut('slow');
    for(var i=0;i<108;i++){
      $('#taobao_poker_small_'+i).css('left', '0px').css('top', '0px').css('margin-right','-6.265%');
    }
  });

  // poker sort move top when hover
  function move(x, y){
    return function(){
      $('.movetop').css('transition', 'top 0s, left 0s');
      var element = document.getElementById('taobao_poker_small_' + x);
      var distance=element.offsetTop;
      $('#taobao_poker_small_'+x).css('top', distance + y + 'px')
    }
  }

  for (var i=0; i<108; i++){
    $('#taobao_poker_small_'+i).mouseenter(move(i, -48));
    $('#taobao_poker_small_'+i).mouseleave(move(i, 48))
  }

  // poker sort title
  var poker_title = ['', 'Bottom-Up', 'Alibaba', '', '', 'Top-Down', 'Party Policy', '', 'Logistics', 'Taobao Village', 'Propaganda', 'Taobao Store', 'Urbanization', 'City', 'Great Leap Forward', 'Statistics', 'Taobao Store', 'Transaction Map', 'Transaction Map', 'Taobao Store Owner', 'New Village House', 'House Plan', 'House Facade', 'New Village Planning', 'Taobao Store Owner', 'Delivery', 'Taobao Industrial Chain', 'Taobao Industrial Chain', 'New Village Planning', 'New Socialist Countryside', 'New Socialist Countryside', 'Young Migrant Worker']

  for(var i=0; i<4; i++){
    $('.poker_title').append(
      '<div class="poker_row" id="row_'+i+'"><div class="row_'+i+'_left"><p id="title_'+i*8+'"></p><p id="title_'+(i*8+1)+'"></p><p id="title_'+(i*8+2)+'"></p><p id="title_'+(i*8+3)+'"></p></div><div class="row_'+i+'_right"><p id="title_'+(i*8+4)+'"></p><p id="title_'+(i*8+5)+'"></p><p id="title_'+(i*8+6)+'"></p><p id="title_'+(i*8+7)+'"></p></div></div>'
      );
  }

  for(var i=0; i<32; i++){
    if (i===0 || i===3 || i===4 || i===7){
    }else{
      $('#title_'+i).append(poker_title[i]);
    }
  }

  // poker shuffle
  var original = [];
  for (var i=0; i<108; i++){
    original.push(i);
  }

  var shuffle = [];
  for (var i=0; i<108; i++){
    shuffle.push(i);
  }
  shuffle.sort(function() {
   return 0.5 - Math.random()
  });


  function shuffle_append (x,y,z){
    for(var i=x; i<y; i++){
      $('.shuffle_'+z).append('<img id="shuffle_front_'+i+'" src="../img/project/taobao/poker/small/'+ shuffle[i] +'.png"/><img class="poker_back_cover" id="shuffle_back_'+i+'" src="../img/project/taobao/poker/small/back_e.png"/>');
      $('#shuffle_front_'+i).css('margin-right', '-16%');
    }
  }

  shuffle_append (0, 27, 'top');
  shuffle_append (27, 54, 'right');
  shuffle_append (54, 81, 'bottom');
  shuffle_append (81, 108, 'left');

  //poker backcove fadeout after clicked
  function poker_backcover_fadeout(m){
    $('#shuffle_back_'+m).click(function(){
      $(this).css('opacity', '0');
    });
    $('#shuffle_front_'+m).click(function(){
      $('#shuffle_back_'+m).css('opacity', '0');
    });
  }

  function poker_fade(m){
    return poker_backcover_fadeout(m);
  }

  (function() {
    for(var i=0; i<108; i++){
      $('#shuffle_back_'+i).click(onSlideshowStartClick.bind(null, shuffle)).click(poker_fade(i));
      $('#shuffle_front_'+i).click(onSlideshowStartClick.bind(null, shuffle)).click(poker_fade(i));
      var front = $('#shuffle_front_' + i);
      var back = $('#shuffle_back_' + i);
      var pokerId = shuffle[i];
      front.data('poker-id', pokerId);
      back.data('poker-id', pokerId);
    }
  })();

  //showdown all pokers when clicked
  $('#taobao_showdown').click(function(){
    for(var i=0; i<108; i++){
      $('#shuffle_back_'+i).css('opacity', '0');
    }
  });

  //poker shuffle
  function shuffle_change_src(index) {
    var front = $('#shuffle_front_' + index);
    var back = $('#shuffle_back_' + index);
    var pokerId = shuffle[index];
    front.attr('src', '../img/project/taobao/poker/small/' + pokerId + '.png');
    front.data('poker-id', pokerId);
    back.data('poker-id', pokerId);
  }

  $('#taobao_shuffle').click(function(){
    shuffle.sort(function(){
      return 0.5 - Math.random()
    });
    for(var i=0; i<108; i++){
      $('#shuffle_back_'+i).css('opacity', 1);
      $('#shuffle_front_'+i).fadeOut('slow').delay(800).queue(
        shuffle_change_src.bind(null, i)
      ).dequeue().fadeIn('slow');
    }
  });

  //poker disclose for each party when clicked
  function poker_disclose(startnumber, endnumber, triggername){
    $(triggername).mouseenter(function(){
      for(var i=startnumber; i<endnumber; i++){
        $('#shuffle_front_'+i).css('top', '-48px')
      }
    });
    $(triggername).mouseleave(function(){
      for(var i=startnumber; i<endnumber; i++){
        $('#shuffle_front_'+i).css('top', '0px')
      }
    });
    $(triggername).click(function(){
      for(var i=startnumber; i<endnumber; i++){
        $('#shuffle_back_'+i).css('opacity', 0)
      }
    });
  }

  poker_disclose(0, 27, '#poker_taobao')
  poker_disclose(27, 54, '#poker_buyer')
  poker_disclose(54, 81, '#poker_party')
  poker_disclose(81, 108, '#poker_seller')

  //floating trigger circles scroll and relocate based on window resize
  $(window).scroll(function(){
    var scrollHeight = $(window).scrollTop();
    var taobao_poker_height = $('.taobao_poker').height();
    if(scrollHeight>2760 && scrollHeight<3540+taobao_poker_height){
      $('.taobao_trigger_1').fadeIn('slow');
    }else{
      $('.taobao_trigger_1').fadeOut('slow');
    };
    if(scrollHeight>3540+taobao_poker_height && scrollHeight<4440+taobao_poker_height){
      $('.taobao_trigger_2').fadeIn('slow');
    }else{
      $('.taobao_trigger_2').fadeOut('slow');
    }
  });


  // slideshow image append
  for(var x=0;x<108;x++){
    $('.taobao_slide_img').append(
      '<img id="taobao_poker_big_' + x + '" src="../img/project/taobao/poker/big/' + x +'.png"/>');
  };

  // taobao poker slideshow
  var slideshowIndex =0;
  function onSlideshowStartClick(pokerIds, event) {
    currentPokerIds = pokerIds;
    var id = $(event.target).data('poker-id');
    slideshowIndex = pokerIds.indexOf(id);
    $('body, html').css('overflow', 'hidden');
    $('.taobao_slide_img img').hide();
    $('.taobao_slide_container').show();
    $('#taobao_poker_big_'+id).fadeIn('slow');

    // slide responsive to window, initial and resize
    function slide_center(){
      var windowHeight = $(window).height();
      var taobaoSlideHeight = $('.taobao_slide').height();
      if(windowHeight-taobaoSlideHeight>0){
        $('.taobao_slide').css('margin-top', (windowHeight-taobaoSlideHeight)*0.5+'px');
      }else{
        $('.taobao_slide').css('margin-top', 0);
      }
    }

    slide_center();

    $(window).resize(function(){
      var windowHeight = $(window).height();
      var taobaoSlideHeight = $('.taobao_slide').height();
      if(windowHeight-taobaoSlideHeight>0){
        $('.taobao_slide').css('margin-top', (windowHeight-taobaoSlideHeight)*0.5+'px');
      }else{
        $('.taobao_slide').css('margin-top', 0);
      }
    });

    // arrow location responsive to window resize, initial and resize
    var taobaoSlideWidth = $('.taobao_slide').width();
    $('#taobao_arrow_right').css('margin-left', (taobaoSlideWidth-12)+'px');
    $(window).resize(function(){
      var taobaoSlideWidth = $('.taobao_slide').width();
      $('#taobao_arrow_right').css('margin-left', (taobaoSlideWidth-12)+'px');
    });
  }

  var currentPokerIds;

  function taobao_slide_prev() {
    if (slideshowIndex === 0) {
      slideshowIndex = 107;
      $('.taobao_slide_img img').hide();
      $('#taobao_poker_big_'  + currentPokerIds[slideshowIndex]).fadeIn();
    } else {
      slideshowIndex--;
      $('.taobao_slide_img img').hide();
      $('#taobao_poker_big_'  + currentPokerIds[slideshowIndex]).fadeIn('slow');
    }
  }

  function taobao_slide_next() {
    if (slideshowIndex === 107) {
      slideshowIndex = 0;
      $('.taobao_slide_img img').hide();
      $('#taobao_poker_big_'  + currentPokerIds[slideshowIndex]).fadeIn();
    } else {
      slideshowIndex++;
      $('.taobao_slide_img img').hide();
      $('#taobao_poker_big_'  + currentPokerIds[slideshowIndex]).fadeIn('slow');
    }
  }

  //poker slideshow
  for(var i=0;i<108;i++){
    $('#taobao_poker_small_'+i).click(onSlideshowStartClick.bind(null, original));
    var small = $('#taobao_poker_small_' + i);
    var pokerId = original[i];
    small.data('poker-id', pokerId);
  }

  $('#taobao_arrow_left').click(taobao_slide_prev);
  $('#taobao_arrow_right').click(taobao_slide_next);

  // esc key to end slideshow, escape key maps to keycode `27`
  $(document).keyup(function(e){
    if (e.keyCode == 27) {
      $('.taobao_slide_container').hide();
    }
  });

  // close the slideshow
  $('.taobao_close').click(function(){
    $('body, html').css('overflow', 'auto');
    $('.taobao_slide_container').hide();
  });
});
