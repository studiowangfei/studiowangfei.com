$(document).ready(function(){function c(a){$("#writing_list_"+a).click(function(){for(var b=0;4>b;b++)$(".writing_"+b).hide();$(".writing_"+a).fadeIn("slow"),$(".writing_container").scrollTop(0)})}var a;$(window).on("beforeunload",function(){$(window).scrollTop(0)});var b=$(".main-container").width();$(".top-section").css("width",b+"px"),$(window).resize(function(){var a=$(".main-container").width();$(".top-section").css("width",a+"px")}),$(window).scroll(function(){$(".top-section").css("padding","6px 0px");var a=$(window).scrollTop();0===a&&$(".top-section").css("padding","12px 0px")});for(var a=1;4>a;a++)$(".writing_"+a).hide();c(0),c(1),c(2),c(3)});
