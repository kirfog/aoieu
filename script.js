$(document).ready(function() {
	
	//snapping
$('body').panelSnap();


$(".carousel-caption").animate({ 
        marginLeft: "+=9999px",
    }, 1000 );
	
	
	//scroling menu
var sections = $('section')
  , nav = $('nav')
  , nav_height = 100;
 //nav.outerHeight()
 
$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
  sections.each(function() {
	  
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
    if (cur_pos >= top && cur_pos <= bottom) {
      
      sections.removeClass('active');
      $(this).addClass('active');
	  
	  nav.find('a').parent().removeClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').parent().addClass('active');
	  
	  scolor = rgb2hex($(this).css("background-color"));
	  iscolor = invertColor(scolor);
	  console.log(scolor);
	  console.log(iscolor);
	  
    }
  });
});
			//menu_click_scroling
	nav.find('a').on("click", function(){
		event.preventDefault();
		id = $(this).attr("href");
		scrollToID(id, 800);
	});

});


function scrollToID(id, speed){
	var targetOffset = $(id).offset().top;
	$('html,body').animate({scrollTop:targetOffset}, speed);
}

function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    //return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
	return hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function invertColor(hexTripletColor) {
    var color = hexTripletColor;
    color = color.substring(1);           // remove #
    color = parseInt(color, 16);          // convert to integer
    color = 0xFFFFFF ^ color;             // invert three bytes
    color = color.toString(16);           // convert to hex
    color = ("000000" + color).slice(-6); // pad with leading zeros
    color = "#" + color;                  // prepend #
    return color;
}