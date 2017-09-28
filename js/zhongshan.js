$(function(){


	var s1 = Snap("#svg1")
	s1.attr({
	    
	    
	    viewBox:"0,0,695,690",
	    preserveAspectRatio : "xMidYMid meet"
	  })
	
	
	
	// var relativeOffset = anime.timeline();
	
	

	$(window).scroll(function(){

		 var cirTop = $('#svg1').offset().top-$(document).scrollTop()-500;

         if(cirTop < 0){
         		stop()
         		setTimeout(function(){
         			 relativeOffset = anime.timeline();
         		 relativeOffset
         		 	.add({
         		 	  targets: 'path',
         		 	  strokeDashoffset: [anime.setDashoffset, 0],
         		 	  easing: 'easeInOutSine',
         		 	  duration: 1500,
         		 	  delay: function(el, i) { return i * 250 },
         		 	})
         		 	.add({
         		 		targets:'line',
         		 		strokeDashoffset: [120, 0],
         		 		easing: 'easeInOutSine',
         		 		delay: function(li,i) { return i * 50 },
         		 		duration: 400,

         		 	})
         		 	.add({
         		 		targets:'#svg1',
         		 		rotate:'1turn',
         		 		duration:5000,
         		 	})
         		 },1000)


         }

	})





})