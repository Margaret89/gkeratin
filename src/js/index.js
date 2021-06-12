import {$} from './common';

var widthWindow = $(window).width();

$(window).on('resize', function(){
	widthWindow = $(window).width();
});

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
		$(this).closest('.js-search-form').toggleClass('active');

		if(widthWindow < 992){
			$('.js-search-form-content').slideToggle(300);
		}
	});
	
	$(document).on('click', function(event) {
		if ($(event.target).closest(".js-search-form").length) return;
		$('.js-search-form').removeClass('active');

		if(widthWindow < 992){
			$('.js-search-form-content').slideUp(300);
		}
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
		responsive: [
			{
				breakpoint: 768,
				settings: {
					vertical: false,
					arrows: false,
				}
			},
		]
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
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		]
	});
}

// open/close header contacts
if($('.js-btn-contacts').length){
	$('.js-btn-contacts').on('click', function() {
		$(this).toggleClass('active');
		$('.js-contacts').slideToggle(300);
	})
}

$(document).on('click', function(event) {
	if(widthWindow < 992){
		if ($(event.target).closest(".js-btn-contacts").length) return;
		$('.js-btn-contacts').removeClass('active');
		$('.js-contacts').slideUp(300);
		event.stopPropagation();
	}
});

// open/close main menu
if($('.js-btn-menu').length){
	$('.js-btn-menu').on('click', function() {
		$(this).toggleClass('active');
		$('.js-header-nav').slideToggle(300);
		$('.js-body').toggleClass('no-scroll');
	})
}

if($('.js-main-menu-arr').length){
	$('.js-main-menu-arr').on('click', function() {
		$(this).toggleClass('active');
		$(this).closest('.js-main-menu-link').siblings('.js-main-menu-sub').slideToggle(300);
	})
}