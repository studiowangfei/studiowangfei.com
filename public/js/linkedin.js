$(document).ready(function(){function o(o){return function(){for(var t=0;11>t;t++)$("#img_"+t).css("opacity","0");$("#img_"+o).css("opacity","1")}}for(var t=0;5>t;t++)$("#button_"+t).mouseenter(o(t+1)).mouseleave(o(0)),$("#button_"+t).click(o(t+6))});