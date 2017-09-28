$(function(){


	var s1 = Snap("#svg1")
	s1.attr({
	    width:'100%',
	    height:'500px',
	    viewBox:"0,0,1400,650",
	    preserveAspectRatio : "xMidYMin meet"
	  })
	

	var relativeOffset = anime.timeline();
	
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
		targets:'#cir',
		rotate:'1turn',
		duration:5000
	})
	




})