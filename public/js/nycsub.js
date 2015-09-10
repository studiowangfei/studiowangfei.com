$(document).ready(function(){

  //resize all related items when window change
  $(window).resize(function(){
    travelMap_resize();
    map_resize();
  });

  //left-bar appear and fixed after certain scroll
  $(window).scroll(function(){
    var scrollHeight = $(window).scrollTop();
    var nycsub_flipper_height = $('.nycsub').height();
    if(scrollHeight>4120 && scrollHeight<3980+nycsub_flipper_height){
      $('.nycsub_lines').fadeIn('slow');
    }else{
      $('.nycsub_lines').fadeOut('slow');
    }
  });

  //flipper img append, using sprite
  for(var i=0;i<60;i++){
    $('.nycsub').append('<div class="nycsub_flipper" id="nycsub_flipper_'+i+'"><div class="nycsub_front"></div><div class="nycsub_back" id="nycsub_back_'+ i +'"></div></div>');
    $('#nycsub_flipper_'+i+' .nycsub_front').css('background-image', 'url("../img/project/nycsub/riders/nycsub_sprite_front.png")').css('background-repeat','no-repeat').css('background-position', -140*i+'px 0px');
    $('#nycsub_flipper_'+i+' .nycsub_back').css('background-image', 'url("../img/project/nycsub/riders/nycsub_sprite_back.png")').css('background-repeat','no-repeat').css('background-position', -140*i+'px 0px');
  }

  //subway line sort
  var line_all = [];
  for (var i=0; i<60; i++){
    line_all.push(i)
  }

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
    $('#nycsub_back_'+linename[i]).css('box-shadow', '0px 4px 1px'+colorHex);
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
  //boxShadow(nycsub_g, '#6CBE45');
  //boxShadow(nycsub_s, '#A7A9AC');

  // sub lines flip
  // test if a sub line already flipped
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
  }

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

  //scroll down to map
  $('#nycsub_down').click(function(){
    var fullHeight = $('.outer-container').height();
    var mapHeight = $('#nycsub_map-canvas').height();
    $('body, html').animate({ scrollTop: fullHeight-mapHeight-360}, 'slow');
  });

  //map fullscreen and exit
  $('#map_fullscreen').click(function(){
    scrollHeight = $(window).scrollTop();
    $('#map_close, .nycsub_map_scale_fullscreen').css('display','initial');
    $('body, html').css('overflow', 'hidden');
    $('.nycsub_map_container').show();
    $('#nycsub_map-canvas')
    .css('height', '100%')
    .css('z-index','10')
    .css('position', 'fixed');
  });

  $('#map_close').click(function(){
    $('#map_close, .nycsub_map_scale_fullscreen').css('display', 'none');
    $('body, html').css('overflow', 'auto');
    $('.nycsub_map_container').hide();
    $('#nycsub_map-canvas')
    .css('position', 'relative')
    .css('z-index','1');
    map_resize();
  });

  // travel map slideshow
  for(var x=0;x<60;x++){
    $('.nycsub_slide_img').append(
      '<img id="nycsub_ridermap_big_' + x + '" src="../img/project/nycsub/riders/b_black/' + x +'.png"/>');
  };

  var travelMapIndex =0;
  function nycsub_slideshow(id){
    return function(){
      scrollHeight = $(window).scrollTop();
      travelMapIndex = id;
      $('body, html').css('overflow', 'hidden');
      $('.nycsub_slide_img img').hide();
      $('.nycsub_slide_container').show();
      $('#nycsub_ridermap_big_'+id).fadeIn('slow');
      travelMap_resize();
    };
  };

  function nycsub_slide_prev(){
    if (travelMapIndex === 0) {
        travelMapIndex = 59;
        $('.nycsub_slide_img img').hide();
        $('#nycsub_ridermap_big_'  + travelMapIndex).fadeIn();
    } else {
        travelMapIndex--;
        $('.nycsub_slide_img img').hide();
        $('#nycsub_ridermap_big_'  + travelMapIndex).fadeIn('slow');
    }
    travelMap_resize();
  };

  function nycsub_slide_next(){
    if (travelMapIndex === 59) {
        travelMapIndex = 0;
        $('.nycsub_slide_img img').hide();
        $('#nycsub_ridermap_big_'  + travelMapIndex).fadeIn();
    } else {
        travelMapIndex++;
        $('.nycsub_slide_img img').hide();
        $('#nycsub_ridermap_big_'  + travelMapIndex).fadeIn('slow');
    }
    travelMap_resize();
  };

  //travel map slideshow resize
  function travelMap_resize(){
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();
    var slideHeight = $('.nycsub_slide').height();
    if(windowHeight-slideHeight>0){
      $('.nycsub_slide').css('margin-top', (windowHeight-slideHeight)*0.5+'px');
    }else{
      $('.nycsub_slide').css('margin-top', '48px');
    }
    $('#nycsub_arrow_left, #nycsub_arrow_right').css('margin-top', (slideHeight-72)*0.5+'px');
  }

  for(var y=0;y<60;y++){
    $('#nycsub_back_'+y).click(nycsub_slideshow(y));
  }

  $('#nycsub_arrow_left').click(nycsub_slide_prev);
  $('#nycsub_arrow_right').click(nycsub_slide_next);
  $('.nycsub_slide_img img').click(nycsub_slide_next);

  // escape key maps to keycode `27`
  $(document).keyup(function(e) {
    if (e.keyCode == 27) {
      $('#map_close, .nycsub_map_scale_fullscreen').css('display', 'none');
      $('.nycsub_slide_container').hide();
      $('.nycsub_map_container').hide();
      $('#nycsub_map-canvas')
      .css('position', 'relative')
      .css('z-index','1');
      map_resize();
    }
  });

  $('.nycsub_close').click(function(){
    $('body, html').css('overflow', 'auto');
    $('.nycsub_slide_container').hide();
  });

  //control the proportion of map
  function map_resize(){
    var map_width = $('#nycsub_map-canvas').width();
    var map_indicator = $('.nycsub_map_container').css('display');
    if(map_indicator === "none"){
      $('#nycsub_map-canvas').css('height', map_width*0.6875+'px');
    }
  }
  map_resize();
});


//google map api setting
var map;
function initialize() {

// Create an array of styles.
var styles = [{"featureType":"water","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#515151"},{"lightness":30}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"on"},{"color":"#ffffff"}]},{"featureType":"all","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"weight":0.1},{"lightness":-100}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ffffff"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#808080"},{"hue":"#000000"},{"lightness":50}]},{"featureType":"landscape.natural","elementType":"all","stylers":[{"visibility":"on"},{"color":"#ffffff"}]}
];

  // Create a new StyledMapType object, passing it the array of styles,
  // as well as the name to be displayed on the map type control.
  var styledMap = new google.maps.StyledMapType(styles,
    {name: "NYC Subway Ridership Viz"});

  // Create a map object, and include the MapTypeId to add
  // to the map type control.

  var mapOptions = {
    zoom: 14,
    center: new google.maps.LatLng(40.757552,-73.969055),
    disableDefaultUI: true,
    streetViewControl: false,
    zoomControl: true,
    panControl: true,
    mapTypeControlOptions: {
    mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    }
  };
  var map = new google.maps.Map(document.getElementById('nycsub_map-canvas'),
    mapOptions);

// drawing ridership circle
  var center;
  var radius_total =[];

  for(var i=0; i<stations.length; i++){
    var myLatLng = new google.maps.LatLng(stations[i].Latitude, stations[i].Longitude);

    //color for each line
    function color_index (i){
      var line_index = stations[i].Route;
      if (line_index === "1" || line_index === "2" || line_index === "3"){
        return '#EE352E'
      }else if(line_index === "4" || line_index === "5" || line_index === "6"){
        return '#00933C'
      }else if(line_index === "7"){
        return '#B933AD'
      }else if(line_index === "A" || line_index === "C" || line_index === "E"){
        return '#2850AD'
      }else if(line_index === "B" || line_index === "D" || line_index === "F" || line_index === "M"){
        return '#FF6319'
      }else if(line_index === "N" || line_index === "Q" || line_index === "R"){
        return '#FCCC0A'
      }else if(line_index === "J" || line_index === "Z"){
        return '#996633'
      }else if(line_index === "L"){
        return '#A7A9AC'
      }else if(line_index === "G"){
        return '#6CBE45'
      }else if(line_index === "S"){
        return '#A7A9AC'
      }
    };

    var radius_weekend = new google.maps.Marker({
      position: myLatLng,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: color_index(i),
        fillOpacity: 0.5,
        scale: stations[i].AVSUN_ROOT/5,
        strokeColor: 'gold',
        strokeWeight: 0
      },
      draggable: false,
      map: map
    });

    var radius_weekday = new google.maps.Marker({
      position: myLatLng,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: color_index(i),
        fillOpacity: 0.5,
        scale: stations[i].AVWKDY_ROOT/5,
        strokeColor: 'gold',
        strokeWeight: 0
      },
      draggable: false,
      map: map
    });

    //store markers in an array for later use
    radius_total[i] = new google.maps.Marker({
      position: myLatLng,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: color_index(i),
        fillOpacity: 0.25,
        scale: stations[i].TOTAL_ROOT/50,
        strokeColor: 'black',
        strokeWeight: 0
      },
      draggable: false,
      map: map
    });

    center = new google.maps.Marker({
      position: myLatLng,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: 'white',
        fillOpacity: 1,
        scale: 2,
        strokeColor: 'black',
        strokeWeight: 0
      },
      draggable: false,
      map: map
    });
  }

  var infowindow;
  function infoWindowOpen(x, i){
    return function(){
      var string = '<div class="nycsub_map_infowindow"><div id="station_name">'+
      stations[i].Station_name+'</div>'+
      '<div class="ridership_year">Year: '+
      stations[i].TOTAL+' (*0.01)</div>'+
      '<div class="ridership_weekday">Avg. Weekday: '+
      stations[i].AVWKDY+'</div>'+
      '<div class="ridership_weekend">Avg. Weekend: '+
      stations[i].AVSUN+'</div>'+
      '</div>'
      ;
      infowindow = new google.maps.InfoWindow({
        content: string,
        disableAutoPan: true
      });
      infowindow.open(map, x);
    }
  }

  function infoWindowClose(){
    return function(){
      infowindow.close();
    }
  }

  for(var i=0; i<stations.length; i++){
    radius_total[i].addListener('click', infoWindowOpen(radius_total[i], i));
    radius_total[i].addListener('mouseout', infoWindowClose());
  }


  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');

  //transit layer automatic overlay
  var transitLayer = new google.maps.TransitLayer();
  transitLayer.setMap(map);
  //var trafficLayer = new google.maps.TrafficLayer();
  //trafficLayer.setMap(map);


  //possible animation
  /*function animateMarker(){
    var y = 1;
    window.setInterval(function(){
      var x = radius.get('icon');
      y=y-0.01;
      if(y>0.02){x.fillOpacity = y
      console.log(x.fillOpacity);
      radius.set('icon', x);
      }else{
        y=1;
      }
    }, 50);
  }*/
  //animateMarker();
}

google.maps.event.addDomListener(window, 'load', initialize);





