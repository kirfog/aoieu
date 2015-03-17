$(document).ready(function() {
	
$('body').panelSnap();
	
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
      nav.find('a').parent().removeClass('active');
      sections.removeClass('active');
      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').parent().addClass('active');
    }
	
  });
});

	nav.find('a').on("click", function(){
		event.preventDefault();
		id = $(this).attr("href");
		scrollToID(id, 800);
	});
	
	 nav.find('a').click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });

});


function scrollToID(id, speed){
	var targetOffset = $(id).offset().top;
	$('html,body').animate({scrollTop:targetOffset}, speed);
}