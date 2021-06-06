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