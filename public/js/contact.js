$(document).ready(function(){$(window).on("beforeunload",function(){$(window).scrollTop(0)});var a=$(".main-container").width();$(".top-section").css("width",a+"px"),$(window).resize(function(){var a=$(".main-container").width();$(".top-section").css("width",a+"px")}),$(window).scroll(function(){$(".top-section").css("padding","6px 0px");var a=$(window).scrollTop();0===a&&$(".top-section").css("padding","12px 0px")}),$(".bottom-section").css("margin-top","224px"),$("#qrCode").click(function(){$("#qrCode_img").fadeToggle("fast"),$("#sfphoto").fadeToggle("fast")})});
