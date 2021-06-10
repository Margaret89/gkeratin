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
		appendArrows: $('.js-top-slider-arr'),
		prevArrow: '<button id="prev" type="button" class="btn-arr btn-arr_up"><svg class="icon ic-arrow-up" width="46" height="24"><use xlink:href="assets/sprites/sprite.svg#ic-arrow-up"></use></svg></button>',
		nextArrow: '<button id="next" type="button" class="btn-arr btn-arr_left"><svg class="icon ic-arrow-down" width="46" height="24"><use xlink:href="assets/sprites/sprite.svg#ic-arrow-down"></use></svg></button>',
	});
}

// catalog slider
if($('.js-cat-list-slider').length){
	$('.js-cat-list-slider').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		prevArrow: '<button id="prev" type="button" class="btn-arr btn-arr_left"><svg class="icon ic-arrow-left" width="16" height="30"><use xlink:href="assets/sprites/sprite.svg#ic-arrow-left"></use></svg></button>',
		nextArrow: '<button id="next" type="button" class="btn-arr btn-arr_right"><svg class="icon ic-arrow-right" width="16" height="30"><use xlink:href="assets/sprites/sprite.svg#ic-arrow-right"></use></svg></button>',
	});
}