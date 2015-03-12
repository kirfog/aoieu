$(document).ready(function() {
	
	//$(".nav").find(".active").removeClass("active");
	//$("a[way=window.location.hash]").parent().addClass(active");
	
	$(".nav a, .navbar-brand").on("click", function(){
		event.preventDefault();
		
		$(".nav").find(".active").removeClass("active");
		$(this).parent().addClass("active");
		
		window.location.hash = $(this).attr("way");
		scrollToID('#' + window.location.hash, 1000);
		console.log(window.location.hash);
	});
	
	
	// navigation click actions	

	// scroll to top action
	$('.scroll-top').on('click', function(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop:0}, 'slow'); 		
	});
	// mobile nav toggle
	$('#nav-toggle').on('click', function (event) {
		event.preventDefault();
		$('#main-nav').toggleClass("open");
	});
});

// scroll function
function scrollToID(id, speed){
	var offSet = 0;
	var targetOffset = $(id).offset().top - offSet;
	var mainNav = $('#main-nav');
	$('html,body').animate({scrollTop:targetOffset}, speed);
	if (mainNav.hasClass("open")) {
		mainNav.css("height", "1px").removeClass("in").addClass("collapse");
		mainNav.removeClass("open");
	}
}
if (typeof console === "undefined") {
    console = {
        log: function() { }
    };
}