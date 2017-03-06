
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
/* Map
=======================================================*/
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}



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

jQuery(document).ready(function() {
	$open2=false;
	function menuMb2() {
		$("#spmenu li ul.spchild").slideToggle();
		if($open2==false){
			$open2=true;
			$('#spmenu li .arrow').addClass('rotate');
		}else{
			$open2=false;
			$('#spmenu li .arrow').removeClass('rotate');
		}
	}
	
	$('#spmenu li.spparent').click(function() {
		menuMb2();
	});
	
}); 



/*  VIEW MORE
=======================================================*/
jQuery(document).ready(function($) {
	$('.viewMoreBtn').click(function(){
		var link = $(this).find('a');
		$(this).parent().find('.viewMoreCont').slideToggle('slow', function() {
            if ($(this).parent().find('.viewMoreCont').is(":visible")) {
                 link.text('閉じる');                
            } else {
                 link.text('もっと読む');                
            }        
		});
	})
	
}); 

/*  Changes IMG
===========================================*/
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
			if (winW <= 1200) {
				$("img.img1200", elem).each(function() {
					$(this).attr("src", $(this).attr("src").replace(imgSrc[i], newImg));
				});
			} else {
				$("img.img1200", elem).each(function() {
					$(this).attr("src", $(this).attr("src").replace(newImg, imgSrc[i]));
				});
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
			$('.pos_abs').css({'top':-(headerSp + 20)})
		}else{
			$('#footerSp').css({'padding-bottom':15 + 'px'})	
			$("#spmenu").css({'display':'none'})
			$('#wrapper').css({'padding-top':0 + 'px'})
		}
	}
	changeSpBtn();
	
	$(window).resize(function() {
        changeSpBtn();
    });
});

/*  Anchorlink
===========================================*/
jQuery(document).ready(function($) {
	$('a').click(function(){
    	$('html, body').animate({
        	scrollTop: $( $(this).attr('href') ).offset().top
    	}, 500);
    	return 
	});
});

/*  Heightline
===========================================*/
$(document).ready(function() {
	$.fn.heightLine = function( options ){
		 var container = $( this );			
		 function setHeight() {
			var winWh = $(window).width();
			var maxHeight = 0;
			//Get all the element with class = col
			column = $( container );
			if(winWh <= 480){
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


/*  Pagetop
===========================================*/
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