var pageType;pageType=document.getElementsByClassName("feature_container")[0]?"projectEach":$(".page_type").text();var urlMap,projectPage,aboutPage,blogPage,contactPage;"projectIndex"==pageType||"projectEach"==pageType?(projectPage="current",aboutPage=null,blogPage=null,contactPage=null):"about"==pageType?(projectPage=null,aboutPage="current",blogPage=null,contactPage=null):"blog"==pageType?(projectPage=null,aboutPage=null,blogPage="current",contactPage=null):(projectPage=null,aboutPage=null,blogPage=null,contactPage="current"),urlMap="projectEach"==pageType?"../":"";var TopContainer=React.createClass({displayName:"TopContainer",render:function(){return React.createElement("div",null,React.createElement("div",{className:"top-placeholder"}),React.createElement("div",{className:"top-container"},React.createElement("div",{className:"top-section"},React.createElement("div",{className:"left"},React.createElement("a",{id:"logo",href:"http://www.studiowangfei.com/"},"Studiowangfei")),React.createElement("ul",{className:"right"},React.createElement("li",null,React.createElement("a",{className:"item",id:projectPage,href:urlMap+"project.html"}," Project")),React.createElement("li",null,React.createElement("a",{className:"item",id:aboutPage,href:urlMap+"about.html"}," About")),React.createElement("li",null,React.createElement("a",{className:"item",id:blogPage,href:urlMap+"blog.html"}," Blog")),React.createElement("li",null,React.createElement("a",{className:"item",id:contactPage,href:urlMap+"contact.html"}," Contact"))),React.createElement("div",{id:"menu-icon"})),React.createElement("ul",{className:"hiddenList"},React.createElement("li",null,React.createElement("a",{className:"item",href:urlMap+"project.html"}," Project")),React.createElement("li",null,React.createElement("a",{className:"item",href:urlMap+"about.html"}," About")),React.createElement("li",null,React.createElement("a",{className:"item",href:urlMap+"blog.html"}," Blog")),React.createElement("li",null,React.createElement("a",{className:"item",href:urlMap+"contact.html"}," Contact")))))}});React.render(React.createElement(TopContainer,null),document.getElementById("topContainer")),$(document).ready(function(){function e(){var e=$(window).scrollTop();0==e&&"none"==$("#menu-icon").css("display")?$(".top-container").removeClass("addColorShadow"):$(".top-container").addClass("addColorShadow")}function t(){a>840?($("#logo").css("font-size","14px"),$("#menu-icon").css("display","none"),$(".hiddenList").css("display","none"),$(".top-container").removeClass("extendHeight"),$(".right").css("display","flex"),$(window).scroll(function(){e()})):($("#logo").css("font-size","18px"),$(".top-container").addClass("addColorShadow"),$("#menu-icon").css("display","initial"),$(".right").css("display","none"))}var a=$(".main-container").width();$(window).on("beforeunload",function(){$(window).scrollTop(0)}),$("#menu-icon").click(function(){$("#menu-icon").toggleClass("menu-icon-transform"),$(".top-container").toggleClass("extendHeight"),$(".hiddenList").fadeToggle(750)}),e(),t(),$(window).resize(function(){a=$(".main-container").width(),$("#menu-icon").removeClass("menu-icon-transform"),t(),e()})});
