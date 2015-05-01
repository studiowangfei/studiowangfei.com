$(document).ready(function(){
  $(window).on('beforeunload', function() {
    $(window).scrollTop(0);
  });
  $('#scroll').click(function(){
    $('body, html').animate({ scrollTop: 750 }, 'slow');
  });

  //slideshow image append
  var img_number = 13;
  for(var x=0;x<img_number;x++){
    $('.project_img').append(
      '<img id="project_small_' + x + '" src="../img/project/nycsub/' + x +'_small.jpg"/>'
    );

    $('.project_slide_img').append(
      '<img id="project_big_' + x + '" src="../img/project/nycsub/' + x +'_big.jpg"/>'
    );
  };

  //project slideshow(automatic on page top-right)
  $(".project_img > img:gt(0)").hide();

  setInterval(function(){
    $('.project_img > img:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('.project_img');
  },  3000);


  // slide responsive to window, initial and resize
  function slide_resize(){
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();
    var slideHeight = $('.project_slide').height();
    if(windowHeight-slideHeight>0){
      $('.project_slide').css('margin-top', (windowHeight-slideHeight)*0.5-24+'px');
    }else{
      $('.project_slide').css('margin-top', '48px');
    }
    $('#project_arrow_left, #project_arrow_right').css('margin-top', (slideHeight-72)*0.5+'px');
  };

  $(window).resize(function(){
    slide_resize();
  });

// slideshow
  var slideshowIndex =0;
  function project_slideshow(id){
    return function(){
      slideshowIndex = id;
      $('body, html').css('overflow', 'hidden');
      $('.project_slide_container').show();
      $('.project_slide_img img').hide();
      $('#project_big_'+id).fadeIn('slow');
      slide_resize();
    };
  };


  function project_slide_prev(){
    if (slideshowIndex === 0) {
      slideshowIndex = img_number-1;
      $('.project_slide_img img').hide();
      $('#project_big_'  + slideshowIndex).fadeIn('slow');
    } else {
      slideshowIndex--;
      $('.project_slide_img img').hide();
      $('#project_big_'  + slideshowIndex).fadeIn('slow');
    };
    slide_resize();
  };

  function project_slide_next(){
    if (slideshowIndex === img_number-1) {
      slideshowIndex = 0;
      $('.project_slide_img img').hide();
      $('#project_big_'  + slideshowIndex).fadeIn('slow');
    } else {
      slideshowIndex++;
      $('.project_slide_img img').hide();
      $('#project_big_'  + slideshowIndex).fadeIn('slow');
    };
    slide_resize();
  };

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


  //left-bar appear and fixed after certain scroll
  $(window).scroll(function(){
    var scrollHeight = $(window).scrollTop();
    var nycsub_flipper_height = $('.nycsub').height();
    if(scrollHeight>640 && scrollHeight<400+nycsub_flipper_height){
      $('.nycsub_lines').fadeIn('slow');
    }else{
      $('.nycsub_lines').fadeOut('slow');
    }
  });

  //flipper append
  for(var i=0;i<60;i++){
    $('.nycsub').append('<div class="nycsub_flipper" id="nycsub_flipper_'+i+'"><div class="nycsub_front"><img id="nycsub_front_' +i+ '" src="../img/project/nycsub/riders/a/' + i +'.png"/></div><div class="nycsub_back"><img id="nycsub_back_'+ i+ '" src="../img/project/nycsub/riders/b/' + i +'.png"/></div></div>');
  };


  //subway line sort
  var line_all = [];
  for (var i=0; i<60; i++){
      line_all.push(i)
    };

  var nycsub_123 = [2, 10, 18, 26, 28, 29, 42, 46, 49, 59];
  var nycsub_456 = [7, 8, 25, 32, 34, 41, 44, 48, 54, 58];
  var nycsub_7 = [13];
  var nycsub_ace = [3, 5, 11, 17, 21, 33, 38, 45, 52, 53, 56, 57];
  var nycsub_bdfm = [1, 4, 6, 9, 19, 23, 27, 31, 35, 36, 39, 40, 43, 47, 51];
  var nycsub_nqr =[0, 12, 14, 15, 37, 50];
  var nycsub_jz = [16, 20, 22, 24, 30];
  var nycsub_l = [55];

  // color shadow effect for different sub lines
  function boxShadow (linename, colorHex){
    for (var i=0; i<linename.length; i++){
    $('#nycsub_back_'+linename[i]).css('box-shadow', '0px 5px 0px'+colorHex);
    }
  }

  boxShadow(nycsub_123, '#EE352E');
  boxShadow(nycsub_456, '#00933C');
  boxShadow(nycsub_7, '#B933AD');
  boxShadow(nycsub_ace, '#2850AD');
  boxShadow(nycsub_bdfm, '#FF6319');
  boxShadow(nycsub_nqr, '#FCCC0A');
  boxShadow(nycsub_jz, '#996633');
  boxShadow(nycsub_l, '#A7A9AC');

  // sub lines flip
  // test if a sub line been flipped
  function test1(linename){
    var x = linename[0];
    if($('#nycsub_flipper_'+x).hasClass('nycsub_selected_flipper')){
      return 0
    }else{
      return 1
    }
  }

  // flip all
  $('#nycsub_all').click(function(){
    if ( test1(nycsub_123)+test1(nycsub_456)+test1(nycsub_7)+test1(nycsub_ace)+test1(nycsub_bdfm)+test1(nycsub_nqr)+test1(nycsub_jz)+test1(nycsub_l) === 0){
      for (var i=0; i<line_all.length; i++){
        $('#nycsub_flipper_'+i).removeClass('nycsub_selected_flipper')
      }
    }else{
      for (var i=0; i<line_all.length; i++){
        $('#nycsub_flipper_'+i).addClass('nycsub_selected_flipper')
      }
    }
  });

  // flip each
  function clickFlip (linename){
    var sum_lines = test1(nycsub_123)+test1(nycsub_456)+test1(nycsub_7)+test1(nycsub_ace)+test1(nycsub_bdfm)+test1(nycsub_nqr)+test1(nycsub_jz)+test1(nycsub_l);

    var diff = line_all.filter(function(x) {
     return linename.indexOf(x) < 0
    });

    for (var n=0; n<diff.length; n++){
      var m = diff[n];
      $('#nycsub_flipper_'+m).removeClass('nycsub_selected_flipper');
    };
    console.log(sum_lines);
    if(sum_lines + test1(linename) === 7){
      for (var i=0; i<linename.length; i++){
        var x = linename[i];
        $('#nycsub_flipper_'+x).removeClass('nycsub_selected_flipper');
      }
    }else{
      for (var i=0; i<linename.length; i++){
        var x = linename[i];
        $('#nycsub_flipper_'+x).addClass('nycsub_selected_flipper');
      }
    }
  };


  $('#nycsub_123').click(function(){
    clickFlip(nycsub_123);
  });
  $('#nycsub_456').click(function(){
    clickFlip(nycsub_456);
  });
  $('#nycsub_7').click(function(){
  clickFlip(nycsub_7);
  });
  $('#nycsub_ace').click(function(){
    clickFlip(nycsub_ace);
  });
  $('#nycsub_bdfm').click(function(){
    clickFlip(nycsub_bdfm);
  });
  $('#nycsub_nqr').click(function(){
    clickFlip(nycsub_nqr);
  });
  $('#nycsub_jz').click(function(){
    clickFlip(nycsub_jz);
  });
  $('#nycsub_l').click(function(){
    clickFlip(nycsub_l);
  });



  // travel map slideshow
  /* slideshow images */
  for(var x=0;x<60;x++){
    $('.nycsub_slide_img').append(
      '<img id="nycsub_ridermap_big_' + x + '" src="../img/project/nycsub/riders/b_black/' + x +'.png"/>');
  };

  var slideshowIndex =0;
  function nycsub_slideshow(id){
    return function(){
      slideshowIndex = id;
      $('body, html').css('overflow', 'hidden');
      $('.nycsub_slide_img img').hide();
      $('.nycsub_slide_container').show();
      $('#nycsub_ridermap_big_'+id).fadeIn('slow');

      /* slide responsive to window, initial and resize*/
      var windowHeight = $(window).height();
      var nycsubSlideHeight = $('.nycsub_slide').height();
      $('.nycsub_slide').css('margin-top', (windowHeight-nycsubSlideHeight)*0.5+'px');

      $(window).resize(function(){
        var windowHeight = $(window).height();
        var nycsubSlideHeight = $('.nycsub_slide').height();
        if(windowHeight-nycsubSlideHeight>0){$('.nycsub_slide').css('margin-top', (windowHeight-nycsubSlideHeight)*0.5+'px');
        }else{
          $('.nycsub_slide').css('margin-top', 0);
        }
      });

      /* arrow location responsive to window resize, initial and resize*/
      var nycsubSlideWidth = $('.nycsub_slide').width();
      $('#nycsub_arrow_right').css('margin-left', (nycsubSlideWidth-12)+'px');
      $(window).resize(function(){
        var nycsubSlideWidth = $('.nycsub_slide').width();
        $('#nycsub_arrow_right').css('margin-left', (nycsubSlideWidth-12)+'px');
      });
    };
  };


  function nycsub_slide_prev(){
    if (slideshowIndex === 0) {
        slideshowIndex = 59;
        $('.nycsub_slide_img img').hide();
        $('#nycsub_ridermap_big_'  + slideshowIndex).show();
    } else {
        slideshowIndex--;
        $('.nycsub_slide_img img').hide();
        $('#nycsub_ridermap_big_'  + slideshowIndex).fadeIn('slow');
    }
  };

  function nycsub_slide_next(){
      if (slideshowIndex === 59) {
          slideshowIndex = 0;
          $('.nycsub_slide_img img').hide();
          $('#nycsub_ridermap_big_'  + slideshowIndex).show();
      } else {
          slideshowIndex++;
          $('.nycsub_slide_img img').hide();
          $('#nycsub_ridermap_big_'  + slideshowIndex).fadeIn('slow');
      }
  };

  for(var y=0;y<60;y++){
    $('#nycsub_back_'+y).click(nycsub_slideshow(y));
  };

  $('#nycsub_arrow_left').click(nycsub_slide_prev);
  $('#nycsub_arrow_right').click(nycsub_slide_next);


  $(document).keyup(function(e) {
    if (e.keyCode == 27) {
      $('body, html').css('overflow', 'auto');
      $('.nycsub_slide_container').hide();
    };
  }); // escape key maps to keycode `27`


  $('.nycsub_close').click(function(){
      $('body, html').css('overflow', 'auto');
      $('.nycsub_slide_container').hide();
  });


  /* control the proportion of map*/
  var map_width = $('#map-canvas').width();
  $('#map-canvas').css('height', map_width*0.6875+'px');

  $(window).resize(function(){
    var map_width = $('#map-canvas').width();
    $('#map-canvas').css('height', map_width*0.6875+'px');
  });


});


var map;
function initialize() {

  // Create an array of styles.
  var styles = [
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      { "visibility": "on" },
      { "color": "#0008FF" },
      { "saturation": -54 },
      { "lightness": -42 }
    ]
  },{
    "featureType": "administrative",
    "elementType": "geometry.fill",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "landscape.man_made",
    "elementType": "geometry.fill",
    "stylers": [
      { "hue": "#1100ff" },
      { "color": "#808080" },
      { "lightness": 100 }
    ]
  },{
    "featureType": "poi",
    "elementType": "geometry.fill",
    "stylers": [
      { "visibility": "on" },
      { "color": "#cccccc" }
    ]
  },{
    "featureType": "poi",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "elementType": "labels",
    "stylers": [
      { "hue": "#0033ff" },
      { "color": "#0033ff" },
      { "visibility": "off" }
    ]
  },{
    "featureType": "road.highway",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [
      { "hue": "#ff00e6" },
      { "visibility": "off" }
    ]
  },{
    "featureType": "transit.station.rail",
    "elementType": "labels.icon",
    "stylers": [
      { "visibility": "on" },
      { "hue": "black" },
      { "color": "black" },
      { "lightness": -19 }
    ]
  },{
    "featureType": "landscape.man_made",
    "elementType": "geometry.stroke",
    "stylers": [
      { "visibility": "on" },
      { "hue": "#0800ff" },
      { "color": "#0800FF" }
    ]
  },{
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      { "color": "#808080" },
      { "visibility": "on" },
      { "lightness": 100 }
    ]
  },{
    "featureType": "road",
    "elementType": "geometry.stroke",
    "stylers": [
      { "color": "#808080" },
      { "lightness": 66 }
    ]
  },{
    "featureType": "landscape.natural",
    "stylers": [
      { "visibility": "on" },
      { "color": "#808080" },
      { "lightness": 100 }
    ]
  }
];

  // Create a new StyledMapType object, passing it the array of styles,
  // as well as the name to be displayed on the map type control.
  var styledMap = new google.maps.StyledMapType(styles,
    {name: "TEST"});

  // Create a map object, and include the MapTypeId to add
  // to the map type control.

  var mapOptions = {
    zoom: 17,
    center: new google.maps.LatLng(40.760475, -73.982760),
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    }
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'),
    mapOptions);
  var myLatLng = new google.maps.LatLng(40.760475, -73.982760);

  var marker = new google.maps.Marker({
    position: myLatLng,
    icon: {
      path: google.maps.SymbolPath.CIRCLE,
      fillColor: 'pink',
      fillOpacity: 1,
      scale: 50,
      strokeColor: 'gold',
      strokeWeight: 0
    },
    draggable: false,
    map: map
  });

  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');

  var string = '<h1>hello world, who is there, stand out please</h1>'
  var infowindow = new google.maps.InfoWindow({
      content: string
  });

  marker.addListener('click', function(){
    infowindow.open(map, marker);
  });

  var transitLayer = new google.maps.TransitLayer();
  transitLayer.setMap(map);
  //var trafficLayer = new google.maps.TrafficLayer();
  //trafficLayer.setMap(map);


  function animateMarker(){
    var y = 1;
    window.setInterval(function(){
      var x = marker.get('icon');
      y=y-0.01;
      if(y>0.02){x.fillOpacity = y
      console.log(x.fillOpacity);
      marker.set('icon', x);
      }else{
        y=1;
      }
    }, 50);
  }


  animateMarker();

  /*
  var infowindow = new google.maps.InfoWindow({
      content: contentString (can be a html snippet)
  });

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Uluru (Ayers Rock)'
  });
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });
  */

}


google.maps.event.addDomListener(window, 'load', initialize);


/*
// This example adds a marker to indicate the position
// of Bondi Beach in Sydney, Australia
function initialize() {
  var mapOptions = {
    zoom: 4,
    center: new google.maps.LatLng(-33, 151)
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'),
                                mapOptions);

  var image = 'images/beachflag.png';
  var myLatLng = new google.maps.LatLng(-33.890542, 151.274856);
  var beachMarker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      icon: image
  });
}

google.maps.event.addDomListener(window, 'load', initialize);

https://developers.google.com/maps/documentation/javascript/symbols
*/


/*boxShadow(nycsub_123, '#EE352E');
  boxShadow(nycsub_456, '#00933C');
  boxShadow(nycsub_7, '#B933AD');
  boxShadow(nycsub_ace, '#2850AD');
  boxShadow(nycsub_bdfm, '#FF6319');
  boxShadow(nycsub_nqr, '#FCCC0A');
  boxShadow(nycsub_jz, '#996633');
  boxShadow(nycsub_l, '#A7A9AC');*/
