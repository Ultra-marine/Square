$(function(){

	s3 = Snap("#svg3")
	s4 = Snap("#svg4")
	s6 = Snap("#svg6")
	screeWidth = $(window).width()
	s3.attr({
		width:screeWidth,
		height:100,
		viewBox:"0,0,screeWidth,100",
		preserveAspectRatio : "xMidYMid meet"
	})

	s4.attr({
		width:1200,
		height:1600,
		viewBox:"0,0,1000,1000",
		preserveAspectRatio : "xMidYMid meet"
	})

	s4.selectAll('circle').attr({
		fill: "#fff"
	})

	s6.attr({
		width:1000,
		height:screeWidth,
		viewBox:"0,0,1000,1000",
		preserveAspectRatio : "xMidYMid meet"
	})

	s6.selectAll('circle').attr({
		fill: "#fff"
	})

	shadow = s6.ellipse(310,1150,300,200)
	shadow.attr({
		fill:"none"
	})

	s6.use("#pillar")
	s6.use("#dengpao")





	function generateLine(){
		for(var i=0;i<5;i++){
			xPos = i*500
			r = s3.rect(xPos,0,300,10)
			r.attr({
				fill:"#F7F5EA"

			})
		}
	}






	generateLine()

	$(window).resize(function(){
		
		location.reload()
		console.log("new one")
	})
	
		
	var timeColor = ["#F7F5EA","#DCF4F3","#E1F9EE","#F9D4A2","#485887"]
	
	$(".timeChose").click(function(){
		var index = $(this).find("a").attr("title"),
			thisTimeColor = timeColor[index-1]
		$('body').css('backgroundColor', thisTimeColor)
		shadow.attr({
			fill:"#4c4c4c",
			opacity : index*0.2, 
			zIndex : '1'
		})
		if(index > 3){
			s6.selectAll('circle').attr({
			fill: "#EDCA1D"
			})
			$("#art5").css("color","#EDCA1D")
		}else {
			s6.selectAll('circle').attr({
			fill: "none"
			})
			
			$("#art5").css("color","#3A565E")
		}


	})



	
})