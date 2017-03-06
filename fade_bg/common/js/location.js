/*  AREA MAP
===========================================*/
//Pc
$(window).load(function(){
	// Click
	$('#areaBox .boxCont .btn01').on('click',function(){	 
		$('ul.accordion li .boxChild:not(.boxChild01)').removeClass('active');
	   	$('.boxChild01').addClass('active');
		
		$('#areaBox .boxCont .btnLink:not(.btn01)').removeClass('active');
	   	$(this).addClass('active');
   });   
   $('#areaBox .boxCont .btn02').on('click',function(){	 
		$('ul.accordion li .boxChild:not(.boxChild02)').removeClass('active');
	   	$('.boxChild02').addClass('active');
		 
		$('#areaBox .boxCont .btnLink:not(.btn02)').removeClass('active');
	   	$(this).addClass('active');
   });
   $('#areaBox .boxCont .btn03').on('click',function(){	 
		$('ul.accordion li .boxChild:not(.boxChild03)').removeClass('active');
	   	$('.boxChild03').addClass('active');
		 
		$('#areaBox .boxCont .btnLink:not(.btn03)').removeClass('active');
	   	$(this).addClass('active');
   });
   $('#areaBox .boxCont .btn04').on('click',function(){	 
		$('ul.accordion li .boxChild:not(.boxChild04)').removeClass('active');
	   	$('.boxChild04').addClass('active');
		 
		$('#areaBox .boxCont .btnLink:not(.btn04)').removeClass('active');
	   	$(this).addClass('active');
   });
   $('#areaBox .boxCont .btn05').on('click',function(){	 
		$('ul.accordion li .boxChild:not(.boxChild05)').removeClass('active');
	   	$('.boxChild05').addClass('active');
		 
		$('#areaBox .boxCont .btnLink:not(.btn05)').removeClass('active');
	   	$(this).addClass('active');
   });
   $('.btnClose').on('click',function(){	 
		$('ul.accordion li .boxChild').removeClass('active');
		$('#areaBox .boxCont .btnLink').removeClass('active');
   });
   
	
	//Hover	
   $('#areaBox .boxCont .btn01').mouseover(function(){
		$('#areaBox .map img:not(#change01)').removeClass('active');
	   	$('#change01').addClass('active');
   }).mouseout(function(){
	   	$('#areaBox .map img:not(#change00)').removeClass('active');
	   	$('#change00').addClass('active');
   });
   $('#areaBox .boxCont .btn02').mouseover(function(){
	   	$('#areaBox .map img:not(#change02)').removeClass('active');
	   	$('#change02').addClass('active');
   }).mouseout(function(){
	   	$('#areaBox .map img:not(#change00)').removeClass('active');
	   	$('#change00').addClass('active');
   });
   $('#areaBox .boxCont .btn03').mouseover(function(){
	   	$('#areaBox .map img:not(#change03)').removeClass('active');
	   	$('#change03').addClass('active');
   }).mouseout(function(){
	   	$('#areaBox .map img:not(#change00)').removeClass('active');
	   	$('#change00').addClass('active');
   });
   $('#areaBox .boxCont .btn04').mouseover(function(){
	   	$('#areaBox .map img:not(#change04)').removeClass('active');
	   	$('#change04').addClass('active');
   }).mouseout(function(){
	   	$('#areaBox .map img:not(#change00)').removeClass('active');
	   	$('#change00').addClass('active');
   });
   $('#areaBox .boxCont .btn05').mouseover(function(){
	   	$('#areaBox .map img:not(#change05)').removeClass('active');
	   	$('#change05').addClass('active');
   }).mouseout(function(){
	   	$('#areaBox .map img:not(#change00)').removeClass('active');
	   	$('#change00').addClass('active');
   });         
});   

// Sp
$(document).ready(function() {
	$('.accordion li .btnLink').click(function() {
		var current = $(this).parent().find('.boxChild').slideToggle(600);
	});
});

/*  AREA INFORMATION
===========================================*/
$(document).ready(function() {
	$('li#navi01').addClass('active');
	$('.info').hide();
	$('#info01').show();
	
	$('li[id^="navi"]').click(function(){
		$('[id^="info"]').fadeOut(500);
		$('#info'+this.id.slice(4)).fadeIn(1000);
		$(this).addClass('active');
		$('li').not(this).removeClass('active');
	});	
});