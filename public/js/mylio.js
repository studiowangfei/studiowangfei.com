$(document).ready(function(){function i(){var i=$(".feature_container").width();480>i?($(".mylio_userflow_image").css("width",1*i+"px").css("height",.702*i+"px"),$(".device_orientation img").css("margin","0 auto")):($(".mylio_userflow_image").css("width","480px").css("height","337px"),$(".device_orientation img").css("margin","-128px 0 0 15%")),640>i?$(".mylio_options img").css("width",1*i+"px").css("height",.68125*i+"px"):$(".mylio_options img").css("width","initial").css("height","initial")}function c(i){return function(){0===i||1===i?0===p?($(".pic-0, .pic-1").css("border","4px solid #212121"),$(".pic-"+i).css("border","4px solid #2AACE8"),$(".pic-0 img, .pic-1 img").css("filter","none").css("-webkit-filter","none"),$(".pic-"+i+" img").addClass("selected").css("filter","sepia(100%)").css("-webkit-filter","sepia(100%)"),$(".mylio-mockup-sort-container").animate({scrollTop:285},750),p=1):($(".mylio-mockup-sort-container").animate({scrollTop:0},750),p=0):2===i||3===i?1===p?($(".pic-2, .pic-3").css("border","4px solid #212121"),$(".pic-"+i).css("border","4px solid #2AACE8"),$(".pic-2 img, .pic-3 img").css("filter","none").css("-webkit-filter","none"),$(".pic-"+i+" img").addClass("selected").css("filter","sepia(100%)").css("-webkit-filter","sepia(100%)"),$(".mylio-mockup-sort-container").animate({scrollTop:570},750),p=2):($(".mylio-mockup-sort-container").animate({scrollTop:285},750),p=1):(4===i||5===i)&&(2===p?($(".pic-4, .pic-5").css("border","4px solid #212121"),$(".pic-"+i).css("border","4px solid #2AACE8"),$(".pic-4 img, .pic-5 img").css("filter","none").css("-webkit-filter","none"),$(".pic-"+i+" img").addClass("selected").css("filter","sepia(100%)").css("-webkit-filter","sepia(100%)"),$(".mylio-mockup-sort-container").animate({scrollTop:936},750),p=2):($(".mylio-mockup-sort-container").animate({scrollTop:570},750),p=2)),s(),o()}}function o(){0===p?($(".pic-2, .pic-3, .pic-4, .pic-5").css("opacity","0.35"),$(".pic-0, .pic-1").css("opacity","1")):1===p&&($(".pic-0, .pic-1, .pic-4, .pic-5").css("opacity","0.35"),$(".pic-2, .pic-3").css("opacity","1")),2===p&&($(".pic-2, .pic-3, .pic-0, .pic-1").css("opacity","0.35"),$(".pic-4, .pic-5").css("opacity","1"))}function s(){if(0===p){$(".mylio-mockup-side-container").animate({scrollTop:0},750);for(var i=0;14>i;i++)$("#preview-"+i).css("opacity","0.2");$("#preview-4").css("opacity","1")}else if(1===p){$(".mylio-mockup-side-container").animate({scrollTop:47},750);for(var i=0;14>i;i++)$("#preview-"+i).css("opacity","0.2");$("#preview-5").css("opacity","1")}else if(2===p){$(".mylio-mockup-side-container").animate({scrollTop:114},750);for(var i=0;14>i;i++)$("#preview-"+i).css("opacity","0.2");$("#preview-6").css("opacity","1")}}for(var e=0;16>e;e++)$("#mylio_userflow_image_"+e).css("background-image",'url("../img/project/mylio/dark_sprite.jpg")').css("background-size","1600% 100%").css("background-repeat","no-repeat").css("background-position",20/3*e+"% 0%");i(),$(window).resize(function(){i()});var p=0;o();for(var e=0;6>e;e++)$(".pic-"+e).click(c(e));$(".back").click(function(){0===p|1===p?($(".mylio-mockup-sort-container").animate({scrollTop:0},750),p=0):2===p&&($(".mylio-mockup-sort-container").animate({scrollTop:285},750),p=1),s(),o()}),$(".next").click(function(){0===p?($(".mylio-mockup-sort-container").animate({scrollTop:285},750),p=1):1===p|2===p&&($(".mylio-mockup-sort-container").animate({scrollTop:570},750),p=2),s(),o()}),$(".undo").click(function(){0===p?($(".pic-0, .pic-1").css("border","4px solid #212121"),$(".pic-0 img, .pic-1 img").css("filter","none").css("-webkit-filter","none")):1===p?($(".pic-2, .pic-3").css("filter","none").css("border","4px solid #212121"),$(".pic-2 img, .pic-3 img").css("-webkit-filter","none")):2===p&&($(".pic-4, .pic-5").css("border","4px solid #212121"),$(".pic-4 img, .pic-5 img").css("filter","none").css("-webkit-filter","none"))});for(var e=0;14>e;e++)$(".side-preview").append('<div class="preview-pic" id="preview-'+e+'"><img src="../img/project/mylio/mockup/column_'+e+'.jpg"></div>');s(),$("#preview-4").click(function(){p=0,s(),$(".mylio-mockup-sort-container").animate({scrollTop:0},750),o()}),$("#preview-5").click(function(){p=1,s(),$(".mylio-mockup-sort-container").animate({scrollTop:285},750),o()}),$("#preview-6").click(function(){p=2,s(),$(".mylio-mockup-sort-container").animate({scrollTop:570},750),o()})});