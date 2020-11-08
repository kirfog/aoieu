$(document).ready(function() {

    $(function() {
      $.scrollify({
        section : ".sect",
      });
    });

	$(".carousel-caption").animate({ 
        marginLeft: "+=9999px",
    }, 1000 );
	
	var sections = $('section'), nav = $('nav')	, nav_height = 100;
 
	$(window).on('scroll', function () {
  		var cur_pos = $(this).scrollTop();
		sections.each(function() {
	  
    		var top = $(this).offset().top - nav_height, 
    		    bottom = top + $(this).outerHeight(),
    		    
    		    menuColor = $(this).attr('menuColor');

    		if (cur_pos >= top && cur_pos <= bottom) {
				sections.removeClass('active');
				$(this).addClass('active');
				
				if (menuColor == "black"){
					nav.removeClass('navbar-dark');
					nav.addClass('navbar-light');
				}
				else {
					nav.removeClass('navbar-light');
					nav.addClass('navbar-dark');
				}

				nav.find('a').removeClass('active');
				nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
		
				//nav.find('a').css("color", menuColor);
				//nav.find('a[href="#'+$(this).attr('id')+'"]').css("color", "white");
    		}
  		});

  		if (cur_pos <= 500) {
			$('#backToTop').hide(200);
		}else {
			$('#backToTop').show(200);
		}
	});

	nav.find('a').on("click", function(){
		event.preventDefault();
		$(".navbar-collapse").collapse('hide');
		id = $(this).attr("href");
		scrollToID(id, 350);
	});


	$('#backToTop').on('click',function(){
		event.preventDefault();
		$("html, body").animate({ scrollTop: "0" });
	});

});

function scrollToID(id, speed){
	var targetOffset = $(id).offset().top;
	$('html,body').animate({scrollTop:targetOffset}, speed);
}