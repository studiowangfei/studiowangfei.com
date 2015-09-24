// do NOT write comment like"// xxxxxxxx" in JSX syntax, it cannot be parsed or skipped

////////////////// project index setting
var projectList = [
  "Mylio Pair",
  "Blooday",
  "BIM Data Dashboard",
  "Zoom Video New Home-Landing",
  "LinkedIn Welcome-Back Portal",
  "New York City Sub Rider-Readers",
  "Another Taobao Village 2",
  "San Francisco POPOS",
  "Studiowangfei.com v1.0",
  "Another Taobao Village 1",
  "Inside x Insight",
  "W@RK",
  "Another Leap",
  "Urban v.s. Rural of China 1979- ",
  "Instant Impressionism",
  "Holistic Realm",
  "Draw It",
  "Closer"
];

var projectID;
var projectTitle = $('.project_name').text();

for (var i=0; i<projectList.length; i++){
  if (projectList[i] === projectTitle){
    projectID = i;
  }
}

var nextProject = function(){
  if (projectID === projectData.length){
    return projectData.length
  }else{
    return projectID+1
  }
}

var previousProject = function(){
  if (projectID === 0){
    return 0
  }else{
    return projectID-1
  }
}

///////////// React.js components
// component structure
/* -TopContainer
   -ProjectTitleContainer
   -ProjectContainer
    -Link
   -BottomContainer */
/* -ProjectSlideContainer */


var ProjectTitleContainer = React.createClass({displayName: "ProjectTitleContainer",
  render: function(){
    return (
      React.createElement("div", null,
        React.createElement("div", {className: "project_title"},
          projectData[projectID].name
        )
      )
    );
  }
});

var Link = React.createClass({displayName: "Link",
  render: function(){
    return (
      React.createElement("div", null,
        React.createElement("a", {id: "linkNodes", href: this.props.weblink},
          this.props.website
        )
      )
    );
  }
});

var ProjectContainer = React.createClass({displayName: "ProjectContainer",
  render: function(){
    if(projectData[projectID].relatedLinks != null){
      var linkNodes = projectData[projectID].relatedLinks.map(function(link){
        return (
          React.createElement(Link, {weblink: link.weblink, website: link.website}
          )
        );
      });
    }
    return (
      React.createElement("div", null,
        React.createElement("div", {className: "project_container"},

          React.createElement("div", {className: "project_brief"},
            projectData[projectID].story,
            React.createElement("br", null), React.createElement("br", null),
            linkNodes,
            React.createElement("br", null),
            React.createElement("span", {className: "bold", id: "scroll"}, " Scroll down"), " ", projectData[projectID].scrollDown
          ),

          React.createElement("div", {className: "project_img"}
          )
        )
      )
    );
  }
});

var BottomContainer = React.createClass({displayName: "BottomContainer",
  render: function(){
    return (
      React.createElement("div", null,
        React.createElement("div", {className: "bottom-section"},
          React.createElement("div", {className: "back_project"},
            React.createElement("a", {href: "../project.html"}, "Back")
          ),
          React.createElement("div", {className: "prev_next_project"},
            React.createElement("a", {href: projectData[previousProject()].projectUrl}, "Prev"), "     ",
            React.createElement("a", {href: projectData[nextProject()].projectUrl}, "Next")
          )
        ),
        React.createElement("div", {className: "copyright"},
          React.createElement("span", {className: "left"}, " "),
          React.createElement("span", null,
            "© 2010 - 2015 studiowangfei | all rights reserved"
          )
        )
      )
    );
  }
});

var ProjectSlideContainer = React.createClass({displayName: "ProjectSlideContainer",
  render: function(){
    return (
      React.createElement("div", null,
        React.createElement("div", {className: "project_slide_container"},
          React.createElement("div", {className: "project_close"},
            React.createElement("img", {src: "../img/close.png"})
          ),
          React.createElement("div", {className: "project_slide"},
            React.createElement("div", {id: "project_arrow_left"}, React.createElement("img", {src: "../img/arrow_left.png"})
            ),
            React.createElement("div", {className: "project_slide_img"}
            ),
            React.createElement("div", {id: "project_arrow_right"}, React.createElement("img", {src: "../img/arrow_right.png"})
            )
          )
        )
      )
    );
  }
});

React.render(
  React.createElement(ProjectTitleContainer, null),
  document.getElementById('projectTitleContainer')
);

React.render(
  React.createElement(ProjectContainer, null),
  document.getElementById('projectContainer')
);

React.render(
  React.createElement(BottomContainer, null),
  document.getElementById('bottomContainer')
);

React.render(
  React.createElement(ProjectSlideContainer, null),
  document.getElementById('projectSlideContainer')
);

/////////////////// jQuery controller for all projects //////////////

$(document).ready(function(){

  // hide scroll when the project doesn't need it
  if(projectData[projectID].scrollDown === null){
    $('#scroll').css('display', 'none');
  }else{
    $('#scroll').css('display', 'initial');
  }

  // scroll down certain value when click
  $('#scroll').click(function(){
    $('body, html').animate({ scrollTop: projectData[projectID].scrollDownValue }, 600);
  });

  // slideshow image append
  var img_number = projectData[projectID].imgNum;

  for(var x=0;x<img_number;x++){
    $('.project_img').append(
      '<img id="project_small_' + x + '" src="' + projectData[projectID].imgUrl + x +'_big.jpg"/>'
    );
    $('.project_slide_img').append(
      '<img id="project_big_' + x + '" src="' + projectData[projectID].imgUrl + x +'_big.jpg"/>'
    );
  }

  // project image and brief text change layout according to window width
  function projectImageLayout(){
    var containerWidth = $('.feature_container').width();
    if (containerWidth >= 840){
      $('.project_img')
      .css('width', '58%')
      .css('margin', '0 auto')
      .css('height', '400px');

      $('.project_title')
      .css('text-align', 'left');

      $('.project_brief')
      .css('width', '35%')
      .css('margin-right', '7%')
      .css('text-align', 'left');

      $('.feature_descript')
      .css('width', '85%');

    }else{

      $('.project_img')
      .css('width', containerWidth*0.9 + 'px')
      .css('margin', '0 auto')
      .css('height', containerWidth*0.7 + 'px');

      $('.project_title')
      .css('text-align', 'center');

      $('.project_brief')
      .css('text-align', 'center')
      .css('width', containerWidth*0.9 + 'px')
      .css('margin', '0 auto 64px auto');

      $('.feature_descript')
      .css('width', containerWidth*0.85 + 'px');
    }
  }

  projectImageLayout();

  $(window).resize(function(){
    projectImageLayout()
  });

  // project slideshow (automatic on page top-right)
  $(".project_img > img:gt(0)").hide();

  function slideSwitch(){
    $('.project_img > img:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('.project_img');
  }

  //slideshow pause when hover
  var theInterval;
  function startSlide() {
    theInterval = setInterval(slideSwitch, 4000);
  }

  function stopSlide() {
    clearInterval(theInterval);
  }

  startSlide();
  $('.project_img').hover(function(){
    stopSlide();
  }, function(){
    startSlide();
  });

  //project slideshow new window & slide resize
  function slide_resize(){
    // slide responsive to window, initial and resize
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();
    var slideHeight = $('.project_slide').height();
    if(windowHeight-slideHeight>0){
      $('.project_slide').css('margin-top', (windowHeight-slideHeight)*0.5+'px');
    }else{
      $('.project_slide').css('margin-top', '48px');
    }
    $('#project_arrow_left, #project_arrow_right').css('margin-top', (slideHeight-72)*0.5+'px');
  }

  $(window).resize(function(){
    slide_resize();
  });

  // slideshow show up and show in sequence
  var slideshowIndex = 0;
  function project_slideshow(id){
    return function(){
      slideshowIndex = id;
      $('body, html').css('overflow', 'hidden');
      $('.project_slide_container').show();
      $('.project_slide_img img').hide();
      $('#project_big_'+id).fadeIn('slow');
      slide_resize();
    }
  }

  function project_slide_prev(){
    if (slideshowIndex === 0) {
      slideshowIndex = img_number-1;
      $('.project_slide_img img').hide();
      $('#project_big_'  + slideshowIndex).fadeIn('slow');
    } else {
      slideshowIndex--;
      $('.project_slide_img img').hide();
      $('#project_big_'  + slideshowIndex).fadeIn('slow');
    }
  }

  function project_slide_next(){
    if (slideshowIndex === img_number-1) {
      slideshowIndex = 0;
      $('.project_slide_img img').hide();
      $('#project_big_'  + slideshowIndex).fadeIn('slow');
    } else {
      slideshowIndex++;
      $('.project_slide_img img').hide();
      $('#project_big_'  + slideshowIndex).fadeIn('slow');
    }
  }

  for(var y=0;y<img_number;y++){
    $('#project_small_'+y).click(project_slideshow(y));
  }

  $('#project_arrow_left').click(project_slide_prev);
  $('#project_arrow_right').click(project_slide_next);
  $('.project_slide_img img').click(project_slide_next);

  // escape key setting, keycode '27', only for standard project components
  $(document).keyup(function(e) {
    if (e.keyCode == 27) {
      $('body, html').css('overflow', 'auto');
      $('.project_slide_container').hide();
    }
  });

  // close button setting, only for standard project components
  $('.project_close').click(function(){
    $('body, html').css('overflow', 'auto');
    $('.project_slide_container').hide();
  });

});
