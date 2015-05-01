$(document).ready(function(){
  $(window).on('beforeunload', function() {
    $(window).scrollTop(0);
  });
  $('#scroll').click(function(){
    $('body, html').animate({ scrollTop: 720 }, 'slow');
  });


  //slideshow image append
  var img_number = 9;
  for(var x=0;x<img_number;x++){
    $('.project_img').append(
      '<img id="project_small_' + x + '" src="../img/project/sfpopos/' + x +'_small.jpg"/>'
    );

    $('.project_slide_img').append(
      '<img id="project_big_' + x + '" src="../img/project/sfpopos/' + x +'_big.jpg"/>'
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

  // escape key maps to keycode '27'
  $(document).keyup(function(e) {
    if (e.keyCode == 27) {
      $('body, html').css('overflow', 'auto');
      $('.project_slide_container').hide();
    };
  });

  $('.project_close').click(function(){
      $('body, html').css('overflow', 'auto');
      $('.project_slide_container').hide();
  });


  // control the proportion of video and map
  function playItemControl(){
    var video_width = $('.sfpopos_video').width();
    $('.sfpopos_video iframe').css('height', video_width*0.655+'px');
  }

  playItemControl();
  $(window).resize(function(){
    playItemControl();
    map_resize();
  });

  //control the proportion of map
  function map_resize(){
    var map_width = $('#sfpopos_map-canvas').width();
    $('#sfpopos_map-canvas').css('height', map_width*0.67+'px');
  }
  map_resize();

});

//google map api setting
var map;
function initialize(){
  // Create an array of styles.
  var styles = [{"featureType": "water", "elementType": "geometry.fill", "stylers": [{ "visibility": "on" }, { "color": "#0008FF" }, { "saturation": -54 }, { "lightness": -42 }]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":21}]},{"featureType":"landscape.man_made","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"weight":0.1},{"lightness":-100}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"on"},{"color":"#ffffff"}]},{"featureType":"all","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":-15}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"visibility":"off"},{"color":"#808080"},{"hue":"#000000"},{"lightness":50}]},{"featureType":"landscape.natural","elementType":"all","stylers":[{"visibility":"on"},{"color":"#ffffff"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#3ba635"},{"saturation":-70},{"lightness":50}]}]
  // Create a new StyledMapType object, passing it the array of styles,
  // as well as the name to be displayed on the map type control.
  var styledMap = new google.maps.StyledMapType(styles,
    {name: "San Francisco POPOS Viz"});

  // Create a map object, and include the MapTypeId to add
  // to the map type control.

  var mapOptions = {
    zoom: 16,
    center: new google.maps.LatLng(37.791117, -122.399004),
    disableDefaultUI: true,
    streetViewControl: false,
    zoomControl: true,
    panControl: true,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    }
  };
  var map = new google.maps.Map(document.getElementById('sfpopos_map-canvas'),
    mapOptions);

  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');

  var popos_marker =[];
  for(var i=0; i<popos.length; i++){
    var myLatLng = new google.maps.LatLng(popos[i].latitude, popos[i].longitude);
    // different color based on quality rating
    var rating_color;
    if (popos[i].quality === 'poor'){
      rating_color = '#b5dea2'
    }else if(popos[i].quality === 'fair'){
      rating_color = '#6CBE45'
    }else if(popos[i].quality === 'good'){
      rating_color = '#4b8530'
    }else {
      rating_color = '#2b4c1b'
    }

    popos_marker[i] = new google.maps.Marker({
      position: myLatLng,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: 'green',
        fillOpacity: 0.5,
        scale: 10,
        strokeColor: 'black',
        strokeWeight: 0
      },
      draggable: false,
      map: map
    });

    /*var center = new google.maps.Marker({
      position: myLatLng,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: 'white',
        fillOpacity: 1,
        scale: 1,
        strokeColor: 'black',
        strokeWeight: 0
      },
      draggable: false,
      map: map
    });*/
  }

  var infowindow;
  function infoWindowOpen(i){
    return function(){
      var string = '<div class="sfpopos_map_infowindow"><div id="popos_address">'+
      popos[i].address+'</div>'+
      '<div class="popos_year">Year: '+
      popos[i].year+'</div>'+
      '<div class="popos_quality">Spatial Quality: '+
      popos[i].quality+'</div>'+
      '<div class="popos_description">'+
      popos[i].description+'</div>'+
      '</div>'
      ;
      infowindow = new google.maps.InfoWindow({
        content: string,
        disableAutoPan: false
      });
      infowindow.open(map, popos_marker[i]);
    }
  }

  for(var i=0; i<popos.length; i++){
    popos_marker[i].addListener('click', infoWindowOpen(i));
  }

  //transit layer automatic overlay
  //var transitLayer = new google.maps.TransitLayer();
  //transitLayer.setMap(map);
  //var trafficLayer = new google.maps.TrafficLayer();
  //trafficLayer.setMap(map);

}

google.maps.event.addDomListener(window, 'load', initialize);


//dataset of popos
var popos = [
{"address":"611 Folsom St.","latitude":37.784918,"longitude":-122.396483,"year":1965,"quality":"fair","description":"This barren plaza, at the outer edge of the ofﬁce district, is built entirely of the same shade of brick — ﬂoor, benches and all. Two rows of plane trees along Folsom Street are the only greenery. It is open at all times and there are two food services nearby.It is often shady. Addition of landscaping would make it more appealing. Needed improvements: landscaping"}, {"address":"Transamerica Redwood Park","latitude":37.795182,"longitude":-122.402216,"year":1972,"quality":"excellent","description":"This urban park, located at the foot of the Transamerica Pyramid is a wonderful surprise. Surrounded by Redwood trees and graced with luscious ferns, the park features a fountain spouting water several feet high, and ﬁgurative bronze sculptures. There are also grassy areas, wooden benches and a concrete stage. Take-out food services are nearby. Closed after ofﬁce hours. "}, {"address":"101 Second St.","latitude":37.788067,"longitude":-122.399207,"year":2000,"quality":"excellent","description":"Minimalist design and sumptuous materials characterize this expansive ﬁve-story greenhouse with two glass fronts that open to Second and Mission Streets. Beige marble walls contrast with black granite ﬂoors in the main space as well as on the mezzanine. Designer café tables and chairs, granite benches, a large painting and a sculpture complete the furnishings. Sometimes there is noontime entertainment. Available 8 a.m. to 6 p.m. Needed improvements: signage on Second St. entrance"}, {"address":"505 Sansome St.","latitude":37.795038,"longitude":-122.401847,"year":1980,"quality":"good","description":"A greenhouse in the lobby of this ofﬁce building faces and connects to Redwood Park. Its two-story glass walls create an airy interior, featuring granite ﬂooring, several paintings and eight tables, each with three to four chairs of beautiful modern design. Two food services are located within the building. Needed improvements: exterior signage, more seating."}, {"address":"555 Mission St.","latitude":37.788484,"longitude":-122.398454,"year":null,"quality":"","description":"Here you will ﬁnd a plaza extending between Mission and Minna Streets, and paved mostly with black granite. A large, playful sculpture dominates this area. On the south side it steps up to a sitting area with wooden benches, blooming ground cover and three large aluminum heads. The last quarter of the plaza towards Minna Street features a grove of Gingko trees with wooden benches underneath. Open at all times. "}, {"address":"Empire Park","latitude":37.792785,"longitude":-122.410557,"year":1988,"quality":"good","description":"From the Commercial Street lunchtime mall the visitor enters this intimate urban garden, occupying the site of a demolished building. The design is symmetrical, with brick planter beds and sitting ledges along both sides and a fountain sculpture at the end of the central axis. Benches and tables with chairs complete the furnishings of this enjoyable space. Needed improvements: Restroom availability."}, {"address":"560 Mission St.","latitude":37.788696,"longitude":-122.399372,"year":null,"quality":"","description":"This urban garden is accessible from Mission and Jessie Streets. Most unusual is a high bamboo grove obscuring the windowless façade of the building next door. From here three long steps, all at sitting height, descend down to a granite covered main area, ﬁlled with tables and chairs. Two delis serve the area. Along Mission Street is a shallow rectangular pool with a tall kinetic sculpture of two large rotating aluminum rings connected to a granite base. Open at all times."}, {"address":"55 2nd Street","latitude":37.788802,"longitude":-122.400318,"year":2002,"quality":"good","description":"After entering a sumptuous marble lobby from Stevenson Street, the indoor park is a few steps up on the left, inside the historic building. There are tables and chairs on wood ﬂooring, and big leather chairs near windows on carpeted areas. Also, notice the potted plants and large array of paintings. Available 8 a.m. to 6 p.m. On the south side of the building there is a snippet descending over diagonal stairs down to Jessie Street, with designer tables and chairs on granite pavement, and planting beds along the boundary of open space."}, {"address":"71 Stevenson Street","latitude":37.78945,"longitude":-122.399808,"year":1983,"quality":"fair","description":"The open space here consists of granite pedstrian walkways underneath the building and connecting Stevenson and Jessie Streets. Portions of the passageways contain tables and chairs with signs indicating that they are for use only by customers of the adjacent café. The open space under the building extends into an urban garden, deﬁned by black granite planters with ledges for sitting and a square, blue-tiled fountain gushing water and surrounded with ﬂowers."}, {"address":"49 Stevenson Street","latitude":37.789717,"longitude":-122.399426,"year":1984,"quality":"fair","description":"The approval of this building called for a pedestrian walkway along Stevenson Street. Most of the area has been fenced off for outdoor table service (with heat lamps) of the adjacent restaurant. A smaller section adjacent to the take-out section of the same restaurant contains a few tables and chairs. While not signed for exclusive use of restaurant patrons there is no signage indicating that it is also available to the general public."}, {"address":"Golden Gate University","latitude":37.789292,"longitude":-122.398982,"year":1972&2002,"quality":"good","description":"A bridge, connecting the Mission Street sidewalk to the deeply recessed entrance to Golden Gate University, has been turned into a snippet. Amenities consist of concrete benches on both sides of the bridge, as well as along part of the Mission Street sidewalk. There is no planting. The space is well used by students and the general public. Open at all times."}, {"address":"Embarcadero Center West","latitude":37.794873,"longitude":-122.397892,"year":1989,"quality":"good","description":"The ﬁrst of the three open spaces here is the conversion of Commercial Street between Sansome & Battery into an exclusive pedestrian walkway. There are small seating areas on the second level and elaborate stairs ﬂanked by narrow waterfalls that bring the second-story walkway to street level at mid-block. The second half of the street has two rows of trees in circular planters with ledges too low to sit on comfortably. Tables and chairs that had been placed between trees have been removed. Also gone are adjacent food services. The second, at the Old Federal Reserve Bank building, consists of the generous steps (snippets) to the historic building from both Battery and Sansome streets. The third, on the south side of Sacramento between Sansome & Battery, is a two-level snippet, west of the ofﬁce building. Grey granite covers the ground level, steps and retaining wall with attached seating ledges. The space also features potted plants and a sculpture as well as moveable tables and chairs, and adjacent food services."}, {"address":"25 Jessie Street","latitude":37.789621,"longitude":-122.398733,"year":1983,"quality":"fair","description":"This small but lovely urban garden is adjacent to Ecker Alley in a two-story forecourt of the building. It is richly planted and has a pleasant water wall and basin whose sound creates its own atmosphere. Nice to look at but not to sit in. The only seating is on shallow steps around the fountain. Open at all times."}, {"address":"100 1st Street","latitude":37.789325,"longitude":-122.397586,"year":1988,"quality":"fair","description":"A staircase from Mission Street leads up to this popular sun terrace. Its main feature is a black granite wall with ﬁssures spouting water into two pools where undulating glass panels evoke waves. The rectangular terrace is designed on a 45-degree grid, featuring many planter beds and terraces forming intimate spaces. Planters with trees, ﬂowers and grass all have ledges at sitting height. Designer café tables and chairs. Deli at foot of stairs. Open at all times."}, {"address":"199 Fremont Street","latitude":37.789952,"longitude":-122.394749,"year":2000,"quality":"excellent","description":"The design of this urban garden is a collaboration among Paul Kos, conceptual sculptor; Robert Hass, poet; and a landscape architect. The garden features Sierra granite: a 86-ton boulder, smaller boulders and rough blocks at sitting height. A Hass poem is engraved on the garden wall. A fountain drips into a circular basin with a “tok … tok … tok” sound evoking the passage of time. The garden opening toward Fremont Street is planted with birch trees. Open at all times."}, {"address":"301 Howard Street","latitude":37.789529,"longitude":-122.394193,"year":1981,"quality":"fair","description":"This small urban garden features a small Art Deco building that once housed a gas station ofﬁce, and was moved here from another site. A food truck has been placed inside it, which together with its gaudy sign destroys the charm of the little pavilion. Tables and chairs are provided and some planting visually shields the space from the adjacent parking area. Open at all times."}, {"address":"221 Main Steet","latitude":37.790413,"longitude":-122.392058,"year":1974,"quality":"fair","description":"This plaza offers four benches in a sea of paving. Another plaza, at the southern portion of the building facing Main St., has concrete benches and retaining walls at a height comfortable for sitting, as well as some greenery. With the addition of planting and tables and chairs it could be converted into a very attractive urban garden."}, {"address":"201 Spear Street","latitude":37.791241,"longitude":-122.391842,"year":1982,"quality":"fair","description":"The walkway from Spear to Steuart Streets and further on to the Gap building widens into an urban garden. It is deﬁned by concrete planting beds, densely planted with camellias and ledges for sitting. The pavement consists of granite cobblestones. Large trees deﬁne the space along Spear Street. In the center stands a life-like sculpture of a man holding a camera as if taking a picture. Open at all times. "}, {"address":"180 Howard Street","latitude":37.790835,"longitude":-122.393372,"year":1980,"quality":"fair","description":"This shady public sitting area in a pedestrian walkway is a continuation of the walkway described above. One side of the walkway abuts an arcade with brick arches and furnished with concrete cubes of sitting height, a few potted plants and a coffee cart. There is another food service around the corner."}, {"address":"160 Spear Street Plaza","latitude":37.791283,"longitude":-122.393561,"year":1983,"quality":"excellent","description":"This urban garden consists of the entrance walkway to the building that widens on both sides to make space for café tables and chairs, a water feature and a large aluminum sculpture. The planting beds against the neighboring buildings have ledges for sitting. Two food services are available, one at the open space entrance, the other inside the building. The space is well used."}, {"address":"135 Main Street","latitude":37.791582,"longitude":-122.394,"year":1982,"quality":"fair","description":"The front courtyard of this building has been enclosed and turned into a building lobby and indoor park. It has several levels deﬁned by glass and metal railings and is furnished with couches on carpets, tables and chairs. There are identical fountains — water running over silver steel — against the side walls, framed by sheets of onyx. There is no exterior signage indicating it can be used by the public, although the lobby attendant gives assurance that it can. The alley behind the ofﬁce building includes benches and a fountain. Open during ofﬁce hours."}, {"address":"One Market Street Plaza","latitude":37.793992,"longitude":-122.394896,"year":1976,"quality":"excellent","description":"The plaza is oriented to the sunny side of the building. A tall hexagonal tower marks the Mission Street entrance of the building and six white masts deﬁne the open space towards the sidewalk. Ample seating and tables are provided. Several food services open to the plaza. Open at all times."}, {"address":"123 Mission Street","latitude":37.791821,"longitude":-122.394574,"year":1986,"quality":"excellent","description":"This urban garden is divided into three successive spaces by white concrete planters with attached ledges at sitting height. The planters are lushly planted with trees, shrubs and ﬂowers. Some sunlight bounces off the building but for the most part it is shady. There are four food services nearby, but no signage. Open at all times. "}, {"address":"201 Mission Street","latitude":37.791437,"longitude":-122.395069,"year":1960,"quality":"good","description":"This urban garden occupies the setbacks along Beale Street — a succession of triangular open spaces formed by concrete planter beds, densely planted, with sitting ledges attached. There are plenty of café tables and moveable chairs. Open at all times."}, {"address":"77 Beale Street","latitude":37.792128,"longitude":-122.396679,"year":1970,"quality":"good","description":"The entry plaza along Beale Street features a water wall, granite planters with Gingko trees and ledges for sitting. Unfortunately, the ledges are a bit too high to sit comfortably. The open space is somewhat intimidating. It could be made more inviting with more landscaping and comfortable seating. Needed improvements: landscaping, seating. There are also two small snippets, one on Mission Street and one on Beale Street, comprising benches alternating with concrete planters in sidewalk recesses."}, {"address":"50 Beale Street","latitude":37.791256,"longitude":-122.396399,"year":1968,"quality":"fair","description":"This rather large urban park fronting on Beale Street is full of trees and bushes. Mostly very shady, in the summer it enjoys some dappled sunshine. It includes a Bechtel Corp. history museum housed in a replica of a private railroad car the Bechtel family lived in at construction sites in the company’s early days. Park open at all times. Museum open 11 a.m. to 2 p.m. on weekdays."}, {"address":"333 Market Street","latitude":37.791609,"longitude":-122.397523,"year":1979&2008,"quality":"fair","description":"Two-tone gray granite pavement and three rectangular planters with some ledges at sitting height are the design elements of this small plaza. The adjacent retail space is for lease, and a café with outdoor tables and chairs would be a welcome addition. Open at all times."}, {"address":"14 Fremont Street","latitude":37.79136,"longitude":-122.397896,"year":1983,"quality":"fair","description":"The open space consists of a wide sitting area in a pedestrian walkway connecting Fremont and First Streets, and furnished with many café tables and chairs — as well as an urban garden with several planting beds with ledges for sitting, more café tables and chairs, and a travertine-clad colonnade extending along First Street. Two food services open to the walkway and garden, which provide shade under plum trees as well as sunshine. Open at all times."}, {"address":"425 Market Street","latitude":37.791187,"longitude":-122.398305,"year":1973,"quality":"excellent","description":"Tucked between highrises, this urban garden is shady but nonetheless a jewel. It is elegantly designed with two kinds of granite, benches, ﬂowers in planters and trees. Visitors sit, relax, people watch, drink coffee from the adjacent café or simply use it as a shortcut from Fremont to Market Street. Open at all times."}, {"address":"525 Market Street","latitude":37.790681,"longitude":-122.399154,"year":1973,"quality":"excellent","description":"This urban garden features a double granite fountain with granite benches in between to enjoy the sight and sound of ﬂowing water. The backside of one of the fountains has a tiered semi- circular planter ﬁlled with bushes and ferns. A continuous metal bench with a planter behind it sheilds the space from the Market Street sidewalk. The adjacent restaurant has placed tables and chairs into the open space. Open at all times. At the back of the urban garden is a set of stairs leading up to an upper-story building lobby. There are some large plaza areas edged with landscaped planters, but no seating. These spaces easily could be turned into a pleasant sun terrace."}, {"address":"555/575 Market Street","latitude":37.78966,"longitude":-122.400436,"year":1965&1975,"quality":"fair","description":"The beautifully landscaped urban garden takes up the space between two highrises. A stylized version of a mountain stream runs through it. Unfortunately this is for visual enjoyment only since access is limited to ofﬁce tenants only. Benches placed at the Market Street entrance and on the circular platform that ﬂoats above the space would make it more enjoyable."}, {"address":"595 Market Street","latitude":37.789341,"longitude":-122.400751,"year":1979,"quality":"poor","description":"The approval of this building called for two triangular entryway plazas. One, at Second and Stevenson Streets, largely has been occupied by a fenced restaurant seating area. Outside, a 10-foot-wide edge of the plaza faces Stevenson Street. It has good sun exposure, and with the addition of benches and landscaping could become a pleasant public sitting area."}, {"address":"One Post Street","latitude":37.78884,"longitude":-122.402715,"year":1969,"quality":"good","description":"Snippets with stand-up tables and square concrete blocks at sitting height next to food services. A few planters with boxwood were created when the arcade of the building was partially enclosed. They are adjacent to the steps around the hexagonal fence of the Montgomery BART station entrance, which are very well used at lunchtime on a sunny day. Open at all times. "}, {"address":"Crocker Galleria - 50 Post Street","latitude":37.789164,"longitude":-122.402979,"year":1982,"quality":"good","description":"There are two rooftop sun terraces here that are open whenever the Galleria is open. One sun terrace is on top of the historic bank building at Montgomery and Post Streets, and is accessed from a staircase on the easterly side of the Galleria’s top ﬂoor or from an elevator at the corner of the bank building.The terrace has ample seating on planter ledges and benches, but no tables. An attractive fountain is out of service. A second sun terrace can be accessed from an obscure staircase in the northwest corner of the Galleria’s top ﬂoor. It is a quiet refuge, offering sunny and shady places, many benches, a trellis and planters. There are many food services in the Galleria. Restrooms are on the third ﬂoor."}, {"address":"Trinity Alley","latitude":37.789975,"longitude":-122.402594,"year":1983,"quality":"good","description":"The adjacent ofﬁce tower converted Trinity Alley into a pedestrian walkway (connecting Bush to Sutter Street) by removing the curb and lining the roadbed with small granite pavers, and adding a narrow plaza by creating narrow platform steps up in the side setback of the building. Five food services open out to the plaza, and have put out chairs and tables during business hours. Open at all times."}, {"address":"Citigroup Center","latitude":37.790446,"longitude":-122.401154,"year":1983,"quality":"excellent","description":"This greenhouse is built into the shell of the 1912 London-Paris Bank building, with a glass roof and two-story arches opening to Sansome and Sutter Streets. The material for the arches, the walls, the entrance steps and the ﬂoor is white marble with additional black marble bands and a round black polished marble fountain in the center. Palm trees and other plants soften the severity of the space. An Art Deco bronze sculpture graces a marble niche. A food service opens to the space and café tables and chairs have been provided. There is also a seating area inside the building lobby. "}, {"address":"1 Bush Street","latitude":37.791048,"longitude":-122.399988,"year":1959,"quality":"excellent","description":"A beautifully designed and maintained urban garden surrounds the ﬁrst postwar high-rise building — a “tower in a park.” It features river rocks embedded in concrete, inlaid with a striking design of bands of grey slate. A fountain sculpture spouts and drips water. The planting consists of cherry, willow and pine trees and evergreen ground cover. The garden lies below street level and resembles a moat. It is for visual enjoyment only; no seating has been provided, the river rocks are hard to walk on and no food service is available. Needed improvements: seating in garden, food service On sunny days the stone walls along the Sansome Street sidewalk (snippets) are well used for lunching and people-watching. Open at all times."}, {"address":"444 Market Street","latitude":37.791382,"longitude":-122.398796,"year":1980,"quality":"poor","description":"This plaza leading to the Market Street building entrance is an extension of the brick sidewalk of Market Street. It has no seating, and except for ﬁve small palm trees in planters, it offers no amenity. Adjacent to Mechanics Plaza. Three food services are nearby. Open at all times."}, {"address":"100 Pine Street","latitude":37.792624,"longitude":-122.398991,"year":1972,"quality":"excellent","description":"This urban garden is tucked between very tall buildings. It’s a quiet little gem of a space, accessible through the lobby to the rear or via an obscure passage off Front Street. Travertine and black granite ﬂooring, an art piece, plants in containers and designer tables and chairs. Food services on site. Receives no sun, but light colored materials and reﬂected light stave off gloom. Café closes at 3 p.m., building and garden at 6:30 p.m."}, {"address":"101 California Street","latitude":37.792738,"longitude":-122.39811,"year":1982,"quality":"excellent","description":"Three tall, triangular, stepped pyramids, built around the garage exhaust vents, dominate this urban garden within a large plaza. The steps are clad with granite, and are used for seating and as planting beds. There is a granite fountain, with gushing water creating a pleasant sound. Two restaurants on the building’s ground ﬂoor open to the plaza with outdoor seating. Open at all times. Across the street, at 100 California Street, large planters have been placed on the sizable building setbacks. With some seating, the space could be easily converted into an attractive urban garden."}, {"address":"One California Street","latitude":37.793414,"longitude":-122.396725,"year":1970,"quality":"excellent","description":"The snippets around this building feature large stone planters of triangular, rectangular and round shapes along Market and California streets, some with trees and benches. The pavement consists of green stone and rose-colored granite. The café in the building ﬁlls some of the open space with its tables and chairs. Open at all times."}, {"address":"50 California Street","latitude":37.794132,"longitude":-122.397361,"year":1972,"quality":"excellent","description":"This snippet, occupying the building setback, is an extension of the design and material from the open space across the street. Variously shaped planters, with ledges at sitting height, have been placed on rose-colored granite and green stone pavement. A small café with outdoor seating enlivens the space. Open at all times. "}, {"address":"150 California Street","latitude":37.793659,"longitude":-122.39851,"year":2000,"quality":"good","description":"The sign near the building entrance indicating the existence of a publicly accessible sun terrace is small, dark and very difﬁcult to read. The lobby guard will ask visitors their purpose but will allow the public to pass. The sun terrace is oriented toward Front Street, has tables and chairs, plants and public art. It also offers sunny, shady and wind protected areas. Open 9 a.m. to 6 p.m."}, {"address":"200 California Street","latitude":37.793584,"longitude":-122.39903,"year":1990,"quality":"fair","description":"This public sitting area in a pedestrian walkway was created in an extension of the sidewalk. It has a rectangular planting bed with ledges that are a bit too high for sitting comfortably, and features the Hawaiian, a ﬁgurative bronze sculpture. The planting bed replaced the benches and other pieces of furniture of the original installation. Open at all times."}, {"address":"345 California Street","latitude":37.792662,"longitude":-122.400449,"year":1986,"quality":"poor","description":"This shady snippet on California Street is located in a deeply recessed entry to the ofﬁce building. Granite benches are lined up against a wall on one side. Also, some planters have been placed along the building walls. An additional row of benches on the opposite side would make the space more useful. Open at all times."}, {"address":"555 California Street","latitude":37.791983,"longitude":-122.403781,"year":1969,"quality":"fair","description":"The red granite used on the outside of this building extends to the pavement, railing and steps of this grand, almost forbidding plaza. The massive black granite sculpture accentuates this impression. On the northeast corner, there is an urban garden with six large wooden planters with olive trees and bamboo and beautifully designed teak benches. There is no restroom access or adjacent food service. Open at all times."}, {"address":"600 California Street","latitude":37.792792,"longitude":-122.40476,"year":1990,"quality":"fair","description":"This snippet has no amenities and no seating except the stairs, but it sports one of the densest assemblages of public art pieces downtown, including the Art Deco elevator doors on the loggia wall at the main entrance, Bella Feldman’s sculpture inside the bank lobby, Kent Robert’s aqueduct/railroad trestle/elevated highway on the stairway and Bruce Beasley’s bronze sculpture on top of the stairs, placed on granite cobblestones."}, {"address":"650 California Street","latitude":37.79281,"longitude":-122.405239,"year":1965,"quality":"poor","description":"There are two largely barren plazas: one at the California Street front entrance, and one behind the building, with white concrete benches and large circular raised planters with edges suitable for seating. Planters with boxwood and hydrangea are arranged on stone pavement."}, {"address":"343 Sansome Street","latitude":37.793676,"longitude":-122.401746,"year":1990,"quality":"excellent","description":"There are two open spaces here. Signs at a street entrance and in an elevator guide visitors to the ﬁrst: the view and sun terrace on the 15th ﬂoor. The terrace includes tables and chairs, benches, olive trees and ledge seating along granite planters. Joan Brown’s Four Seasons obelisk stands in center. Open 10 a.m. to 5 p.m. The other open space is on Leidesdorff Street, adjacent to the building, which has been transformed into a lunchtime mall by installing special pavement, bollards and elements to block off the street, and moveable chairs and tables. Two food services are on the building’s ground ﬂoor. Available 11 a.m. to 2 p.m. "}, {"address":"456 Montgomery Street","latitude":37.793625,"longitude":-122.402706,"year":1983,"quality":"fair","description":"Some seating has been provided at the sidewalk level but the main open space, an urban garden, cascades down into the middle recess of the building. Several small terraces with benches, stairs, planters and a water feature extend down two ﬂoors and end in a space with tables and chairs outside a deli. It gets little sun and there is no signage anywhere indicating that it is a public space."} ];






