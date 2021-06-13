import {$, noUiSlider, Inputmask} from './common';

var widthWindow = $(window).width();

$(window).on('resize', function(){
	widthWindow = $(window).width();
});

// Маска для телефона
Inputmask('+7 (999) 999-9999').mask('.js-phone');

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
		nextArrow: '<button id="next" type="button" class="btn-arr btn-arr_down"><svg class="icon ic-arrow-down" width="46" height="24"><use xlink:href="assets/sprites/sprite.svg#ic-arrow-down"></use></svg></button>',
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

// catalog popular slider
if($('.js-popular-slider').length){
	$('.js-popular-slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		prevArrow: '<button id="prev" type="button" class="btn-arr btn-arr_left"><svg class="icon ic-arrow-left" width="16" height="30"><use xlink:href="assets/sprites/sprite.svg#ic-arrow-left"></use></svg></button>',
		nextArrow: '<button id="next" type="button" class="btn-arr btn-arr_right"><svg class="icon ic-arrow-right" width="16" height="30"><use xlink:href="assets/sprites/sprite.svg#ic-arrow-right"></use></svg></button>',
		responsive: [
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
	$('.js-main-menu-arr').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('active');
		$(this).closest('.js-main-menu-link').siblings('.js-main-menu-sub').slideToggle(300);
	})
}

// open/close left menu
if($('.js-left-menu-arr').length){
	$('.js-left-menu-arr').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('active');
		$(this).closest('.js-left-menu-link').siblings('.js-left-menu-sub').slideToggle(300);
	})
}

// open/close item filter
if($('.js-filter-head').length){
	$('.js-filter-head').on('click', function(){
		$(this).closest('.js-filter-item').toggleClass('active');
		$(this).siblings('.js-filter-content').slideToggle(300);
	});
}

if($('.js-filter-btn').length){
	$('.js-filter-btn').on('click', function(){
		$(this).siblings('.js-filter').slideToggle(300);
		$(this).toggleClass('active');
	});
}

// range-slider
if($('.js-slider-range').length){
	var slider = document.getElementById('slider-range');
	var minRange = Number(slider.getAttribute('data-min'));
	var maxRange = Number(slider.getAttribute('data-max'));
	var start = Number(slider.getAttribute('data-cur-min'));
	var finish = Number(slider.getAttribute('data-cur-max'));
	
	noUiSlider.create(slider, {
		start: [start, finish],
		step: 5,
		connect: true,
		range: {
			'min': minRange,
			'max': maxRange
		},
	});

	var snapValues = [
		document.getElementById('slider-range-min'),
		document.getElementById('slider-range-max')
	];

	slider.noUiSlider.on('update', function (values, handle) {
		snapValues[handle].value = Math.round(values[handle]);
	});

	snapValues.forEach(function (input, handle) {
		input.addEventListener('change', function () {
			var valItem = this.value;
			var minValItem = Number(snapValues[0].value);
			var maxValItem = Number(snapValues[1].value);

			if(handle == 0){
				if((valItem < minRange) || (valItem > maxRange) || (valItem >= maxValItem)){
					valItem = minRange;
				}
			}else{
				if((valItem < minRange) || (valItem > maxRange) || (valItem <= minValItem)){
					valItem = maxRange;
				}
			}
			slider.noUiSlider.setHandle(handle, valItem);
		});
	});

	// Valid inputs
	$('.js-slider-range-min').on("change keyup input click", function() {
		if (this.value.match(/[^0-9 ]/g)) {
			this.value = this.value.replace(/[^0-9 ]/g, '');
		}
	});

	$('.js-slider-range-max').on("change keyup input click", function() {
		if (this.value.match(/[^0-9 ]/g)) {
			this.value = this.value.replace(/[^0-9 ]/g, '');
		}
	});
}

// unwrap block
if($('.js-unwrap-block').length){
	$('.js-unwrap-head').on('click',function(event){
		event.preventDefault();
		var $parent = $(this).parents('.js-unwrap-block');
		
		$parent.toggleClass('opened');
		if($parent.hasClass('opened')){
			$parent.children('.js-unwrap-content').slideDown(400);
		}else{
			$parent.children('.js-unwrap-content').slideUp(400);
		}
	});
}

// Слайдер продукта на детальной каталога
if($('.js-product-slider').length){
	$('.js-product-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.js-product-thumb-slider',
		prevArrow: '<button id="prev" type="button" class="btn-arr btn-arr_left"><svg class="icon ic-arrow-left" width="16" height="30"><use xlink:href="assets/sprites/sprite.svg#ic-arrow-left"></use></svg></button>',
		nextArrow: '<button id="next" type="button" class="btn-arr btn-arr_right"><svg class="icon ic-arrow-right" width="16" height="30"><use xlink:href="assets/sprites/sprite.svg#ic-arrow-right"></use></svg></button>',
		responsive: [
			{
			  breakpoint: 768,
			  settings: {
				arrows: true,
				fade: false,
			  }
			},
		]
	});

	$('.js-product-thumb-slider').slick({
		vertical: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.js-product-slider',
		focusOnSelect: true,
		prevArrow: '<button id="prev" type="button" class="product-arr product-arr_up"><svg class="icon ic-arrow-up" width="20" height="11"><use xlink:href="/assets/sprites/sprite.svg#ic-arrow-up"></use></svg></button>',
		nextArrow: '<button id="next" type="button" class="product-arr product-arr_down"><svg class="icon ic-arrow-down" width="20" height="11"><use xlink:href="/assets/sprites/sprite.svg#ic-arrow-down"></use></svg></button>',
		responsive: [
			{
				breakpoint: 1260,
				settings: {
					slidesToShow: 3,
					vertical: true,
					arrows: true,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 4,
					vertical: true,
					arrows: true,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 4,
					vertical: false,
					arrows: false,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 3,
					vertical: false,
					arrows: false,
				}
			},
		]
	});

	$('.js-product-slider').on("afterChange", function(event, slick, currentSlide, nextSlide){
		document.querySelector('.js-product-slider-video').contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
	});
}