// Слайдеры
$(document).ready(function() {
	$('.slider').slick({
		arrows:true,
		adaptiveHeight:true,
		slidesToShow:1,
		slidesToScroll:1,
		variableWidth:true,
		speed:1500,
		waitForAnimate:false,
		easing:'ease',
		touchTreshhold:15,
		centerMode:false
	});
	
});