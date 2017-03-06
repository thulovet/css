// JavaScript Document

$(window).load(function(){
	/* function seane01() {
		$('#petal01').delay(1000).fadeIn(1000,function(){
			$('#petal01').delay(500).fadeOut(1000,function(){
				
			});
		});
		$('#petal02').delay(1500).fadeIn(1000,function(){
			$('#petal02').delay(500).fadeOut(1000,function(){
				seane02();
			});
		});
	} */
	function seane01() {
		$('#petal_01').delay(300).fadeIn(1100,function(){
			$('#petal_01').animate({'top':'37.40%','right':'27.53%','opacity':'0'},2000,"jswing").fadeOut(0,function(){
				$('#petal_01').css('opacity',1);
				// seane04();
				
			});
		});
		$('#petal_02').delay(750).fadeIn(1200,function(){
			$('#petal_02').animate({'top':'37.40%','right':'27.53%','opacity':'0'},5000,"jswing").fadeOut(0,function(){
				$('#petal_02').css('opacity',1);
				
			});
		});
		$('#petal_03').delay(1200).fadeIn(900,function(){
			$('#petal_03').animate({'top':'37.40%','right':'27.53%','opacity':'0'},4000,"jswing").fadeOut(0,function(){
				$('#petal_03').css('opacity',1);
				seane02();
				
			});
		});
		$('#petal_04').delay(500).fadeIn(1100,function(){
			$('#petal_04').animate({'top':'37.40%','right':'27.53%','opacity':'0'},5000,"jswing").fadeOut(0,function(){
				$('#petal_04').css('opacity',1);
			});
		});
		$('#petal_05').delay(500).fadeIn(1100,function(){
			$('#petal_05').animate({'top':'50.40%','right':'27.53%','opacity':'0'},3000,"jswing").fadeOut(0,function(){
				$('#petal_05').css('opacity',1);
				
			});
		});
		$('#petal_06').delay(700).fadeIn(1500,function(){
			$('#petal_06').animate({'top':'50.40%','right':'27.53%','opacity':'0'},4000,"jswing").fadeOut(0,function(){
				$('#petal_06').css('opacity',1);
			});
		});

		$('#movieText01').delay(800).fadeIn(5000,function(){
			$('#movieText01').delay(1500).fadeOut(1500,function(){
				
				seane03();
				$('#movieText02').delay(4000).fadeIn(3000,function(){});
			});
			
		});
		
	}
	function seane02() {
		$('#petal05').delay(0).fadeIn(14000,function(){
			
		});
	}
	function seane03() {
		$('#movieImage').delay(3700).fadeIn(4000,function(){
			outview();
			
		});
	}

	/* function seane04() {
		$('#petal07').delay(0).fadeIn(28000,function(){
			
			$('#petal07').animate({'opacity':'0'},2000,"jswing").fadeOut(0,function(){
				$('#petal07').css('opacity',1);
				seane04()
				
			});
		});
	} */
	

function outview() {
	$('#movieText02,#movieImage,#petal05').stop().fadeOut(1500,function(){
		$('#mainVisualWhite').animate({'opacity':1},3000, function(){
		  $('#outviewImg').fadeIn(1500, function(){
			  $('#outviewTitle').fadeIn(1500, function(){
			  });
		  });
	  });
	});
	
}
	
	function skip() {
		
	}
	function replay() {
		
	}
	seane01();
});