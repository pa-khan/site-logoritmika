$(document).ready(function($) {

	/* Phone mask */
	// $('.input.input_phone input').mask('+7 (999) 999-99-99');
	
	$('.slider').slick({
		arrows: false,
		dots: true,
		fade: true
	});
	$('.nav a[href = dropnav]').click(function(event) {
		event.preventDefault();

		var subNav = $(this).parent('li').find('ul');
		subNav.toggle();

	});

	$('.nav-page a, .list_links a').click(function (event) {
		var id  = $(this).attr('href');
		if(id.charAt(0) == '#'){
			event.preventDefault();
			var top = $(id).offset().top - 50;
			$('body,html').animate({scrollTop: top}, 1000);
		}
	});

	$('.main-videos__link a').click(function(event) {
		event.preventDefault();
		$('.main-videos__item').css('display', 'inline-block');
		$(this).hide();
	});

	$('audio').mediaelementplayer({
		// Do not forget to put a final slash (/)
		pluginPath: 'https://cdnjs.com/libraries/mediaelement/',
		// this will allow the CDN to use Flash without restrictions
		// (by default, this is set as `sameDomain`)
		shimScriptAccess: 'always'
		// more configuration
	});
});