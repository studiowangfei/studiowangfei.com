// do NOT write comment like"// xxxxxxxx" in JSX syntax, it cannot be parsed or skipped

// get page type info by testing if 'feature_container' exists,
// and decide the  current section from DOM
var pageType;
if (!document.getElementsByClassName('feature_container')[0]){
  pageType = $('.page_type').text();
}else{
  pageType = "projectEach";
}

// deciding url path and the current section page by pageType
var urlMap;
var projectPage, aboutPage, blogPage, contactPage;

if (pageType == "projectIndex" || pageType == "projectEach"){
  projectPage = "current";
  aboutPage = null;
  blogPage = null;
  contactPage = null;
}else if (pageType == "about"){
  projectPage = null;
  aboutPage = "current";
  blogPage = null;
  contactPage = null;
}else if (pageType == "blog"){
  projectPage = null;
  aboutPage = null;
  blogPage = "current";
  contactPage = null;
}else{
  projectPage = null;
  aboutPage = null;
  blogPage = null;
  contactPage = "current";
}

if (pageType == "projectEach"){
  urlMap = "../";
}else{
  urlMap = "";
}

// top bar framework for index and project pages
// to make React-constructed element perfectly match html-constructed element spacing, add " " before each section name
// TopContainer responsive to window width, see setting in css
var TopContainer = React.createClass({displayName: "TopContainer",
  render: function(){
    return (
      React.createElement("div", null, 
        React.createElement("div", {className: "top-placeholder"}
        ), 
        React.createElement("div", {className: "top-container"}, 
          React.createElement("div", {className: "top-section"}, 
            React.createElement("div", {className: "left"}, 
              React.createElement("a", {id: "logo", href: "http://www.studiowangfei.com/"}, "Studiowangfei")
            ), 
            React.createElement("ul", {className: "right"}, 
              React.createElement("li", null, React.createElement("a", {className: "item", id: projectPage, href: urlMap+"project.html"}, " Project")), 
              React.createElement("li", null, React.createElement("a", {className: "item", id: aboutPage, href: urlMap+"about.html"}, " About")), 
              React.createElement("li", null, React.createElement("a", {className: "item", id: blogPage, href: urlMap+"blog.html"}, " Blog")), 
              React.createElement("li", null, React.createElement("a", {className: "item", id: contactPage, href: urlMap+"contact.html"}, " Contact"))
            ), 
            React.createElement("div", {id: "menu-icon"})
          ), 

          React.createElement("ul", {className: "hiddenList"}, 
            React.createElement("li", null, React.createElement("a", {className: "item", href: urlMap+"project.html"}, " Project")), 
            React.createElement("li", null, React.createElement("a", {className: "item", href: urlMap+"about.html"}, " About")), 
            React.createElement("li", null, React.createElement("a", {className: "item", href: urlMap+"blog.html"}, " Blog")), 
            React.createElement("li", null, React.createElement("a", {className: "item", href: urlMap+"contact.html"}, " Contact"))
          )

        )
      )
    );
  }
});

React.render(
  React.createElement(TopContainer, null),
  document.getElementById('topContainer')
);

// standard controller for all pages
$(document).ready(function(){
  var containerWidth = $('.main-container').width();

  // back to top when reload
  $(window).on('beforeunload', function(){
    $(window).scrollTop(0);
  });

  // top container color and shadow effect
  function headerEffect(){
    var topMargin = $(window).scrollTop();
    if (topMargin == 0 && $('#menu-icon').css('display') == 'none'){
      $('.top-container')
      .removeClass('addColorShadow');
    }else{
      $('.top-container')
      .addClass('addColorShadow');
    }
  }

  // top container responsive to window width
  function headerResponsive(){
    if (containerWidth > 840){
      // hide medu button and cascade list
      $('#logo')
      .css('font-size', '14px');

      $('#menu-icon')
      .css('display', 'none');

      $('.hiddenList')
      .css('display', 'none');

      $('.top-container')
      .removeClass('extendHeight');

      $('.right')
      .css('display', 'flex');

      // adding or removing effect for top container
      $(window).scroll(function(){
        headerEffect();
      });
    }else{
      // hide horizontal menu and show menu button
      $('#logo')
      .css('font-size', '18px');

      $('.top-container')
      .addClass('addColorShadow');

      $('#menu-icon')
      .css('display', 'initial');

      $('.right')
      .css('display', 'none');
    }
  }

  // click the menu icon to expand the list
  $('#menu-icon').click(function(){
    $('#menu-icon')
    .toggleClass('menu-icon-transform')

    $('.top-container')
    .toggleClass('extendHeight');

    $('.hiddenList').fadeToggle(750);
  });

  headerEffect();
  headerResponsive();
  $(window).resize(function(){
    containerWidth = $('.main-container').width();
    $('#menu-icon')
    .removeClass('menu-icon-transform');
    headerResponsive();
    headerEffect();
  });
});
