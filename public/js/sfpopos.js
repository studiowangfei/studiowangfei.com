function initialize(){function k(a){return function(){var b='<div class="sfpopos_map_infowindow" id="sfpopos_map_infowindow_'+a+'">'+'<div id="popos_address">'+popos[a].address+"</div>"+'<div class="popos_year">Year: '+popos[a].year+"</div>"+'<div class="popos_quality">Spatial Quality: '+popos[a].quality+"</div>"+'<div class="popos_description">'+popos[a].description+"</div>"+'<div class="popos_photo"><img src="../img/project/sfpopos/site_photos/'+a+'.jpg"/></div>'+"</div>";i=new google.maps.InfoWindow({content:b,disableAutoPan:!1}),j&&j.close(),j=i,i.open(d,e[a])}}var a=[{featureType:"water",elementType:"geometry.fill",stylers:[{visibility:"on"},{color:"#0008FF"},{saturation:-54},{lightness:-42}]},{featureType:"landscape.man_made",elementType:"geometry.fill",stylers:[{visibility:"on"},{color:"#ffffff"},{lightness:21}]},{featureType:"landscape.man_made",elementType:"geometry.stroke",stylers:[{visibility:"on"},{color:"#000000"},{weight:.1},{lightness:-100}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"on"},{color:"#ffffff"}]},{featureType:"all",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"geometry",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"geometry.fill",stylers:[{visibility:"on"},{color:"#ffffff"},{lightness:-15}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{visibility:"off"},{color:"#808080"},{hue:"#000000"},{lightness:50}]},{featureType:"landscape.natural",elementType:"all",stylers:[{visibility:"on"},{color:"#ffffff"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#3ba635"},{saturation:-70},{lightness:50}]}],b=new google.maps.StyledMapType(a,{name:"San Francisco POPOS Viz"}),c={zoom:15,center:new google.maps.LatLng(37.791117,-122.399004),disableDefaultUI:!1,streetViewControl:!1,zoomControl:!0,panControl:!0,mapTypeControlOptions:{mapTypeIds:[google.maps.MapTypeId.ROADMAP,"map_style"]}},d=new google.maps.Map(document.getElementById("sfpopos_map-canvas"),c);d.mapTypes.set("map_style",b),d.setMapTypeId("map_style");for(var e=[],f=0;f<popos.length;f++){var h,g=new google.maps.LatLng(popos[f].latitude,popos[f].longitude);h="poor"===popos[f].quality?"#b5dea2":"fair"===popos[f].quality?"#6CBE45":"good"===popos[f].quality?"#4b8530":"#2b4c1b",e[f]=new google.maps.Marker({position:g,icon:{path:google.maps.SymbolPath.CIRCLE,fillColor:h,fillOpacity:.85,scale:20,strokeColor:"black",strokeWeight:0},draggable:!1,map:d})}for(var i,j=!1,f=0;f<popos.length;f++)e[f].addListener("click",k(f))}$(document).ready(function(){function d(){$(".project_img > img:first").fadeOut(1e3).next().fadeIn(1e3).end().appendTo(".project_img")}function f(){e=setInterval(d,4e3)}function g(){clearInterval(e)}function h(){var a=$(window).height();$(window).width();var c=$(".project_slide").height();a-c>0?$(".project_slide").css("margin-top",.5*(a-c)+"px"):$(".project_slide").css("margin-top","48px"),$("#project_arrow_left, #project_arrow_right").css("margin-top",.5*(c-72)+"px")}function j(a){return function(){i=a,$("body, html").css("overflow","hidden"),$(".project_slide_container").show(),$(".project_slide_img img").hide(),$("#project_big_"+a).fadeIn("slow"),h()}}function k(){0===i?(i=b-1,$(".project_slide_img img").hide(),$("#project_big_"+i).fadeIn("slow")):(i--,$(".project_slide_img img").hide(),$("#project_big_"+i).fadeIn("slow"))}function l(){i===b-1?(i=0,$(".project_slide_img img").hide(),$("#project_big_"+i).fadeIn("slow")):(i++,$(".project_slide_img img").hide(),$("#project_big_"+i).fadeIn("slow"))}function n(){var a=$(".sfpopos_video").width();$(".sfpopos_video iframe").css("height",.655*a+"px")}function o(){var a=$("#sfpopos_map-canvas").width(),b=$(".sfpopos_map_container").css("display");"none"===b&&$("#sfpopos_map-canvas").css("height",.67*a+"px")}$(window).on("beforeunload",function(){$(window).scrollTop(0)}),$("#scroll").click(function(){$("body, html").animate({scrollTop:720},"slow")});for(var a,b=10,c=0;b>c;c++)$(".project_img").append('<img id="project_small_'+c+'" src="../img/project/sfpopos/'+c+'_small.jpg"/>'),$(".project_slide_img").append('<img id="project_big_'+c+'" src="../img/project/sfpopos/'+c+'_big.jpg"/>');$(".project_img > img:gt(0)").hide();var e;$(function(){f(),$(".project_img").hover(function(){g()},function(){f()})});for(var i=0,m=0;b>m;m++)$("#project_small_"+m).click(j(m));$("#project_arrow_left").click(k),$("#project_arrow_right").click(l),$(".project_slide_img img").click(l),$(document).keyup(function(b){27==b.keyCode&&($("body, html").css("overflow","auto"),$(".project_slide_container").hide(),$("#map_close").css("display","none"),$(".sfpopos_map_container").hide(),$("#sfpopos_map-canvas").css("position","relative").css("z-index","1"),o(),$("body, html").scrollTop(a))}),$(".project_close").click(function(){$("body, html").css("overflow","auto"),$(".project_slide_container").hide()}),n(),o(),$(window).resize(function(){h(),n(),o()}),$("#map_fullscreen").click(function(){a=$(window).scrollTop(),$("#map_close").css("display","initial"),$("body, html").css("overflow","hidden"),$(".sfpopos_map_container").show(),$("#sfpopos_map-canvas").css("height","100%").css("z-index","10").css("position","fixed")}),$("#map_close").click(function(){$("#map_close").css("display","none"),$("body, html").css("overflow","auto"),$(".sfpopos_map_container").hide(),$("#sfpopos_map-canvas").css("position","relative").css("z-index","1"),o(),$("body, html").scrollTop(a)})});var map;google.maps.event.addDomListener(window,"load",initialize);var popos=[{address:"611 Folsom St.",latitude:37.784918,longitude:-122.396483,year:1965,quality:"fair",description:"This barren plaza, at the outer edge of the of\ufb01ce district, is built entirely of the same shade of brick \u2014 \ufb02oor, benches and all. Two rows of plane trees along Folsom Street are the only greenery. It is open at all times and there are two food services nearby.It is often shady. Addition of landscaping would make it more appealing. Needed improvements: landscaping"},{address:"Transamerica Redwood Park",latitude:37.795182,longitude:-122.402216,year:1972,quality:"excellent",description:"This urban park, located at the foot of the Transamerica Pyramid is a wonderful surprise. Surrounded by Redwood trees and graced with luscious ferns, the park features a fountain spouting water several feet high, and \ufb01gurative bronze sculptures. There are also grassy areas, wooden benches and a concrete stage. Take-out food services are nearby. Closed after of\ufb01ce hours. "},{address:"101 Second St.",latitude:37.788067,longitude:-122.399207,year:2e3,quality:"excellent",description:"Minimalist design and sumptuous materials characterize this expansive \ufb01ve-story greenhouse with two glass fronts that open to Second and Mission Streets. Beige marble walls contrast with black granite \ufb02oors in the main space as well as on the mezzanine. Designer caf\xe9 tables and chairs, granite benches, a large painting and a sculpture complete the furnishings. Sometimes there is noontime entertainment. Available 8 a.m. to 6 p.m. Needed improvements: signage on Second St. entrance"},{address:"505 Sansome St.",latitude:37.795038,longitude:-122.401847,year:1980,quality:"good",description:"A greenhouse in the lobby of this of\ufb01ce building faces and connects to Redwood Park. Its two-story glass walls create an airy interior, featuring granite \ufb02ooring, several paintings and eight tables, each with three to four chairs of beautiful modern design. Two food services are located within the building. Needed improvements: exterior signage, more seating."},{address:"555 Mission St.",latitude:37.788484,longitude:-122.398454,year:null,quality:"",description:"Here you will \ufb01nd a plaza extending between Mission and Minna Streets, and paved mostly with black granite. A large, playful sculpture dominates this area. On the south side it steps up to a sitting area with wooden benches, blooming ground cover and three large aluminum heads. The last quarter of the plaza towards Minna Street features a grove of Gingko trees with wooden benches underneath. Open at all times. "},{address:"Empire Park",latitude:37.792785,longitude:-122.410557,year:1988,quality:"good",description:"From the Commercial Street lunchtime mall the visitor enters this intimate urban garden, occupying the site of a demolished building. The design is symmetrical, with brick planter beds and sitting ledges along both sides and a fountain sculpture at the end of the central axis. Benches and tables with chairs complete the furnishings of this enjoyable space. Needed improvements: Restroom availability."},{address:"560 Mission St.",latitude:37.788696,longitude:-122.399372,year:null,quality:"",description:"This urban garden is accessible from Mission and Jessie Streets. Most unusual is a high bamboo grove obscuring the windowless fa\xe7ade of the building next door. From here three long steps, all at sitting height, descend down to a granite covered main area, \ufb01lled with tables and chairs. Two delis serve the area. Along Mission Street is a shallow rectangular pool with a tall kinetic sculpture of two large rotating aluminum rings connected to a granite base. Open at all times."},{address:"55 2nd Street",latitude:37.788802,longitude:-122.400318,year:2002,quality:"good",description:"After entering a sumptuous marble lobby from Stevenson Street, the indoor park is a few steps up on the left, inside the historic building. There are tables and chairs on wood \ufb02ooring, and big leather chairs near windows on carpeted areas. Also, notice the potted plants and large array of paintings. Available 8 a.m. to 6 p.m. On the south side of the building there is a snippet descending over diagonal stairs down to Jessie Street, with designer tables and chairs on granite pavement, and planting beds along the boundary of open space."},{address:"71 Stevenson Street",latitude:37.78945,longitude:-122.399808,year:1983,quality:"fair",description:"The open space here consists of granite pedstrian walkways underneath the building and connecting Stevenson and Jessie Streets. Portions of the passageways contain tables and chairs with signs indicating that they are for use only by customers of the adjacent caf\xe9. The open space under the building extends into an urban garden, de\ufb01ned by black granite planters with ledges for sitting and a square, blue-tiled fountain gushing water and surrounded with \ufb02owers."},{address:"49 Stevenson Street",latitude:37.789717,longitude:-122.399426,year:1984,quality:"fair",description:"The approval of this building called for a pedestrian walkway along Stevenson Street. Most of the area has been fenced off for outdoor table service (with heat lamps) of the adjacent restaurant. A smaller section adjacent to the take-out section of the same restaurant contains a few tables and chairs. While not signed for exclusive use of restaurant patrons there is no signage indicating that it is also available to the general public."},{address:"Golden Gate University",latitude:37.789292,longitude:-122.398982,year:1936,quality:"good",description:"A bridge, connecting the Mission Street sidewalk to the deeply recessed entrance to Golden Gate University, has been turned into a snippet. Amenities consist of concrete benches on both sides of the bridge, as well as along part of the Mission Street sidewalk. There is no planting. The space is well used by students and the general public. Open at all times."},{address:"Embarcadero Center West",latitude:37.794873,longitude:-122.397892,year:1989,quality:"good",description:"The \ufb01rst of the three open spaces here is the conversion of Commercial Street between Sansome & Battery into an exclusive pedestrian walkway. There are small seating areas on the second level and elaborate stairs \ufb02anked by narrow waterfalls that bring the second-story walkway to street level at mid-block. The second half of the street has two rows of trees in circular planters with ledges too low to sit on comfortably. Tables and chairs that had been placed between trees have been removed. Also gone are adjacent food services. The second, at the Old Federal Reserve Bank building, consists of the generous steps (snippets) to the historic building from both Battery and Sansome streets. The third, on the south side of Sacramento between Sansome & Battery, is a two-level snippet, west of the of\ufb01ce building. Grey granite covers the ground level, steps and retaining wall with attached seating ledges. The space also features potted plants and a sculpture as well as moveable tables and chairs, and adjacent food services."},{address:"25 Jessie Street",latitude:37.789621,longitude:-122.398733,year:1983,quality:"fair",description:"This small but lovely urban garden is adjacent to Ecker Alley in a two-story forecourt of the building. It is richly planted and has a pleasant water wall and basin whose sound creates its own atmosphere. Nice to look at but not to sit in. The only seating is on shallow steps around the fountain. Open at all times."},{address:"100 1st Street",latitude:37.789325,longitude:-122.397586,year:1988,quality:"fair",description:"A staircase from Mission Street leads up to this popular sun terrace. Its main feature is a black granite wall with \ufb01ssures spouting water into two pools where undulating glass panels evoke waves. The rectangular terrace is designed on a 45-degree grid, featuring many planter beds and terraces forming intimate spaces. Planters with trees, \ufb02owers and grass all have ledges at sitting height. Designer caf\xe9 tables and chairs. Deli at foot of stairs. Open at all times."},{address:"199 Fremont Street",latitude:37.789952,longitude:-122.394749,year:2e3,quality:"excellent",description:"The design of this urban garden is a collaboration among Paul Kos, conceptual sculptor; Robert Hass, poet; and a landscape architect. The garden features Sierra granite: a 86-ton boulder, smaller boulders and rough blocks at sitting height. A Hass poem is engraved on the garden wall. A fountain drips into a circular basin with a \u201ctok \u2026 tok \u2026 tok\u201d sound evoking the passage of time. The garden opening toward Fremont Street is planted with birch trees. Open at all times."},{address:"301 Howard Street",latitude:37.789529,longitude:-122.394193,year:1981,quality:"fair",description:"This small urban garden features a small Art Deco building that once housed a gas station of\ufb01ce, and was moved here from another site. A food truck has been placed inside it, which together with its gaudy sign destroys the charm of the little pavilion. Tables and chairs are provided and some planting visually shields the space from the adjacent parking area. Open at all times."},{address:"221 Main Steet",latitude:37.790413,longitude:-122.392058,year:1974,quality:"fair",description:"This plaza offers four benches in a sea of paving. Another plaza, at the southern portion of the building facing Main St., has concrete benches and retaining walls at a height comfortable for sitting, as well as some greenery. With the addition of planting and tables and chairs it could be converted into a very attractive urban garden."},{address:"201 Spear Street",latitude:37.791241,longitude:-122.391842,year:1982,quality:"fair",description:"The walkway from Spear to Steuart Streets and further on to the Gap building widens into an urban garden. It is de\ufb01ned by concrete planting beds, densely planted with camellias and ledges for sitting. The pavement consists of granite cobblestones. Large trees de\ufb01ne the space along Spear Street. In the center stands a life-like sculpture of a man holding a camera as if taking a picture. Open at all times. "},{address:"180 Howard Street",latitude:37.790835,longitude:-122.393372,year:1980,quality:"fair",description:"This shady public sitting area in a pedestrian walkway is a continuation of the walkway described above. One side of the walkway abuts an arcade with brick arches and furnished with concrete cubes of sitting height, a few potted plants and a coffee cart. There is another food service around the corner."},{address:"160 Spear Street Plaza",latitude:37.791283,longitude:-122.393561,year:1983,quality:"excellent",description:"This urban garden consists of the entrance walkway to the building that widens on both sides to make space for caf\xe9 tables and chairs, a water feature and a large aluminum sculpture. The planting beds against the neighboring buildings have ledges for sitting. Two food services are available, one at the open space entrance, the other inside the building. The space is well used."},{address:"135 Main Street",latitude:37.791582,longitude:-122.394,year:1982,quality:"fair",description:"The front courtyard of this building has been enclosed and turned into a building lobby and indoor park. It has several levels de\ufb01ned by glass and metal railings and is furnished with couches on carpets, tables and chairs. There are identical fountains \u2014 water running over silver steel \u2014 against the side walls, framed by sheets of onyx. There is no exterior signage indicating it can be used by the public, although the lobby attendant gives assurance that it can. The alley behind the of\ufb01ce building includes benches and a fountain. Open during of\ufb01ce hours."},{address:"One Market Street Plaza",latitude:37.793992,longitude:-122.394896,year:1976,quality:"excellent",description:"The plaza is oriented to the sunny side of the building. A tall hexagonal tower marks the Mission Street entrance of the building and six white masts de\ufb01ne the open space towards the sidewalk. Ample seating and tables are provided. Several food services open to the plaza. Open at all times."},{address:"123 Mission Street",latitude:37.791821,longitude:-122.394574,year:1986,quality:"excellent",description:"This urban garden is divided into three successive spaces by white concrete planters with attached ledges at sitting height. The planters are lushly planted with trees, shrubs and \ufb02owers. Some sunlight bounces off the building but for the most part it is shady. There are four food services nearby, but no signage. Open at all times. "},{address:"201 Mission Street",latitude:37.791437,longitude:-122.395069,year:1960,quality:"good",description:"This urban garden occupies the setbacks along Beale Street \u2014 a succession of triangular open spaces formed by concrete planter beds, densely planted, with sitting ledges attached. There are plenty of caf\xe9 tables and moveable chairs. Open at all times."},{address:"77 Beale Street",latitude:37.792128,longitude:-122.396679,year:1970,quality:"good",description:"The entry plaza along Beale Street features a water wall, granite planters with Gingko trees and ledges for sitting. Unfortunately, the ledges are a bit too high to sit comfortably. The open space is somewhat intimidating. It could be made more inviting with more landscaping and comfortable seating. Needed improvements: landscaping, seating. There are also two small snippets, one on Mission Street and one on Beale Street, comprising benches alternating with concrete planters in sidewalk recesses."},{address:"50 Beale Street",latitude:37.791256,longitude:-122.396399,year:1968,quality:"fair",description:"This rather large urban park fronting on Beale Street is full of trees and bushes. Mostly very shady, in the summer it enjoys some dappled sunshine. It includes a Bechtel Corp. history museum housed in a replica of a private railroad car the Bechtel family lived in at construction sites in the company\u2019s early days. Park open at all times. Museum open 11 a.m. to 2 p.m. on weekdays."},{address:"333 Market Street",latitude:37.791609,longitude:-122.397523,year:1944,quality:"fair",description:"Two-tone gray granite pavement and three rectangular planters with some ledges at sitting height are the design elements of this small plaza. The adjacent retail space is for lease, and a caf\xe9 with outdoor tables and chairs would be a welcome addition. Open at all times."},{address:"14 Fremont Street",latitude:37.79136,longitude:-122.397896,year:1983,quality:"fair",description:"The open space consists of a wide sitting area in a pedestrian walkway connecting Fremont and First Streets, and furnished with many caf\xe9 tables and chairs \u2014 as well as an urban garden with several planting beds with ledges for sitting, more caf\xe9 tables and chairs, and a travertine-clad colonnade extending along First Street. Two food services open to the walkway and garden, which provide shade under plum trees as well as sunshine. Open at all times."},{address:"425 Market Street",latitude:37.791187,longitude:-122.398305,year:1973,quality:"excellent",description:"Tucked between highrises, this urban garden is shady but nonetheless a jewel. It is elegantly designed with two kinds of granite, benches, \ufb02owers in planters and trees. Visitors sit, relax, people watch, drink coffee from the adjacent caf\xe9 or simply use it as a shortcut from Fremont to Market Street. Open at all times."},{address:"525 Market Street",latitude:37.790681,longitude:-122.399154,year:1973,quality:"excellent",description:"This urban garden features a double granite fountain with granite benches in between to enjoy the sight and sound of \ufb02owing water. The backside of one of the fountains has a tiered semi- circular planter \ufb01lled with bushes and ferns. A continuous metal bench with a planter behind it sheilds the space from the Market Street sidewalk. The adjacent restaurant has placed tables and chairs into the open space. Open at all times. At the back of the urban garden is a set of stairs leading up to an upper-story building lobby. There are some large plaza areas edged with landscaped planters, but no seating. These spaces easily could be turned into a pleasant sun terrace."},{address:"555/575 Market Street",latitude:37.78966,longitude:-122.400436,year:1957,quality:"fair",description:"The beautifully landscaped urban garden takes up the space between two highrises. A stylized version of a mountain stream runs through it. Unfortunately this is for visual enjoyment only since access is limited to of\ufb01ce tenants only. Benches placed at the Market Street entrance and on the circular platform that \ufb02oats above the space would make it more enjoyable."},{address:"595 Market Street",latitude:37.789341,longitude:-122.400751,year:1979,quality:"poor",description:"The approval of this building called for two triangular entryway plazas. One, at Second and Stevenson Streets, largely has been occupied by a fenced restaurant seating area. Outside, a 10-foot-wide edge of the plaza faces Stevenson Street. It has good sun exposure, and with the addition of benches and landscaping could become a pleasant public sitting area."},{address:"One Post Street",latitude:37.78884,longitude:-122.402715,year:1969,quality:"good",description:"Snippets with stand-up tables and square concrete blocks at sitting height next to food services. A few planters with boxwood were created when the arcade of the building was partially enclosed. They are adjacent to the steps around the hexagonal fence of the Montgomery BART station entrance, which are very well used at lunchtime on a sunny day. Open at all times. "},{address:"Crocker Galleria - 50 Post Street",latitude:37.789164,longitude:-122.402979,year:1982,quality:"good",description:"There are two rooftop sun terraces here that are open whenever the Galleria is open. One sun terrace is on top of the historic bank building at Montgomery and Post Streets, and is accessed from a staircase on the easterly side of the Galleria\u2019s top \ufb02oor or from an elevator at the corner of the bank building.The terrace has ample seating on planter ledges and benches, but no tables. An attractive fountain is out of service. A second sun terrace can be accessed from an obscure staircase in the northwest corner of the Galleria\u2019s top \ufb02oor. It is a quiet refuge, offering sunny and shady places, many benches, a trellis and planters. There are many food services in the Galleria. Restrooms are on the third \ufb02oor."},{address:"Trinity Alley",latitude:37.789975,longitude:-122.402594,year:1983,quality:"good",description:"The adjacent of\ufb01ce tower converted Trinity Alley into a pedestrian walkway (connecting Bush to Sutter Street) by removing the curb and lining the roadbed with small granite pavers, and adding a narrow plaza by creating narrow platform steps up in the side setback of the building. Five food services open out to the plaza, and have put out chairs and tables during business hours. Open at all times."},{address:"Citigroup Center",latitude:37.790446,longitude:-122.401154,year:1983,quality:"excellent",description:"This greenhouse is built into the shell of the 1912 London-Paris Bank building, with a glass roof and two-story arches opening to Sansome and Sutter Streets. The material for the arches, the walls, the entrance steps and the \ufb02oor is white marble with additional black marble bands and a round black polished marble fountain in the center. Palm trees and other plants soften the severity of the space. An Art Deco bronze sculpture graces a marble niche. A food service opens to the space and caf\xe9 tables and chairs have been provided. There is also a seating area inside the building lobby. "},{address:"1 Bush Street",latitude:37.791048,longitude:-122.399988,year:1959,quality:"excellent",description:"A beautifully designed and maintained urban garden surrounds the \ufb01rst postwar high-rise building \u2014 a \u201ctower in a park.\u201d It features river rocks embedded in concrete, inlaid with a striking design of bands of grey slate. A fountain sculpture spouts and drips water. The planting consists of cherry, willow and pine trees and evergreen ground cover. The garden lies below street level and resembles a moat. It is for visual enjoyment only; no seating has been provided, the river rocks are hard to walk on and no food service is available. Needed improvements: seating in garden, food service On sunny days the stone walls along the Sansome Street sidewalk (snippets) are well used for lunching and people-watching. Open at all times."},{address:"444 Market Street",latitude:37.791382,longitude:-122.398796,year:1980,quality:"poor",description:"This plaza leading to the Market Street building entrance is an extension of the brick sidewalk of Market Street. It has no seating, and except for \ufb01ve small palm trees in planters, it offers no amenity. Adjacent to Mechanics Plaza. Three food services are nearby. Open at all times."},{address:"100 Pine Street",latitude:37.792624,longitude:-122.398991,year:1972,quality:"excellent",description:"This urban garden is tucked between very tall buildings. It\u2019s a quiet little gem of a space, accessible through the lobby to the rear or via an obscure passage off Front Street. Travertine and black granite \ufb02ooring, an art piece, plants in containers and designer tables and chairs. Food services on site. Receives no sun, but light colored materials and re\ufb02ected light stave off gloom. Caf\xe9 closes at 3 p.m., building and garden at 6:30 p.m."},{address:"101 California Street",latitude:37.792738,longitude:-122.39811,year:1982,quality:"excellent",description:"Three tall, triangular, stepped pyramids, built around the garage exhaust vents, dominate this urban garden within a large plaza. The steps are clad with granite, and are used for seating and as planting beds. There is a granite fountain, with gushing water creating a pleasant sound. Two restaurants on the building\u2019s ground \ufb02oor open to the plaza with outdoor seating. Open at all times. Across the street, at 100 California Street, large planters have been placed on the sizable building setbacks. With some seating, the space could be easily converted into an attractive urban garden."},{address:"One California Street",latitude:37.793414,longitude:-122.396725,year:1970,quality:"excellent",description:"The snippets around this building feature large stone planters of triangular, rectangular and round shapes along Market and California streets, some with trees and benches. The pavement consists of green stone and rose-colored granite. The caf\xe9 in the building \ufb01lls some of the open space with its tables and chairs. Open at all times."},{address:"50 California Street",latitude:37.794132,longitude:-122.397361,year:1972,quality:"excellent",description:"This snippet, occupying the building setback, is an extension of the design and material from the open space across the street. Variously shaped planters, with ledges at sitting height, have been placed on rose-colored granite and green stone pavement. A small caf\xe9 with outdoor seating enlivens the space. Open at all times. "},{address:"150 California Street",latitude:37.793659,longitude:-122.39851,year:2e3,quality:"good",description:"The sign near the building entrance indicating the existence of a publicly accessible sun terrace is small, dark and very dif\ufb01cult to read. The lobby guard will ask visitors their purpose but will allow the public to pass. The sun terrace is oriented toward Front Street, has tables and chairs, plants and public art. It also offers sunny, shady and wind protected areas. Open 9 a.m. to 6 p.m."},{address:"200 California Street",latitude:37.793584,longitude:-122.39903,year:1990,quality:"fair",description:"This public sitting area in a pedestrian walkway was created in an extension of the sidewalk. It has a rectangular planting bed with ledges that are a bit too high for sitting comfortably, and features the Hawaiian, a \ufb01gurative bronze sculpture. The planting bed replaced the benches and other pieces of furniture of the original installation. Open at all times."},{address:"345 California Street",latitude:37.792662,longitude:-122.400449,year:1986,quality:"poor",description:"This shady snippet on California Street is located in a deeply recessed entry to the of\ufb01ce building. Granite benches are lined up against a wall on one side. Also, some planters have been placed along the building walls. An additional row of benches on the opposite side would make the space more useful. Open at all times."},{address:"555 California Street",latitude:37.791983,longitude:-122.403781,year:1969,quality:"fair",description:"The red granite used on the outside of this building extends to the pavement, railing and steps of this grand, almost forbidding plaza. The massive black granite sculpture accentuates this impression. On the northeast corner, there is an urban garden with six large wooden planters with olive trees and bamboo and beautifully designed teak benches. There is no restroom access or adjacent food service. Open at all times."},{address:"600 California Street",latitude:37.792792,longitude:-122.40476,year:1990,quality:"fair",description:"This snippet has no amenities and no seating except the stairs, but it sports one of the densest assemblages of public art pieces downtown, including the Art Deco elevator doors on the loggia wall at the main entrance, Bella Feldman\u2019s sculpture inside the bank lobby, Kent Robert\u2019s aqueduct/railroad trestle/elevated highway on the stairway and Bruce Beasley\u2019s bronze sculpture on top of the stairs, placed on granite cobblestones."},{address:"650 California Street",latitude:37.79281,longitude:-122.405239,year:1965,quality:"poor",description:"There are two largely barren plazas: one at the California Street front entrance, and one behind the building, with white concrete benches and large circular raised planters with edges suitable for seating. Planters with boxwood and hydrangea are arranged on stone pavement."},{address:"343 Sansome Street",latitude:37.793676,longitude:-122.401746,year:1990,quality:"excellent",description:"There are two open spaces here. Signs at a street entrance and in an elevator guide visitors to the \ufb01rst: the view and sun terrace on the 15th \ufb02oor. The terrace includes tables and chairs, benches, olive trees and ledge seating along granite planters. Joan Brown\u2019s Four Seasons obelisk stands in center. Open 10 a.m. to 5 p.m. The other open space is on Leidesdorff Street, adjacent to the building, which has been transformed into a lunchtime mall by installing special pavement, bollards and elements to block off the street, and moveable chairs and tables. Two food services are on the building\u2019s ground \ufb02oor. Available 11 a.m. to 2 p.m. "},{address:"456 Montgomery Street",latitude:37.793625,longitude:-122.402706,year:1983,quality:"fair",description:"Some seating has been provided at the sidewalk level but the main open space, an urban garden, cascades down into the middle recess of the building. Several small terraces with benches, stairs, planters and a water feature extend down two \ufb02oors and end in a space with tables and chairs outside a deli. It gets little sun and there is no signage anywhere indicating that it is a public space."}];
