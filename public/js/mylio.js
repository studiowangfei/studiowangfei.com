$(document).ready(function(){function i(i,c){return function(){$(".mylio_userflow_"+c+" p").css("opacity",i)}}function c(i){return function(){0===i||1===i?0===p?($(".pic-0, .pic-1").css("border","4px solid #212121"),$(".pic-"+i).css("border","4px solid #2AACE8"),$(".pic-0 img, .pic-1 img").css("-webkit-filter","none"),$(".pic-"+i+" img").addClass("selected").css("-webkit-filter","sepia(100%)"),$(".mylio-mockup-sort-container").animate({scrollTop:285},750),p=1):($(".mylio-mockup-sort-container").animate({scrollTop:0},750),p=0):2===i||3===i?1===p?($(".pic-2, .pic-3").css("border","4px solid #212121"),$(".pic-"+i).css("border","4px solid #2AACE8"),$(".pic-2 img, .pic-3 img").css("-webkit-filter","none"),$(".pic-"+i+" img").addClass("selected").css("-webkit-filter","sepia(100%)"),$(".mylio-mockup-sort-container").animate({scrollTop:570},750),p=2):($(".mylio-mockup-sort-container").animate({scrollTop:285},750),p=1):(4===i||5===i)&&(2===p?($(".pic-4, .pic-5").css("border","4px solid #212121"),$(".pic-"+i).css("border","4px solid #2AACE8"),$(".pic-4 img, .pic-5 img").css("-webkit-filter","none"),$(".pic-"+i+" img").addClass("selected").css("-webkit-filter","sepia(100%)"),$(".mylio-mockup-sort-container").animate({scrollTop:936},750),p=2):($(".mylio-mockup-sort-container").animate({scrollTop:570},750),p=2)),e(),o()}}function o(){0===p?($(".pic-2, .pic-3, .pic-4, .pic-5").css("opacity","0.35"),$(".pic-0, .pic-1").css("opacity","1")):1===p&&($(".pic-0, .pic-1, .pic-4, .pic-5").css("opacity","0.35"),$(".pic-2, .pic-3").css("opacity","1")),2===p&&($(".pic-2, .pic-3, .pic-0, .pic-1").css("opacity","0.35"),$(".pic-4, .pic-5").css("opacity","1"))}function e(){if(0===p){$(".mylio-mockup-side-container").animate({scrollTop:0},750);for(var i=0;14>i;i++)$("#preview-"+i).css("opacity","0.2");$("#preview-4").css("opacity","1")}else if(1===p){$(".mylio-mockup-side-container").animate({scrollTop:47},750);for(var i=0;14>i;i++)$("#preview-"+i).css("opacity","0.2");$("#preview-5").css("opacity","1")}else if(2===p){$(".mylio-mockup-side-container").animate({scrollTop:114},750);for(var i=0;14>i;i++)$("#preview-"+i).css("opacity","0.2");$("#preview-6").css("opacity","1")}}for(var s=0;16>s;s++)$("#mylio_userflow_image_"+s).css("background-image",'url("../img/project/mylio/dark_sprite.jpg")').css("background-repeat","no-repeat").css("background-position",-480*s+"px 0px"),$("#mylio_userflow_image_"+s).mouseenter(i(1,s)).mouseleave(i(0,s));$("#mylio_userflow_image_0").css("background-image",'url("../img/project/mylio/dark_sprite.jpg")').css("background-repeat","no-repeat").css("background-position","0px 0px");var p=0;o();for(var s=0;6>s;s++)$(".pic-"+s).click(c(s));$(".back").click(function(){0===p|1===p?($(".mylio-mockup-sort-container").animate({scrollTop:0},750),p=0):2===p&&($(".mylio-mockup-sort-container").animate({scrollTop:285},750),p=1),e(),o()}),$(".next").click(function(){0===p?($(".mylio-mockup-sort-container").animate({scrollTop:285},750),p=1):1===p|2===p&&($(".mylio-mockup-sort-container").animate({scrollTop:570},750),p=2),e(),o()}),$(".undo").click(function(){0===p?($(".pic-0, .pic-1").css("border","4px solid #212121"),$(".pic-0 img, .pic-1 img").css("-webkit-filter","none")):1===p?($(".pic-2, .pic-3").css("border","4px solid #212121"),$(".pic-2 img, .pic-3 img").css("-webkit-filter","none")):2===p&&($(".pic-4, .pic-5").css("border","4px solid #212121"),$(".pic-4 img, .pic-5 img").css("-webkit-filter","none"))});for(var s=0;14>s;s++)$(".side-preview").append('<div class="preview-pic" id="preview-'+s+'"><img src="../img/project/mylio/mockup/column_'+s+'.jpg"></div>');e(),$("#preview-4").click(function(){p=0,e(),$(".mylio-mockup-sort-container").animate({scrollTop:0},750),o()}),$("#preview-5").click(function(){p=1,e(),$(".mylio-mockup-sort-container").animate({scrollTop:285},750),o()}),$("#preview-6").click(function(){p=2,e(),$(".mylio-mockup-sort-container").animate({scrollTop:570},750),o()})});