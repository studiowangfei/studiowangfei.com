$(document).ready(function(){function b(a){return function(){$(".about_img img").hide(),$("#about_"+a).fadeIn("slow")}}$(window).on("beforeunload",function(){$(window).scrollTop(0)}),$(window).scroll(function(){$(".top-container").css("background-color","black").css("border-bottom","none"),$("#logo").css("color","white"),$("#current").css("color","white"),$(".item").hover(function(){$(this).css("color","white")},function(){$(this).css("color","#888888"),$("#current").css("color","white")});var a=$(window).scrollTop();0===a&&($(".top-container").css("background-color","white").css("border-bottom","1px solid #e3e3e3"),$("#current").css("color","black"),$("#logo").css("color","black"),$(".item").hover(function(){$(this).css("color","black")},function(){$(this).css("color","#888888"),$("#current").css("color","black")}))});var a=$(".main-container").width();$(".top-section").css("width",a+"px"),$(window).resize(function(){var a=$(".main-container").width();$(".top-section").css("width",a+"px")}),$("#about_1").css("display","initial");for(var c=1;12>c;c++)$("#about_link_"+c).click(b(c))});
