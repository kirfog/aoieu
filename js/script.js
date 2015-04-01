$(document).ready(function() {

<<<<<<< HEAD
		//snapping
	$('body').panelSnap();
=======
	$(window).scroll(function () { 

   $('#slow').css({
      'top' : -($(this).scrollTop()/3)+"px",
      "background-color" : "red"
   }); 

});
		//snapping
	//$('body').panelSnap();
	$('body').stellar();
>>>>>>> origin/master


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
<<<<<<< HEAD
  
  
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

  if (cur_pos <= 300) {
		$('#backToTop').hide(200);
	}else {
		$('#backToTop').show(200);
	}


});//scrolling

//menu_click_scroling
	nav.find('a').on("click", function(){
		event.preventDefault();
		$(".navbar-collapse").collapse('hide');//hides mobile menu
=======
  sections.each(function() {
	  
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
		scolor = rgb2hex($(this).css("background-color"));
		iscolor = getContrast50(scolor);
		iiscolor = getContrast50(iscolor);
		
    if (cur_pos >= top && cur_pos <= bottom) {

		sections.removeClass('active');
		$(this).addClass('active');
	  
		nav.find('a').parent().removeClass('active');
		nav.find('a[href="#'+$(this).attr('id')+'"]').parent().addClass('active');
	  
		nav.find('a').css("color",iscolor);
		nav.find('a[href="#'+$(this).attr('id')+'"]').css("color",iiscolor);
    }
  });
});
			//menu_click_scroling
	nav.find('a').on("click", function(){
		event.preventDefault();
	
			$(".navbar-collapse").collapse('hide');//hides mobile menu
		
>>>>>>> origin/master
		id = $(this).attr("href");
		scrollToID(id, 800);
	});

<<<<<<< HEAD

	$('#backToTop').on('click',function(){
		event.preventDefault();
		$("html, body").animate({ scrollTop: "0" });
	});

=======
>>>>>>> origin/master
});

function scrollToID(id, speed){
	var targetOffset = $(id).offset().top;
	$('html,body').animate({scrollTop:targetOffset}, speed);
<<<<<<< HEAD
=======
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
>>>>>>> origin/master
}