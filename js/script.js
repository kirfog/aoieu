$(document).ready(function() {

	$(window).scroll(function () { 

   $('#slow').css({
      'top' : -($(this).scrollTop()/3)+"px",
      "background-color" : "red"
   }); 

});
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




$(document).ready(function() {

	for (i=0; i<144; i++){
		$('#game').append('<div class="col-xs-1 card" id="c'+ i +'" class="card">'+ i +'</div>');
	}

	$('.card').on('click', function(){

		$(this).css("background-color", "white");

	});
	
});
