$(document).ready(function() {
	
    $(function() {
      $.scrollify({
        section : ".sect",
      });
    });

	let sections = $('section'), nav = $('nav')	, nav_height = 100;
 
	$(window).on('scroll', function () {
  		let cur_pos = $(this).scrollTop();
		sections.each(function() {

    		let top = $(this).offset().top - nav_height, bottom = top + $(this).outerHeight()

    		if (cur_pos >= top && cur_pos <= bottom) {
				nav.find('a').removeClass('active');
				nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    		}
  		});

  		if (cur_pos <= 500) {
			$('#backToTop').hide(200);
		}else {
			$('#backToTop').show(200);
		}
	});


	$('#backToTop').on('click',function(){
		$("html, body").animate({ scrollTop: "0" });
	});
});

function scrollToID(id, speed){
	let targetOffset = $(id).offset().top;
	$('html,body').animate({scrollTop:targetOffset}, speed);
}