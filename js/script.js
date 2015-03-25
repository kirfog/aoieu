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
        bottom = top + $(this).outerHeight(),
        menuColor = $(this).attr('menuColor');

		menuColor = (typeof menuColor == typeof undefined) ? "white" : menuColor;
		
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

	$('#backToTop').on('click',function(){
		('html,body').animate(0, 500);
	});

});

function scrollToID(id, speed){
	var targetOffset = $(id).offset().top;
	$('html,body').animate({scrollTop:targetOffset}, speed);
}