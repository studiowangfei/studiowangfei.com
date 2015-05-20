$(document).ready(function(){
  $(window).on('beforeunload', function() {
    $(window).scrollTop(0);
  });

  $('#scroll').click(function(){
    $('body, html').animate({ scrollTop: 640 }, 'slow');
  });

  $(window).resize(function(){
    map_resize();
  });

  //control the proportion of map
  function map_resize(){
    var map_width = $('#taobao_map_canvas_1').width();
    $('#taobao_map_canvas_1, #taobao_map_canvas_2').css('height', map_width*0.67+'px');
  }
  map_resize();

  //draw circles to represent transactions
  /*function month_circle(a){
    $('.taobao_double11_container').append(
      '<div class="taobao_double11_month" id="taobao_double11_'+a+'"></div>'
    );
    for (var i=1; i<31; i++){
      $('#taobao_double11_'+a).append(
        '<div class="taobao_circle_container"><div id="taobao_double11_'+a+'_'+i+'"></div></div>'
        );
      var number_wanted = double_11[a]['Day_2013-11-'+i]*3;
      var color_wanted;
      if(a === 0){
        color_wanted = '#afcfab'
      }else if (a === 1){
        color_wanted = '#fb79cf'
      }else if (a === 2){
        color_wanted = '#bcaabb'
      }else if (a === 3){
        color_wanted = '#ca43cb'
      }else if (a === 4){
        color_wanted = '#ca05ae'
      }else if (a === 5){
        color_wanted = '#cabcbc'
      }else if (a === 6){
        color_wanted = '#caaaab'
      }else if (a === 7){
        color_wanted = '#be96ae'
      }else if (a === 8){
        color_wanted = '#dd73de'
      }else if (a === 9){
        color_wanted = '#d5d3cb'
      }
      var opacity_wanted;
      var stroke_wanted;
      if(i === 11){
        opacity_wanted = 1;
        stroke_wanted = '2px solid blue'
      }else{
        opacity_wanted = 0.3;
        stroke_wanted = '0px solid red'
      }

      $('#taobao_double11_'+a+'_'+i)
      .css('width', number_wanted+'px')
      .css('height', number_wanted+'px')
      .css('border-radius', number_wanted+'px')
      .css('border', stroke_wanted)
      .css('margin-top', (-0.5)*number_wanted+'px')
      .css('background-color', color_wanted)
      .css('opacity', opacity_wanted)
      .css('margin-left', -(number_wanted-32)*0.5+'px')
      .css('margin-top', -(number_wanted-32)*0.5+'px')
    }
  }

  for (var a=0; a<10; a++ ){
    month_circle(a)
  }*/

});

//google map api setting
function initialize(){
  // Create an array of styles.
  var styles = [{"featureType":"water","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#000000"},{"saturation":0},{"lightness":20}]},{"featureType":"all","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":0}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"visibility":"off"},{"color":"#000000"},{"hue":"#000000"},{"lightness":50}]},{"featureType":"landscape.natural","elementType":"all","stylers":[{"visibility":"on"},{"color":"#000000"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"saturation":0}]},{"featureType":"administrative.province","elementType":"labels","stylers":[{"visibility":"on"},{"color":"#b0b0b0"},{"weight":0.1}]},{"featureType":"administrative.province","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#e3e3e3"},{"weight":0.5}]},{"featureType":"administrative.locality","elementType":"all","stylers":[{"visibility":"on"},{"color":"#a8a8a8"},{"weight":0.1}]},{"featureType":"administrative.country","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#000000"},{"weight":0.5}]}]

  // Create a new StyledMapType object, passing it the array of styles,
  // as well as the name to be displayed on the map type control.
  var styledMap = new google.maps.StyledMapType(styles,
    {name: "Taobao Village Demo"});

  // Create a map object, and include the MapTypeId to add
  // to the map type control.

  var mapOptions = {
    zoom: 5,
    center: new google.maps.LatLng(32.517768, 113.240538),
    disableDefaultUI: true,
    streetViewControl: false,
    zoomControl: true,
    panControl: true,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    }
  };
  var map_1 = new google.maps.Map(document.getElementById('taobao_map_canvas_1'),
    mapOptions);
  var map_2 = new google.maps.Map(document.getElementById('taobao_map_canvas_2'),
    mapOptions);
  //Associate the styled map with the MapTypeId and set it to display.
  map_1.mapTypes.set('map_style', styledMap);
  map_1.setMapTypeId('map_style');
  map_2.mapTypes.set('map_style', styledMap);
  map_2.setMapTypeId('map_style');

  // store buyer marker for event listener reference
  var buyer_marker = [];
  //draw buyer markers
  for (var i=0; i<buyers.length; i++){
    var buyerLatLng = new google.maps.LatLng(buyers[i].buyerLatitude, buyers[i].buyerLongitude);

    buyer_marker[i] = new google.maps.Marker({
      position: buyerLatLng,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: '#d3d3d3',
        fillOpacity: 0.75,
        scale: buyers[i].包裹数 *3,
        strokeColor: 'white',
        strokeWeight: 0,
      },
      draggable: false,
      map: map_1
    });

    // buyer markers on map_2
    buyer_marker[i] = new google.maps.Marker({
      position: buyerLatLng,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: '#e3e3e3',
        fillOpacity: 0,
        scale: buyers[i].包裹数 *3,
        strokeColor: 'white',
        strokeWeight: 0,
        zIndex:-99
      },
      draggable: false,
      map: map_2
    });
  }

  // store village marker for event listener reference
  var village_marker =[];
  // draw village marker
  for(var i=0; i<village.length; i++){
    var villageLatLng = new google.maps.LatLng(village[i].latitude, village[i].longitude);

    village_marker[i] = new google.maps.Marker({
      position: villageLatLng,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: 'blue',
        fillOpacity: 0.75,
        scale: village[i].sqrtNumber*0.5,
        strokeColor: 'white',
        strokeWeight: 0,
      },
      draggable: false,
      map: map_1
    });
  }

  // store transaction path for event listener reference
  var linePath =[];

  // draw transaction paths
  for(var i=0;i<buyers.length;i++){
    var lineCoordinates = [
      new google.maps.LatLng(buyers[i].buyerLatitude,buyers[i].buyerLongitude),
      new google.maps.LatLng(buyers[i].sellerLatitude,buyers[i].sellerLongitude),
    ];
    var lineColor;
    var lineOpacity;
    var pathZIndex;
    if (buyers[i].淘宝村 === '军埔村'){
      lineColor = '#00933C'; lineOpacity = 0.5; pathZIndex=1
    }else if (buyers[i].淘宝村 === '灶美村'){
      lineColor = '#007AF2'; lineOpacity = 0.5; pathZIndex=1
    }else if (buyers[i].淘宝村 === '青岩刘村'){
      lineColor = '#FCCC0A'; lineOpacity = 0.5; pathZIndex=3
    }else if (buyers[i].淘宝村 === '湾头村'){
      lineColor = '#EE352E'; lineOpacity = 0.5; pathZIndex=2
    }else if (buyers[i].淘宝村 === '白牛村'){
      lineColor = '#ff00ff'; lineOpacity = 0.5; pathZIndex=4
    }

    linePath[i] = new google.maps.Polyline({
      path: lineCoordinates,
      geodesic: true,
      strokeColor: lineColor,
      strokeOpacity: 0.65,
      strokeWeight: buyers[i].包裹数 * 3,
      zIndex: pathZIndex
    });
    linePath[i].setMap(map_1);
  }

  //info window of transaction path, content and control
  var pathInfoLat;
  var pathInfoLng;
  var pathInfowindow;
  var prev_pathInfowindow = false;
  function pathInfoWindowOpen(i){
    return function(){
      var buyerPosition = new google.maps.LatLng(pathInfoLat,pathInfoLng);
      var string = '<div class="taobao_map_infowindow">'+
      buyers[i].淘宝村 + ' -----> ' + buyers[i].买家所在省 + buyers[i].买家所在城市+
      ' (Transaction Index: ' + buyers[i].包裹数 + ' )'
      '</div>';

      pathInfowindow = new google.maps.InfoWindow({
        position: buyerPosition,
        content: string,
        disableAutoPan: false
      });

      //track and close last-opened info window
      if(prev_pathInfowindow){
        prev_pathInfowindow.close();
      }
      prev_pathInfowindow = pathInfowindow;
      pathInfowindow.open(map_1, linePath[i]);
    }
  }

  for(var i=0; i<buyers.length; i++){
    linePath[i].addListener('mouseover', pathInfoWindowOpen(i));
  }

  //get the lat lnt of mouse cursor
  google.maps.event.addListener(map_1, 'mousemove', function (event){
    displayCoordinates(event.latLng);
  });

  function displayCoordinates(pnt) {
    pathInfoLat = pnt.lat();
    pathInfoLat = pathInfoLat.toFixed(4); // 4 decimal numbers of lat lng
    pathInfoLng = pnt.lng();
    pathInfoLng = pathInfoLng.toFixed(4);
  }

  // map_2 draw marker
  var double_11_marker =[];
  for(var i=0; i<double_11.length; i++){
    var villageLatLng = new google.maps.LatLng(double_11[i].latitude, double_11[i].longitude);
    var villageColor;
    if (double_11[i].village === '里仁洞村'){
      villageColor = '#2850AD'
    }else if (double_11[i].village === '顾家村'){
      villageColor = '#6E3219'
    }else if (double_11[i].village === '湾头村'){
      villageColor = '#00933C'
    }else if (double_11[i].village === '军埔村'){
      villageColor = '#FF6319'
    }else if (double_11[i].village === '白牛村'){
      villageColor = '#6CBE45'
    }else if (double_11[i].village === '东风村'){
      villageColor = '#996633'
    }else if (double_11[i].village === '堰下村'){
      villageColor = '#FCCC0A'
    }else if (double_11[i].village === '灶美村'){
      villageColor = '#EE352E'
    }else if (double_11[i].village === '北山村'){
      villageColor = '#B933AD'
    }else if (double_11[i].village === '西岙村'){
      villageColor = '#00A1DE'
    }

    double_11_marker[i] = new google.maps.Marker({
      position: villageLatLng,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: villageColor,
        fillOpacity: 0.75,
        scale: double_11[i]['Hour_0']*25,//double_11[i]['Day_2013-11-1']*5,
        strokeColor: 'white',
        strokeWeight: 0.5,
        zIndex:2
      },
      draggable: false,
      map: map_2
    });
    animateMarker(i);
  }

  // animation for month
  function animateMarker(a){
    var y;
    var b = 0;
    window.setInterval(function(){
      var x = double_11_marker[a].get('icon');
      y=double_11[a]['Hour_'+(b)]*25;
      b=b+1;
      if(b<23){x.scale = y;
        double_11_marker[a].set('icon', x);
      }else{
        b=0;
      }
    }, 200);
  }

  // map_2 info window content and control
  var infowindow;
  function infoWindowOpen(i){
    return function(){
      var string = '<div class="taobao_map_infowindow"><div id="village_name">'+
      double_11[i].village+'</div>'+
      '<div class="village_province">Province: '+
      double_11[i].province+'</div>'+
      '<div class="village_number">Taobao store number: '+
      double_11[i].storeNumber+'</div>'+
      '<div class="village_description">'+
      '</div>';
      infowindow = new google.maps.InfoWindow({
        content: string,
        disableAutoPan: false
      });
      infowindow.open(map_2, double_11_marker[i]);
    }
  }

  function infoWindowClose(){
    return function(){
      infowindow.close();
    }
  }

  // marker event and listener control
  for(var i=0; i<double_11.length; i++){
    double_11_marker[i].addListener('mouseover', infoWindowOpen(i));
    double_11_marker[i].addListener('mouseout', infoWindowClose());
  }

  // Load a GeoJSON from the myjason.com, supporting cross-domain
  /*map_2.data.loadGeoJson('https://api.myjson.com/bins/1s3mt');
  map_2.data.loadGeoJson('https://api.myjson.com/bins/lgwt');

  //data layer style
  var geoLayerStyle = {
    fillColor: '#c3c3c3',
    fillOpacity: 0.5,
    strokeWeight: 3,
    strokeColor: '#515151',
    strokeOpacity: 0,
    zIndex:1
  }
  map_2.data.setStyle(geoLayerStyle);*/

}
google.maps.event.addDomListener(window, 'load', initialize);
