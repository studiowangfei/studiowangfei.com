$(document).ready(function(){function b(a){$("#writing_list_"+a).click(function(){for(var b=0;4>b;b++)$(".writing_"+b).hide();$(".writing_"+a).fadeIn("slow"),$(".writing_container").scrollTop(0)})}$(window).on("beforeunload",function(){$(window).scrollTop(0)}),$(window).scroll(function(){$(".top-container").css("background-color","black").css("border-bottom","none"),$("#logo").css("color","white"),$("#current").css("color","white"),$(".item").hover(function(){$(this).css("color","white")},function(){$(this).css("color","#888888"),$("#current").css("color","white")});var a=$(window).scrollTop();0===a&&($(".top-container").css("background-color","white").css("border-bottom","1px solid #e3e3e3"),$("#current").css("color","black"),$("#logo").css("color","black"),$(".item").hover(function(){$(this).css("color","black")},function(){$(this).css("color","#888888"),$("#current").css("color","black")}))});for(var a=1;4>a;a++)$(".writing_"+a).hide();b(0),b(1),b(2),b(3)});