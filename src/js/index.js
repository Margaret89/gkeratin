import {$} from './common';

// move-up
$(window).on('scroll', function(){
	if($(this).scrollTop()>300){
		$('.js-move-up').addClass('visible');
	}else{
		$('.js-move-up').removeClass('visible');
	}
});
$('.js-move-up').on('click', function(){$('body,html').animate({scrollTop:0},800);return false;});

// show/hide form search
if($('.js-search-form').length){
	$('.js-search-form-btn').on('click', function() {
		$(this).closest('.js-search-form').addClass('active');
	});
	
	$(document).on('click', function(event) {
		if ($(event.target).closest(".js-search-form").length) return;
		$('.js-search-form').removeClass('active');
		event.stopPropagation();
	});
}

// top slider
if($('.js-top-slider').length){
	$('.js-top-slider-list').slick({
		infinite: true,
		vertical: true,
		prevArrow: $(".js-btn-arr-up"),
		nextArrow: $(".js-btn-arr-down"),
	});
}