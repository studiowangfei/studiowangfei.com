$(document).ready(function(){$(window).on("beforeunload",function(){$(window).scrollTop(0)}),$(window).scroll(function(){$(".top-container").css("background-color","black").css("border-bottom","none"),$("#logo").css("color","white"),$("#current").css("color","white"),$(".item").hover(function(){$(this).css("color","white")},function(){$(this).css("color","#888888"),$("#current").css("color","white")});var o=$(window).scrollTop();0===o&&($(".top-container").css("background-color","white").css("border-bottom","1px solid #e3e3e3"),$("#current").css("color","black"),$("#logo").css("color","black"),$(".item").hover(function(){$(this).css("color","black")},function(){$(this).css("color","#888888"),$("#current").css("color","black")}))});for(var o=0;12>o;o++){var c;0===o?c="project/taobao_2.html":1===o?c="project/nycsub.html":2===o?c="project/inin.html":3===o?c="project/taobao.html":4===o?c="project/sfpopos.html":5===o?c="project/work.html":6===o?c="project/anotherleap.html":7===o?c="project/urbanrural.html":8===o?c="project/impressionism.html":9===o?c="project/holistic.html":10===o?c="project/drawit.html":11===o&&(c="project/closer.html"),$(".icon_container").append('<div class="flipper" id="flipper_'+o+'"><a href='+c+'><div class="front"></div></a><div class="back"></div></div>'),$("#flipper_"+o+" .front").css("background-image",'url("img/project/project_icon/project_sprite_front.png")').css("background-repeat","no-repeat").css("background-position",-220*o+"px 0px"),$("#flipper_"+o+" .back").css("background-image",'url("img/project/project_icon/project_sprite_back.png")').css("background-repeat","no-repeat").css("background-position",-220*o+"px 0px")}$(".front").mouseenter(function(){$(".back").css("opacity","1")})});
