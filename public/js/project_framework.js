for(var projectList=["Mylio Pair","SOM BIM Data Dashboard","Studiowangfei.com v1.0","Another Taobao Village 2","New York City Sub Rider-Readers","Inside x Insight","Another Taobao Village","San Francisco POPOS","W@RK","Another Leap","Urban v.s. Rural of China 1979- ","Instant Impressionism","Holistic Realm","Draw It","Closer"],projectID,projectTitle=$(".project_name").text(),i=0;i<projectList.length;i++)projectList[i]===projectTitle&&(projectID=i);var nextProject=function(){return projectID===projectData.length?projectData.length:projectID+1},previousProject=function(){return 0===projectID?0:projectID-1},ProjectTitleContainer=React.createClass({displayName:"ProjectTitleContainer",render:function(){return React.createElement("div",null,React.createElement("div",{className:"project_title"},projectData[projectID].name))}}),Link=React.createClass({displayName:"Link",render:function(){return React.createElement("div",null,React.createElement("a",{id:"linkNodes",href:this.props.weblink},this.props.website))}}),ProjectContainer=React.createClass({displayName:"ProjectContainer",render:function(){if(null!=projectData[projectID].relatedLinks)var e=projectData[projectID].relatedLinks.map(function(e){return React.createElement(Link,{weblink:e.weblink,website:e.website})});return React.createElement("div",null,React.createElement("div",{className:"project_container"},React.createElement("div",{className:"project_brief"},projectData[projectID].story,React.createElement("br",null),React.createElement("br",null),e,React.createElement("br",null),React.createElement("span",{className:"bold",id:"scroll"}," Scroll down")," ",projectData[projectID].scrollDown),React.createElement("div",{className:"project_img"})))}}),BottomContainer=React.createClass({displayName:"BottomContainer",render:function(){return React.createElement("div",null,React.createElement("div",{className:"bottom-section"},React.createElement("div",{className:"back_project"},React.createElement("a",{href:"../project.html"},"Back")),React.createElement("div",{className:"prev_next_project"},React.createElement("a",{href:projectData[previousProject()].projectUrl},"Prev"),"     ",React.createElement("a",{href:projectData[nextProject()].projectUrl},"Next"))),React.createElement("div",{className:"copyright"},React.createElement("span",{className:"left"}," "),React.createElement("span",null,"© 2010 - 2015 studiowangfei | all rights reserved")))}}),ProjectSlideContainer=React.createClass({displayName:"ProjectSlideContainer",render:function(){return React.createElement("div",null,React.createElement("div",{className:"project_slide_container"},React.createElement("div",{className:"project_close"},React.createElement("img",{src:"../img/close.png"})),React.createElement("div",{className:"project_slide"},React.createElement("div",{id:"project_arrow_left"},React.createElement("img",{src:"../img/arrow_left.png"})),React.createElement("div",{className:"project_slide_img"}),React.createElement("div",{id:"project_arrow_right"},React.createElement("img",{src:"../img/arrow_right.png"})))))}});React.render(React.createElement(ProjectTitleContainer,null),document.getElementById("projectTitleContainer")),React.render(React.createElement(ProjectContainer,null),document.getElementById("projectContainer")),React.render(React.createElement(BottomContainer,null),document.getElementById("bottomContainer")),React.render(React.createElement(ProjectSlideContainer,null),document.getElementById("projectSlideContainer")),$(document).ready(function(){function e(){var e=$(".feature_container").width();e>=840?($(".project_img").css("width","58%").css("margin","0 auto").css("height","560px"),$(".project_title").css("text-align","left"),$(".project_brief").css("width","35%").css("margin-right","7%").css("text-align","left")):($(".project_img").css("width",.9*e+"px").css("margin","0 auto").css("height","720px"),$(".project_title").css("text-align","center"),$(".project_brief").css("text-align","center").css("width",.75*e+"px").css("margin","0 auto 64px auto"))}function t(){$(".project_img > img:first").fadeOut(1e3).next().fadeIn(1e3).end().appendTo(".project_img")}function r(){p=setInterval(t,4e3)}function c(){clearInterval(p)}function a(){var e=$(window).height(),t=($(window).width(),$(".project_slide").height());e-t>0?$(".project_slide").css("margin-top",.5*(e-t)+"px"):$(".project_slide").css("margin-top","48px"),$("#project_arrow_left, #project_arrow_right").css("margin-top",.5*(t-72)+"px")}function o(e){return function(){m=e,$("body, html").css("overflow","hidden"),$(".project_slide_container").show(),$(".project_slide_img img").hide(),$("#project_big_"+e).fadeIn("slow"),a()}}function i(){0===m?(m=l-1,$(".project_slide_img img").hide(),$("#project_big_"+m).fadeIn("slow")):(m--,$(".project_slide_img img").hide(),$("#project_big_"+m).fadeIn("slow"))}function n(){m===l-1?(m=0,$(".project_slide_img img").hide(),$("#project_big_"+m).fadeIn("slow")):(m++,$(".project_slide_img img").hide(),$("#project_big_"+m).fadeIn("slow"))}null===projectData[projectID].scrollDown?$("#scroll").css("display","none"):$("#scroll").css("display","initial"),$("#scroll").click(function(){$("body, html").animate({scrollTop:projectData[projectID].scrollDownValue},800)});for(var l=projectData[projectID].imgNum,s=0;l>s;s++)$(".project_img").append('<img id="project_small_'+s+'" src="'+projectData[projectID].imgUrl+s+'_big.jpg"/>'),$(".project_slide_img").append('<img id="project_big_'+s+'" src="'+projectData[projectID].imgUrl+s+'_big.jpg"/>');e(),$(window).resize(function(){e()}),$(".project_img > img:gt(0)").hide();var p;r(),$(".project_img").hover(function(){c()},function(){r()}),$(window).resize(function(){a()});for(var m=0,d=0;l>d;d++)$("#project_small_"+d).click(o(d));$("#project_arrow_left").click(i),$("#project_arrow_right").click(n),$(".project_slide_img img").click(n),$(document).keyup(function(e){27==e.keyCode&&($("body, html").css("overflow","auto"),$(".project_slide_container").hide())}),$(".project_close").click(function(){$("body, html").css("overflow","auto"),$(".project_slide_container").hide()})});
