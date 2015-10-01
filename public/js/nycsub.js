function initialize(){function e(e){var s=stations[e].Route;return"1"===s||"2"===s||"3"===s?"#EE352E":"4"===s||"5"===s||"6"===s?"#00933C":"7"===s?"#B933AD":"A"===s||"C"===s||"E"===s?"#2850AD":"B"===s||"D"===s||"F"===s||"M"===s?"#FF6319":"N"===s||"Q"===s||"R"===s?"#FCCC0A":"J"===s||"Z"===s?"#996633":"L"===s?"#A7A9AC":"G"===s?"#6CBE45":"S"===s?"#A7A9AC":void 0}function s(e,s){return function(){var n='<div class="nycsub_map_infowindow"><div id="station_name">'+stations[s].Station_name+'</div><div class="ridership_year">Year: '+stations[s].TOTAL+' (*0.01)</div><div class="ridership_weekday">Avg. Weekday: '+stations[s].AVWKDY+'</div><div class="ridership_weekend">Avg. Weekend: '+stations[s].AVSUN+"</div></div>";u=new google.maps.InfoWindow({content:n,disableAutoPan:!1}),u.open(l,e)}}function n(){return function(){u.close()}}for(var i,o=[{featureType:"water",elementType:"geometry.fill",stylers:[{visibility:"on"},{color:"#515151"},{lightness:30}]},{featureType:"landscape.man_made",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"on"},{color:"#ffffff"}]},{featureType:"all",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"geometry",stylers:[{visibility:"off"}]},{featureType:"landscape.man_made",elementType:"geometry.stroke",stylers:[{visibility:"on"},{color:"#000000"},{weight:.1},{lightness:-100}]},{featureType:"road",elementType:"geometry.fill",stylers:[{visibility:"on"},{color:"#ffffff"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{color:"#808080"},{hue:"#000000"},{lightness:50}]},{featureType:"landscape.natural",elementType:"all",stylers:[{visibility:"on"},{color:"#ffffff"}]}],a=new google.maps.StyledMapType(o,{name:"NYC Subway Ridership Viz"}),c={zoom:14,center:new google.maps.LatLng(40.757552,-73.969055),disableDefaultUI:!0,streetViewControl:!1,zoomControl:!0,panControl:!0,mapTypeControlOptions:{mapTypeIds:[google.maps.MapTypeId.ROADMAP,"map_style"]}},l=new google.maps.Map(document.getElementById("nycsub_map-canvas"),c),t=[],r=0;r<stations.length;r++){var p=new google.maps.LatLng(stations[r].Latitude,stations[r].Longitude);new google.maps.Marker({position:p,icon:{path:google.maps.SymbolPath.CIRCLE,fillColor:e(r),fillOpacity:.5,scale:stations[r].AVSUN_ROOT/5,strokeColor:"gold",strokeWeight:0},draggable:!1,map:l}),new google.maps.Marker({position:p,icon:{path:google.maps.SymbolPath.CIRCLE,fillColor:e(r),fillOpacity:.5,scale:stations[r].AVWKDY_ROOT/5,strokeColor:"gold",strokeWeight:0},draggable:!1,map:l});t[r]=new google.maps.Marker({position:p,icon:{path:google.maps.SymbolPath.CIRCLE,fillColor:e(r),fillOpacity:.25,scale:stations[r].TOTAL_ROOT/50,strokeColor:"black",strokeWeight:0},draggable:!1,map:l}),i=new google.maps.Marker({position:p,icon:{path:google.maps.SymbolPath.CIRCLE,fillColor:"white",fillOpacity:1,scale:2,strokeColor:"black",strokeWeight:0},draggable:!1,map:l})}for(var u,r=0;r<stations.length;r++)t[r].addListener("click",s(t[r],r)),t[r].addListener("mouseout",n());l.mapTypes.set("map_style",a),l.setMapTypeId("map_style");var y=new google.maps.TransitLayer;y.setMap(l)}$(document).ready(function(){function e(e,s){for(var n=0;n<e.length;n++)$("#nycsub_back_"+e[n]).css("box-shadow","0px 4px 1px"+s)}function s(e){var s=e[0];return $("#nycsub_flipper_"+s).hasClass("nycsub_selected_flipper")?0:1}function n(e){for(var n=s(p)+s(u)+s(y)+s(d)+s(_)+s(f)+s(b)+s(g),i=r.filter(function(s){return e.indexOf(s)<0}),o=0;o<i.length;o++){var a=i[o];$("#nycsub_flipper_"+a).removeClass("nycsub_selected_flipper")}if(console.log(n),n+s(e)===7)for(var c=0;c<e.length;c++){var l=e[c];$("#nycsub_flipper_"+l).removeClass("nycsub_selected_flipper")}else for(var c=0;c<e.length;c++){var l=e[c];$("#nycsub_flipper_"+l).addClass("nycsub_selected_flipper")}}function i(e){return function(){scrollHeight=$(window).scrollTop(),h=e,$("body, html").css("overflow","hidden"),$(".nycsub_slide_img img").hide(),$(".nycsub_slide_container").show(),$("#nycsub_ridermap_big_"+e).fadeIn("slow"),c()}}function o(){0===h?(h=59,$(".nycsub_slide_img img").hide(),$("#nycsub_ridermap_big_"+h).fadeIn()):(h--,$(".nycsub_slide_img img").hide(),$("#nycsub_ridermap_big_"+h).fadeIn("slow")),c()}function a(){59===h?(h=0,$(".nycsub_slide_img img").hide(),$("#nycsub_ridermap_big_"+h).fadeIn()):(h++,$(".nycsub_slide_img img").hide(),$("#nycsub_ridermap_big_"+h).fadeIn("slow")),c()}function c(){var e=$(window).height(),s=($(window).width(),$(".nycsub_slide").height());e-s>0?$(".nycsub_slide").css("margin-top",.5*(e-s)+"px"):$(".nycsub_slide").css("margin-top","48px"),$("#nycsub_arrow_left, #nycsub_arrow_right").css("margin-top",.5*(s-72)+"px")}function l(){var e=$("#nycsub_map-canvas").width(),s=$(".nycsub_map_container").css("display");"none"===s&&$("#nycsub_map-canvas").css("height",.6875*e+"px")}$(window).resize(function(){c(),l()}),$(window).scroll(function(){var e=$(window).scrollTop(),s=$(".nycsub").height();e>4640&&4500+s>e?$(".nycsub_lines").fadeIn("slow"):$(".nycsub_lines").fadeOut("slow")});for(var t=0;60>t;t++)$(".nycsub").append('<div class="nycsub_flipper" id="nycsub_flipper_'+t+'"><div class="nycsub_front"></div><div class="nycsub_back" id="nycsub_back_'+t+'"></div></div>'),$("#nycsub_flipper_"+t+" .nycsub_front").css("background-image",'url("../img/project/nycsub/riders/nycsub_sprite_front.png")').css("background-repeat","no-repeat").css("background-position",-140*t+"px 0px"),$("#nycsub_flipper_"+t+" .nycsub_back").css("background-image",'url("../img/project/nycsub/riders/nycsub_sprite_back.png")').css("background-repeat","no-repeat").css("background-position",-140*t+"px 0px");for(var r=[],t=0;60>t;t++)r.push(t);var p=[2,10,18,26,28,29,42,46,49,59],u=[7,8,25,32,34,41,44,48,54,58],y=[13],d=[3,5,11,17,21,33,38,45,52,53,56,57],_=[1,4,6,9,19,23,27,31,35,36,39,40,43,47,51],f=[0,12,14,15,37,50],b=[16,20,22,24,30],g=[55];e(p,"#EE352E"),e(u,"#00933C"),e(y,"#B933AD"),e(d,"#2850AD"),e(_,"#FF6319"),e(f,"#FCCC0A"),e(b,"#996633"),e(g,"#A7A9AC"),$("#nycsub_all").click(function(){if(s(p)+s(u)+s(y)+s(d)+s(_)+s(f)+s(b)+s(g)===0)for(var e=0;e<r.length;e++)$("#nycsub_flipper_"+e).removeClass("nycsub_selected_flipper");else for(var e=0;e<r.length;e++)$("#nycsub_flipper_"+e).addClass("nycsub_selected_flipper")}),$("#nycsub_123").click(function(){n(p)}),$("#nycsub_456").click(function(){n(u)}),$("#nycsub_7").click(function(){n(y)}),$("#nycsub_ace").click(function(){n(d)}),$("#nycsub_bdfm").click(function(){n(_)}),$("#nycsub_nqr").click(function(){n(f)}),$("#nycsub_jz").click(function(){n(b)}),$("#nycsub_l").click(function(){n(g)}),$("#nycsub_down").click(function(){var e=$(".outer-container").height(),s=$("#nycsub_map-canvas").height();$("body, html").animate({scrollTop:e-s-360},"slow")}),$("#map_fullscreen").click(function(){scrollHeight=$(window).scrollTop(),$("#map_close, .nycsub_map_scale_fullscreen").css("display","initial"),$("body, html").css("overflow","hidden"),$(".nycsub_map_container").show(),$("#nycsub_map-canvas").css("height","100%").css("z-index","10").css("position","fixed")}),$("#map_close").click(function(){$("#map_close, .nycsub_map_scale_fullscreen").css("display","none"),$("body, html").css("overflow","auto"),$(".nycsub_map_container").hide(),$("#nycsub_map-canvas").css("position","relative").css("z-index","1"),l()});for(var m=0;60>m;m++)$(".nycsub_slide_img").append('<img id="nycsub_ridermap_big_'+m+'" src="../img/project/nycsub/riders/b_black/'+m+'.png"/>');for(var h=0,v=0;60>v;v++)$("#nycsub_back_"+v).click(i(v));$("#nycsub_arrow_left").click(o),$("#nycsub_arrow_right").click(a),$(".nycsub_slide_img img").click(a),$(document).keyup(function(e){27==e.keyCode&&($("#map_close, .nycsub_map_scale_fullscreen").css("display","none"),$(".nycsub_slide_container").hide(),$(".nycsub_map_container").hide(),$("#nycsub_map-canvas").css("position","relative").css("z-index","1"),l())}),$(".nycsub_close").click(function(){$("body, html").css("overflow","auto"),$(".nycsub_slide_container").hide()}),l()});var map;google.maps.event.addDomListener(window,"load",initialize);