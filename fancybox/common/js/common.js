/*=======================================================
						Rollover
=======================================================*/
jQuery(document).ready(function($) {
    $("img.imgover").mouseover(function(){
        $(this).attr("src",$(this).attr("src").replace(/^(.+)(\.[a-z]+)$/, "$1_over$2"))

    }).mouseout(function(){
        $(this).attr("src",$(this).attr("src").replace(/^(.+)_over(\.[a-z]+)$/, "$1$2"))
    })
})

/*=======================================================
						Popup
=======================================================*/
function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}

/*=======================================================
						MENU RESPONSIVE CHANGE IMAGE
=======================================================*/
jQuery(document).ready(function($) {
    $open=false;
	function menuMb() {
		$("#type01 #menusp .list_content").slideToggle();
		if($open==false){
			$open=true;
			$('#type01 #img_menu').attr('src',$('#img_menu').attr('src').replace('btn_open','btn_close'));
		}else{
			$open=false;
			$('#type01 #img_menu').attr('src',$('#img_menu').attr('src').replace('btn_close','btn_open'));
		}
	}
	$('#type01 #menusp #btn_menu').click(function() {
		menuMb();
	});
});


/*=======================================================
						MENU SP TYPE 02
=======================================================*/
jQuery(document).ready(function(){
  $('#type02 #menusp #btn_menu').on("click", function(){
	$("#type02 #menusp .list_content").slideToggle();
	$('#type02 #btn_menu').toggleClass('active');
  });
});

/*=======================================================
						MENU SP TYPE 03
=======================================================*/
jQuery(document).ready(function(){
  $('#type03 #menusp #btn_menu').on("click", function(){
	$("#type03 #menusp .list_content").slideToggle();
	$('#type03 #btn_menu').toggleClass('active');
  });
});

/*=======================================================
						MENU SP TYPE 04
=======================================================*/
jQuery(document).ready(function(){
  $('#type04 #menusp #btn_menu').on("click", function(){
	$("#type04 #menusp .list_content").fadeToggle();
	$('#type04 #btn_menu').toggleClass('active');
  });
});

/*=======================================================
						MENU SP TYPE 05
=======================================================*/
jQuery(document).ready(function(){
	$('#type05 #menusp #btn_menu').on("click", function(){			
		$("#type05 #menusp .list_content").toggle('slide', { direction: 'right' }, 500);
		$('#type05 #btn_menu').toggleClass('active');
		
  });
});




/*=======================================================
				CHANGE IMG FROM PC TO SP
=======================================================*/
jQuery(document).ready(function($) {
	var elem = $(this);
	var imgSrc = $("img", elem).map(function() {
		return $(this).attr("src");
	});
	function changeImages() {
		var winWimg = $(window).width();
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

			if (winWimg <= 736) {
				$("img.img736", elem).each(function() {
					$(this).attr("src", $(this).attr("src").replace(imgSrc[i], newImg));
				});
			} else {
				$("img.img736", elem).each(function() {
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

/*=======================================================
					HEIGHTLINE
 =======================================================*/
jQuery(document).ready(function($) {
	$.fn.heightLine = function( options ){
		 var container = $( this );			
		 function setHeight() {
			var winWlh = $(window).width();
			var maxHeight = 0;
			//Get all the element with class = col
			column = $( container );
			if(winWlh <= 480){
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
