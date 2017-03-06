// JavaScript Document
/*  Popup 
===========================================*/
function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}

/*  Hover
===========================================*/
jQuery(document).ready(function($) {
    $("img.imgover").mouseover(function(){
        $(this).attr("src",$(this).attr("src").replace(/^(.+)(\.[a-z]+)$/, "$1_over$2"))
    }).mouseout(function(){
        $(this).attr("src",$(this).attr("src").replace(/^(.+)_over(\.[a-z]+)$/, "$1$2"));
    })
})

/*  MENUSP
=======================================================*/
jQuery(document).ready(function($) {

	$open=false;
	function menuMb() {
		$("#spmenu").fadeIn(500);
		if($open==false){
			$open=true;
		}else{
			$open=false;
		}
	}
	
	$('.btnMenu').click(function() {
		menuMb();
	});
	$('.btnClose').click(function() {
		$("#spmenu").fadeOut(500);
	});
}); 

/*=======================================================
				Change img Sp
=======================================================*/
jQuery(document).ready(function($) {
	var elem = $(this);
	var imgSrc = $("img", elem).map(function() {
		return $(this).attr("src");
	});

	function changeImages() {
		var winW = $(window).width();
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

			if (winW <= 736) {
				$("img.img736", elem).each(function() {
					$(this).attr("src", $(this).attr("src").replace(imgSrc[i], newImg));
				});
			} else {
				$("img.img736", elem).each(function() {
					$(this).attr("src", $(this).attr("src").replace(newImg, imgSrc[i]));
				});
			}
			
			if (winW <= 480) {
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


$(function() {
  // スクロールのオフセット値
  var offsetY = -10;
  // スクロールにかかる時間
  var time = 500;

  // ページ内リンクのみを取得
  $('a[href^=#]').click(function() {
    // 移動先となる要素を取得
    var target = $(this.hash);
    if (!target.length) return ;
    // 移動先となる値
    var targetY = target.offset().top+offsetY;
    // スクロールアニメーション
    $('html,body').animate({scrollTop: targetY}, time, 'swing');
    // ハッシュ書き換えとく
    window.history.pushState(null, null, this.hash);
    // デフォルトの処理はキャンセル
    return false;
  });
});


$(function() {
    var topBtn = $('#page-top');    
    topBtn.hide();
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    //スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});





// sp fixed
/*===========================================================*/
jQuery(document).ready(function($) {
	function changeSpBtn(){
		// Footer
		var winWF = $(window).width();
		var btnSp = $('#spfixbtn').height();
		var headerSp = $('#header').height();
		
		if(winWF <=736){
			$('#footerSp').css({'padding-bottom':btnSp + 15 + 'px'})
			$('#wrapper').css({'padding-top':headerSp + 20 + 'px'})
			$('.pos_abs').css({'top':-headerSp})
		}else{
			$('#footerSp').css({'padding-bottom':15 + 'px'})	
			$("#spmenu").css({'display':'none'})
			$('#wrapper').css({'padding-top':0 + 'px'})
			$('.pos_abs').css({'top':10})
		}
	}
	changeSpBtn();
	
	$(window).resize(function() {
        changeSpBtn();
    });
});

/*  Heightline
===========================================*/
(function( $ ) {
	$.fn.heightLine = function( options ){
		 var container = $( this );			
		 function setHeight() {
			var winW = $(window).width();
			var maxHeight = 0;
			//Get all the element with class = col
			column = $( container );
			if(winW <= 480){
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
}( jQuery ));


