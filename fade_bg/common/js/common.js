// JavaScript Document
/*  Popup 
===========================================*/
function MM_openBrWindow(theURL,winName,features) {
  window.open(theURL,winName,features);
}

/*  Hover
===========================================*/
$(document).ready(function() {
    $("img.imgover").mouseover(function(){
        $(this).attr("src",$(this).attr("src").replace(/^(.+)(\.[a-z]+)$/, "$1_over$2"))
    }).mouseout(function(){
        $(this).attr("src",$(this).attr("src").replace(/^(.+)_over(\.[a-z]+)$/, "$1$2"));
    })
})


/*  Common
=======================================================*/
$(window).load(function(){
	function spCommon(){
		var winW2 = $(window).width(),		
			spFix = $('#spfix').height();
		if(winW2 > 769){
			$('#header').css({'padding-top':0});
			$('#gnav .content').css({'padding-top':0});
			$('.pos_abs').css({'top':0});
		}else{
			$('#header').css({'padding-top':spFix});
			$('#gnav .content').css({'padding-top':spFix});
			$('.pos_abs').css({'top':-spFix});
		}
	}
	spCommon();
	$(window).resize(function(){
		spCommon();
    });
})

/*  MenuSp
=======================================================*/
$(document).ready(function() {
	// Change li img to li text 
	function Send() {
    	$('#gnav li').children('img').each(function () {
			var $text = $(this).prop('alt');
			$(this).parent().append('<span>'+ $text +'</span>');
    	});
		$('#gnav li a').children('img').each(function () {
        	var $text = $(this).prop('alt');
			$(this).parent().append('<span>'+ $text +'</span>');
    	});
	}	
	Send();
		
	// Effect Click on Mobile
	$open=false;
	function menuMb() {
		$("#gnav").toggle();
		if($open==false){
			$open=true;
			$('#spfix #btn_menu').addClass('close');
		}else{
			$open=false;
			$('#spfix #btn_menu').removeClass('close');
		}
	}
	
	$('#spfix #btn_menu').click(function() {
		menuMb();
	});
}); 

/*  Pagetop
===========================================*/
$(document).ready(function() {
	$("#pagetop").hide();
	
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#pagetop').fadeIn();
			} else {
				$('#pagetop').fadeOut();
			}
		});

		$('#pagetop a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});
});

/*  Changes IMG
===========================================*/
$(document).ready(function() {
	var elem = $(this);
	var imgSrc = $("img", elem).map(function() {
		return $(this).attr("src");
	});

	function changeImages() {
		var winWi = $(window).width();
		for (var i = 0; i < imgSrc.length; i++) {
			var newImgSrc = imgSrc[i].substring(0, imgSrc[i].length - 4),
				getExp = imgSrc[i].slice(-3),
				newImg = newImgSrc + "_sp";
			if (getExp == "jpg") {
					newImg = newImg + "." + getExp;
				} else if (getExp == "gif") {
					newImg = newImg + "." + getExp;
				} else if (getExp == "png") {
					newImg = newImg + "." + getExp;
				}
					
			if (winWi <= 960) {
				$("img.img960", elem).each(function() {
					$(this).attr("src", $(this).attr("src").replace(imgSrc[i], newImg));
				});
			} else {
				$("img.img960", elem).each(function() {
					$(this).attr("src", $(this).attr("src").replace(newImg, imgSrc[i]));
				});
			}
			
			if (winWi <= 768) {
				$("img.img768", elem).each(function() {
					$(this).attr("src", $(this).attr("src").replace(imgSrc[i], newImg));
				});
			} else {
				$("img.img768", elem).each(function() {
					$(this).attr("src", $(this).attr("src").replace(newImg, imgSrc[i]));
				});
			}
			
			if (winWi <= 736) {
				$("img.img736", elem).each(function() {
					$(this).attr("src", $(this).attr("src").replace(imgSrc[i], newImg));
				});
			} else {
				$("img.img736", elem).each(function() {
					$(this).attr("src", $(this).attr("src").replace(newImg, imgSrc[i]));
				});
			}

			if (winWi <= 640) {
				$("img.img640", elem).each(function() {
					$(this).attr("src", $(this).attr("src").replace(imgSrc[i], newImg));
				});
			} else {
				$("img.img640", elem).each(function() {
					$(this).attr("src", $(this).attr("src").replace(newImg, imgSrc[i]));
				});
			}
			
			if (winWi <= 480) {
				$("img.img480", elem).each(function() {
					$(this).attr("src", $(this).attr("src").replace(imgSrc[i], newImg));
				});
			} else {
				$("img.img480", elem).each(function() {
					$(this).attr("src", $(this).attr("src").replace(newImg, imgSrc[i]));
				});
			}
		}
	}
	changeImages();
	$(window).resize(function() {
		changeImages();
	});
})

/*  Height Line
===========================================*/
$(document).ready(function() {
	$.fn.heightLine = function( options ){
		 var container = $( this );			
		 function setHeight() {
			var winWh = $(window).width();
			var maxHeight = 0;
			//Get all the element with class = col
			column = $( container );
			if(winWh <= 640){
				column.removeAttr( 'style' );		
			}else{
				column.css( 'height', 'auto' );
				//Loop all the column
				column.each( function() {
					//Store the highest value
					if( $( this ).height() > maxHeight ) {
						maxHeight = $( this ).height();
					}
				});
				//Set the height
				column.height( maxHeight );
			}
		}
		setHeight();		
		$(window).resize( function() {
			setHeight();
		});
	};
});
/*=======================================================
				   CANH GIUA THEO CHIEU CAO
=======================================================*/
$(window).load(function() {
	function setSubject() {
		var winWSub = $(window).width();
		$('.subject').each(function(){
			var subjectImgH = $(this).find('.subject_img').height(); 
			var subjectTxtH = $(this).find('.subject_txt').height(); 
			if(subjectImgH > subjectTxtH){
				$(this).find('.subject_txt').css({'padding-top':(subjectImgH - subjectTxtH)/2 + 'px'});
			}else if(subjectImgH < subjectTxtH){
				$(this).find('.subject_img').css({'padding-top':(subjectTxtH - subjectImgH)/2 + 'px'});
			}else{
				$(this).find('.subject_img').css({'padding-top':0});
				$(this).find('.subject_txt').css({'padding-top':0});
			}
		})
	}
	setSubject();  
	$(window).resize( function() {
		setSubject();
	});
});

/*=======================================================
						MENU SP
=======================================================*/
jQuery(document).ready(function($) {
    $open=false;
	function menuMb() {
		$("#menusp_content").slideToggle();
		if($open==false){
			$open=true;				
			$('#img_menu').attr('src',$('#img_menu').attr('src').replace('btn_menu_03','btn_menu_03_close'));
			
		}else{
			$open=false;
			$('#img_menu').attr('src',$('#img_menu').attr('src').replace('btn_menu_03_close','btn_menu_03'));
		}
	}
	$('#menusp #menu_list_btn .btn_menu').click(function() {
		menuMb();
	});
});


/*=======================================================
						LOADING
=======================================================*/
$(window).load(function(){
 setTimeout(function(){
  $('#loading').fadeOut(1000);
 }, 10);
});