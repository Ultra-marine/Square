$(function(){
	var s = Snap("#svg1")
		
		
	var hairColorGroupA = ["#dadcda","#fddfa9","#e1e2e6","#fff2c6","#000000","#000000","#000000","#000000"],
		hairColorVar = [hairColorGroupA],

	    cloColorGroupB = ["#A3B74A","#417F64","#A3B74A","#A3B74A","#8ACECF","#E73561","#D0E4AA","#BF2525"],
	    cloColorGroupN = ["#EBCED7","#E9CFAA","#744644","#FCF9EF","#60754E","#E9D9C5","#A5AA65","#D5B861","#826260"],
	    cloColorGroupK = ["#000000"],
	    cloColorVar = [cloColorGroupN,cloColorGroupB,cloColorGroupK],

	    panColorGroupN = ["#fee5a1","#9aaab2","#f9d495","#fff3da","#b6bdc2","#fce5e2","#776563","#b39e97","#fff7e7"],
	    panColorGroupB = ["#E73466","#F19CA6","#84C255","#EE730D","#EDDC4D","#E94441","#C3D94E","#985098"],//纯色
	    panColorVar = [panColorGroupN,panColorGroupB];
	screeWidth = $(window).width()
	svg1x = screeWidth-1000
	s.attr({
		width:screeWidth*1.3,
		height:screeWidth,
		viewBox:"0,0,2000,2000",
		preserveAspectRatio : "xMidYMin meet"
	})


	var no = [0,0],
		bodyGroup = [1,1,1,1,2,2,3,3,3,3],
		hairGroup = [1,2,3,4,5,6],
		expGroup = [1,1,1,1,1,2,2,3],
		decGroup = [1,0,0,0,0,0,0],
		panGroup = [1,2,3,4,5],
		cloGroup = [1,2,3,4,5,6],

	    hairGroupX = [1,2,3,4],
		bodyGroupX =[1,1,1,1,1,2,2,2,2,3],
		panGroupX = [1,2,4,5],
		cloGroupX = [1,2,4,5,6];	

	var bodyVar = [bodyGroup],
		hairVar = [hairGroup],
		expVar = [expGroup],
		decVar = [decGroup],
		panVar = [panGroup],
		cloVar = [cloGroup],
		bodyVarX = [bodyGroupX],
		hairVarX = [hairGroupX],
		expVarX = [expGroup],
		panVarX = [panGroupX],
		cloVarX = [cloGroupX];


	//特征设置---------------------------------------------------

	
	var feature0 = [ [no,no],[no,no],[no,no],[no,no],[no,no],[no,no] ]
	var feature1 = [
	 [cloColorVar, cloColorGroupK ],
	 [decGroup,1 ] ,
	 [no,no],
	 [no,no],
	 [no,no],
	 [no,no]
	 ]
	var feature2 = [
	 [cloColorVar, cloColorGroupB ],
	 [cloGroup,5 ] ,
	 [panGroup,4],
	 [cloGroupX,3],
	 [panGroupX,3],
	 [no,no]
	 ]

	 var feature3 = [
	 [cloColorVar, cloColorGroupN ],
	 [cloGroupX,5 ] ,
	 [panGroupX,5],
	 [decGroup,1],
	 [no,no],
	 [no,no]	
	 ]

	 var feature4 = [
	 [cloColorVar, cloColorGroupB ],
	 [cloGroupX,6 ] ,
	 [panGroup,5],
	 [cloGroup,6],
	 [no,no],
	 [no,no]	
	 ]


	var feaGroupA = [feature0,feature0,feature0,feature3,feature3,feature3,feature1,feature2], 
		feaGroupB = [feature0,feature1,feature2,feature2,feature2,feature2,feature2,feature2,feature3],
		feaGroupC = [feature0,feature1,feature2,feature3],
		feaGroupD = [feature0,feature1,feature2,feature2,feature2,feature2],
		feaGroupE = [feature0,feature1,feature3,feature2,feature4,feature4,feature4],
		feaVar = [feaGroupA,feaGroupB,feaGroupC,feaGroupD,feaGroupE];

	function setFea(N){
			lable = s.circle(0,0,0)
			for(var i=0;i<50;i++){

				for(var n=0;n<6;n++){
					N[n][0].push(N[n][1])
				}//有6个可选项，执行6次替换
				
			}
			if(N == feature1){
				lable.attr({class:"geek"})
			}else if (N == feature2) {
				lable.attr({class:"business"})
			}else if (N == feature0) {
				lable.attr({class:"normal"})
			}else if (N == feature3) {
				lable.attr({class:"student"})
			}else if (N == feature4) {
				lable.attr({class:"sporting"})
			}
			
		}//增加特征

	function returnFea(N){
			for(var i=0;i<50;i++){
				for(var n=0;n<6;n++){
					N[n][0].pop()
				}//有6个可选项，执行6次替换
				
			}
			
	}//移除特征

	function choseFea(time){
			// varIndex = Math.floor((Math.random()*feaVar.length))
			// thisFeaVar = feaVar[varIndex] //选出一个颜色区间
			if(time == 1){
				thisFeaVar = feaGroupA
			}else if (time == 2) {
				thisFeaVar = feaGroupB
			}else if (time == 3) {
				thisFeaVar = feaGroupC
			}else if (time == 4) {
				thisFeaVar = feaGroupD
			}else if (time == 5) {
				thisFeaVar = feaGroupE
			}

			
			Index = Math.floor((Math.random()* thisFeaVar.length))
			fea = thisFeaVar[Index] //从数列中选取一个元素
			//return fea
			
		}//选取特征的方法

	function choseColor(object,objVar){
			varIndex = Math.floor((Math.random()*objVar.length))
			thisCloColorVar = objVar[varIndex] //选出一个颜色区间

			Index = Math.floor((Math.random()* thisCloColorVar.length))
			color = thisCloColorVar[Index] //从数列中选取一个元素
			object.attr({
				fill:color
			})
			
		}//选取颜色的方法

	function choseObject(object,objVar){
			varIndex = Math.floor((Math.random()*objVar.length))
			thisObjectVar = objVar[varIndex] //选出一个物件区间

			Index = Math.floor((Math.random()* thisObjectVar.length))
			thisObject = thisObjectVar[Index] //从数列中选取一个元素
			return thisObject
			
		}//选取物件的方法	

	

	function makeMale(x,y,fea){
		setFea(fea)
		// bodyIndex = Math.floor((Math.random()*bodyGroup.length))
		// thisBody = bodyGroup[bodyIndex] //从数列中选取一个元素
		// var body = s.use("body" + thisBody)//生成身体
		
		choseObject(body,bodyVar)
		var body = s.use("body" + thisObject)//生成身体
		
		choseObject(exp,expVar)
		var exp = s.use("exp" + thisObject)
		
		choseObject(hair,hairVar)
		var hair = s.use("hair" + thisObject)
		choseColor(hair,hairColorVar)

		choseObject(clo,cloVar)
		var clo = s.use("clo" + thisObject)
		choseColor(clo,cloColorVar)
		
		choseObject(pan,panVar)
		var pan = s.use("pan" + thisObject)
		choseColor(pan,panColorVar)
		
		choseObject(dec,decVar)
		var dec = s.use("dec" + thisObject)

		s.g(body,exp,hair,dec,clo,pan,lable).attr({
			transform:"translate(" + x + "," + y + ")" ,
			class:"person"
		})

		returnFea(fea)
	}

	function makeFemale(x,y,fea){
		setFea(fea)

		choseObject(body,bodyVarX)
		var body = s.use("body" + thisObject )//生成身体
		
		choseObject(exp,expVarX)
		var exp = s.use("exp" + thisObject )
		
		choseObject(hair,hairVarX)
		var hair = s.use("hair" + thisObject + "x")
		choseColor(hair,hairColorVar)

		choseObject(clo,cloVarX)
		var clo = s.use("clo" + thisObject + "x")
		choseColor(clo,cloColorVar)
		
		choseObject(pan,panVarX)
		var pan = s.use("pan" + thisObject + "x")
		choseColor(pan,panColorVar)
		
		choseObject(dec,decVar)
		var dec = s.use("dec" + thisObject )
		

		s.g(body,exp,hair,dec,clo,pan,lable).attr({
			transform:"translate(" + x + "," + y + ")" ,
			class:"person"
		})
		returnFea(fea)
	}
	
	

	function makeMorePerson(total,timeRange){
		
		for(var i=0;i<total;i++){
			choseFea(timeRange)
			row = Math.floor(i/20)
			space = 90
			var gender = Math.floor((Math.random()*5)); //输出0为男性，1为女性，2为空白
			if(gender == 0){
				makeMale(i*space-row*20*space, row*200,fea)
			}else if (gender == 1) {
				makeFemale(i*space-row*20*space, row*200,fea)
			}else{
			}
		}
	}//生成人物的方法，需要事件激活
	
	makeMorePerson(150,2)


	$(".timeChose").click(function(){

		$(".person").remove()
		var content = $(this).find("a").attr("title")
		makeMorePerson(150,content)
		$("input").val("");
		bindEvent()
		return false
	
	})//即使激活生成人物


	
	
	
	function bindEvent(){
		$(".person").each(function(){
			$(this).hover(function(){
				// alert("1")
				$(this).find('use').attr({
					transform : 'translate(0,-20)'
				},200,mina.easein)
			},function(){
				$(this).find('use').attr({
					transform : 'translate(0,0)'
				},200,mina.easein)
			})
			$(this).click(function(){
				occupation = $(this).find('circle').attr('class')
				$(this).find(lable).attr({
					r: '50px',
					fill:"#ccc"
				})
				alert(occupation)
			})
		})
	}//触发小人动作
	
	

	






})				