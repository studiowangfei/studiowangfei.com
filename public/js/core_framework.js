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
}else if (pageType == "essay"){
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
              React.createElement("li", null, React.createElement("a", {className: "item", id: aboutPage, href: urlMap+"about.html"}, " About")),
              React.createElement("li", null, React.createElement("a", {className: "item", id: projectPage, href: urlMap+"project.html"}, " Project")),
              React.createElement("li", null, React.createElement("a", {className: "item", id: blogPage, href: urlMap+"blog.html"}, " Essay")),
              React.createElement("li", null, React.createElement("a", {className: "item", id: contactPage, href: urlMap+"contact.html"}, " Contact"))
            ),
            React.createElement("div", {id: "menu-icon"})
          ),

          React.createElement("ul", {className: "hiddenList"},
            React.createElement("li", null, React.createElement("a", {className: "item", href: urlMap+"project.html"}, " Project")),
            React.createElement("li", null, React.createElement("a", {className: "item", href: urlMap+"about.html"}, " About")),
            React.createElement("li", null, React.createElement("a", {className: "item", href: urlMap+"blog.html"}, " Essay")),
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

  // back to top when reload
  $(window).on('beforeunload', function(){
    $(window).scrollTop(0);
  });

  // header responsive to window width
  function headerResponsive(){
    var containerWidth = $(window).width();
    if (containerWidth > 720){
      $('.top-container')
      .css('height', '64px');

      $('#menu-icon')
      .css('display', 'none')
      .removeClass('menu-icon-transform');

      $('.top-section .right')
      .css('display', 'flex')
      .css('display', '-webkit-flex')
      .css('display', '-ms-flex');

      $('.hiddenList')
      .css('display', 'none');

      $('#logo')
      .css('font-size', '14px')
      //.css('color', '#b0b0b0');

    }else{

      $('#menu-icon')
      // to work for IE, don't use "initial", use "inline" instead
      .css('display', 'inline');

      $('.top-section .right')
      .css('display', 'none');

      $('#logo')
      .css('font-size', '18px')
      .css('color', 'black');
    }
  }

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

  headerResponsive();
  headerEffect();

  $(window).scroll(function(){
    headerEffect();
    headerResponsive();
  });

  $(window).resize(function(){
    headerEffect();
    headerResponsive();
  });

  // click the menu icon to expand the list
  $('#menu-icon').click(function(){
    $('#menu-icon')
    .toggleClass('menu-icon-transform')

    if($('.top-container').height() < 244){
      $('.top-container').css('height', '248px');
    }else{
      $('.top-container').css('height', '64px');
    }

    $('.hiddenList').fadeToggle(250);
  });


});
