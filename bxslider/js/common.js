$(document).ready(function() {

	// Bxslider with captions
	$('.bxslider_caption').bxSlider({
		mode: 'fade',
		captions: true,
	});

	// Bxslider Auto show with Start / Stop Controls
	$('.bxslider_start_stop').bxSlider({
		auto: true,
		autoControls: true
	});	

	// Bxslider Manual show without infinite loop
	$('.bxslider_manual').bxSlider({
		infiniteLoop: false,
		hideControlOnEnd: true
	});

	// Bxslider using adaptiveHeight
	$('.bxslider_adaptive').bxSlider({
		adaptiveHeight: true,
		mode: 'fade'
	});

	// Bxslider Carousel Standard
	$('.carousel_standard').bxSlider({
		slideWidth: 370,
    	minSlides: 2,
    	maxSlides: 3,
    	slideMargin: 10
	});

	// Bxslider Carousel Locked number of slide
	$('.carousel_lock').bxSlider({
		slideWidth: 370,
    	minSlides: 2,
    	maxSlides: 2,
    	slideMargin: 10
	});

	// Bxslider Carousel Too large Slidewidth
	$('.carousel_toolarge').bxSlider({
		slideWidth: 5000,
    	minSlides: 2,
    	maxSlides: 4,
    	slideMargin: 10
	});

	// Bxslider Carousel - Move number of slides (moveSlides)
	$('.carousel_moveslide').bxSlider({
	    slideWidth: 300,
	    minSlides: 2,
	    maxSlides: 3,
	    moveSlides: 1,
	    slideMargin: 10
	});

	// Bxslider Carousel - Infinite carousel with odd number of slides
	$('.carousel_odd').bxSlider({
	    slideWidth: 300,
	    minSlides: 3,
	    maxSlides: 3,
	    moveSlides: 3,
	    slideMargin: 10
	});

	// Bxslider Carousel - Start on a different slide
	$('.carousel_different').bxSlider({
	    slideWidth: 300,
	    minSlides: 2,
	    maxSlides: 3,
	    startSlide: 2,
	    slideMargin: 10
	});

	// Bxslider Carousel - Not enough slides
	$('.carousel_notenough').bxSlider({
	    slideWidth:380,
	    minSlides: 4,
	    maxSlides: 5,	    
	    slideMargin: 10
	});

	// Bxslider Carousel - Vertical Carousel
	$('.carousel_vertical').bxSlider({
	    mode: 'vertical',
	    auto: true,
	    slideWidth:580,
	    minSlides: 2,	    
	    slideMargin: 10
	});	

	// Bxslider Carousel - Static number of slides
	$('.carousel_static').bxSlider({	    
	    auto: true,
	    slideWidth:380,
	    minSlides: 2,	 
	    maxSlides: 2,   
	    slideMargin: 10
	});	

	// Bxslider Carousel - Dynamic number of slides
	$('.carousel_dynamic').bxSlider({	    
	    auto: true,
	    slideWidth:260,
	    minSlides: 3,	 
	    maxSlides: 4,   
	    slideMargin: 10
	});	

	// Bxslider Thumbnail Pager - Method 01
	$('.bxslider_pager01').bxSlider({	    
	    auto: true,
	    pagerCustom: '#bx_pager_thumb01'
	});	

	// Bxslider Thumbnail Pager - Method 02
	$('.bxslider_pager02').bxSlider({
		auto: true,
		mode: 'fade',
		controls: false,
		buildPager: function(slideIndex){
			switch(slideIndex){
				case 0:
					return '<img src="images/thumb01.jpg">';
				case 1:
					return '<img src="images/thumb02.jpg">';
				case 2:
					return '<img src="images/thumb03.jpg">';
				case 3:
					return '<img src="images/thumb04.jpg">';
				case 4:
					return '<img src="images/thumb05.jpg">';
			}
		}
	});

	// Bxslider custom next / prev control selectors
	$('.bxslider_custom').bxSlider({
		nextSelector: '#slider-next',
		prevSelector: '#slider-prev',
		nextText: 'Onward →',
		prevText: '← Go back'
	});

	// Bxslider Public method
	var slider = $('.bxslider_method').bxSlider({
		mode: 'fade',
	});
	$('#slider-next-02').click(function(){
		slider.goToNextSlide();
		return false;
	});
	$('#slider-count').click(function(){
		var count = slider.getSlideCount();
		alert('Slide count: ' + count);
		return false;
	});

	//Bxslider Video 
	$('.bxslider_video').bxSlider({
		video: true,
		useCSS: false,
		adaptiveHeight: true		
	});

	//Bxslider Ticker mode
	$('.bxslider_ticker').bxSlider({
		minSlides: 4,
		maxSlides: 4,
	  	slideWidth: 170,
	  	slideMargin: 10,
	  	ticker: true,
	  	speed: 20000		
	});

	//Bxslider Custom easing
	$('.bxslider_custom_easing').bxSlider({
		mode: 'horizontal',
  		useCSS: false,
  		infiniteLoop: false,
  		hideControlOnEnd: true,
  		easing: 'easeOutElastic',
  		speed: 2000
	});

	//Bxslider Reload slider
	var slider02 = $('.bxslider_reload').bxSlider({
		mode: 'horizontal'
	});

	$('#reload-slider').click(function(e){
  		e.preventDefault();
  		$('.bxslider_reload').append('<li><img src="images/img05.jpg"></li>');
  		slider02.reloadSlider();
	});

	//Bxslider Reload slider with new setting
	var slider03 = $('.bxslider_reload_02').bxSlider({
		mode: 'horizontal'
	});

	$('#reload-slider-02').click(function(e){
  		e.preventDefault();  		
  		slider03.reloadSlider({
  			mode: 'fade',
  			auto: true,
  			pause: 1000,
  			speed: 500
  		});
	});



});