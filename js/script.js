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
        menuColor = $(this).attr('menuColor');
		if (typeof menuColor == typeof undefined && menuColor == false) {
    		menuColor = 'white';
		}

			console.log(menuColor);
			console.log(typeof(menuColor));
		
    if (cur_pos >= top && cur_pos <= bottom) {
		sections.removeClass('active');
		$(this).addClass('active');
		nav.find('a').parent().removeClass('active');
		nav.find('a[href="#'+$(this).attr('id')+'"]').parent().addClass('active');
		nav.find('a').css("color", menuColor);
		nav.find('a[href="#'+$(this).attr('id')+'"]').css("color", "white");
    }
  });
});
			//menu_click_scroling
	nav.find('a').on("click", function(){
		event.preventDefault();
	
			$(".navbar-collapse").collapse('hide');//hides mobile menu
		
		id = $(this).attr("href");
		scrollToID(id, 800);
	});

});

function scrollToID(id, speed){
	var targetOffset = $(id).offset().top;
	$('html,body').animate({scrollTop:targetOffset}, speed);
}

function rgb2hex(rgb){
 rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
 return (rgb && rgb.length === 4) ? 
  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
}

function getContrast50(hexcolor){
    return (parseInt(hexcolor, 16) > 0xffffff/2) ? 'black':'white';
}