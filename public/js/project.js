$(document).ready(function(){$(window).on("beforeunload",function(){$(window).scrollTop(0)}),$(window).scroll(function(){$(".top-container").css("background-color","black").css("border-bottom","none"),$("#logo").css("color","white"),$("#current").css("color","white"),$(".item").hover(function(){$(this).css("color","white")},function(){$(this).css("color","#888888"),$("#current").css("color","white")});var a=$(window).scrollTop();0===a&&($(".top-container").css("background-color","white").css("border-bottom","1px solid #e3e3e3"),$("#current").css("color","black"),$("#logo").css("color","black"),$(".item").hover(function(){$(this).css("color","black")},function(){$(this).css("color","#888888"),$("#current").css("color","black")}))});for(var a=0;12>a;a++){var b;0===a?b="project/taobao_2.html":1===a?b="project/nycsub.html":2===a?b="project/inin.html":3===a?b="project/taobao.html":4===a?b="project/sfpopos.html":5===a?b="project/work.html":6===a?b="project/anotherleap.html":7===a?b="project/urbanrural.html":8===a?b="project/impressionism.html":9===a?b="project/holistic.html":10===a?b="project/drawit.html":11===a&&(b="project/closer.html"),$(".icon_container").append('<div class="flipper" id="flipper_'+a+'"><a href='+b+'><div class="front"></div></a><div class="back"></div></div>'),$("#flipper_"+a+" .front").css("background-image",'url("img/project/project_icon/project_sprite_front.png")').css("background-repeat","no-repeat").css("background-position",-220*a+"px 0px"),$("#flipper_"+a+" .back").css("background-image",'url("img/project/project_icon/project_sprite_back.png")').css("background-repeat","no-repeat").css("background-position",-220*a+"px 0px")}$(".front").mouseenter(function(){$(".back").css("opacity","1")})});
