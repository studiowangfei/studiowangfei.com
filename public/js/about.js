$(document).ready(function(){function t(){var t=$(".main-container").width();t>=840?($(".about_title").css("margin","0").css("text-align","left"),$(".about_brief").css("width","50%").css("margin","0").css("text-align","left"),$(".about_img").css("width","400px").css("margin","0")):($(".about_title").css("margin","0 auto").css("text-align","center"),$(".about_brief").css("width","80%").css("margin","0 auto").css("text-align","center"),$(".about_img").css("width","480px").css("margin","48px auto 0 auto"))}function i(t){return function(){$(".about_img img").hide(),$("#about_"+t).fadeIn("slow");var i=$(".main-container").width();840>i&&$("body, html").animate({scrollTop:480},500)}}t(),$(window).resize(function(){t()});for(var a=0;12>a;a++)$("#about_link_"+a).click(i(a))});
