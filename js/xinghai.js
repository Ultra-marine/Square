$(function(){

footColor = ["#38362C","#38362C","#38362C","#38362C","#38362C","#38362C","#38362C","#38362C","#38362C","#38362C","#38362C","#38362C",
                "#38362C","#38362C","#38362C","#38362C","#4F4E3D"]

$(window).resize(function(event) {
   location.reload() 
});

var screenW = $(window).width() 

var 
    shadowPoT = $('#shadow').offset().top-$(document).scrollTop() + screenW + 500,
    shadowB = $('#shadow').height()
    

var s2 = Snap("#svg2")
var s3 = Snap("#svg3")

s2.attr({
    width:'100%',
    height:'700px',
    viewBox:"0,0,1200,300",
    preserveAspectRatio : "xMidYMin meet"
  })

s3.attr({
    width:'30%',
   
    viewBox:"0,0,600,1300",
    preserveAspectRatio : "xMidYMin meet"
  })      

var mask1 = s3.rect(-400,0,500,1300).attr({fill:'#fff'})
var huaShadow = s3.rect(000,1135,500,39).attr({fill:'#B2B0A1'})
s3.use('#huabiao2').attr({fill:'#ccc',mask:mask1})
s3.select('#huabiao').attr({fill:'#B2B0A1'})

var huabiao = s3.select('#huabiao2')








  $("#shadow").css({
    height: 700
  })//制定高度    
       
       
       function makeFoot(x,y,z){
          var sole = s2.use('#sole1')
                 var toe = s2.use('#toe')

                 // Index = Math.floor((Math.random()* footColor.length))
                 // color = footColor[Index] //从数列中选取一个元素
                 
          s2.g(sole,toe).attr({
          transform:"translate(" + x + "," + y + ") scale(" + z + ",1)" ,
          class:"foot",
          fill:"#38362C"
        })
       }

      function makeMoreFoot(total){
        for(var i=0;i<total;i++){
          
          var distance = 500 + i*20,
              distanceB = distance + 200 + i*30,
              raw = i*150 ;
          
          var jiou = i % 2;
          if (jiou == 0){ 
            makeFoot(distance,raw,'-1') //evenN
          }else if (jiou ==1){ 
            makeFoot(distanceB,raw,1) //oddN
          } 

        };
      };


     
      $(window).scroll(function(){
        $(".foot").remove()
        var huabiaoTop = $('#svg3').offset().top-$(document).scrollTop()-500;
        var winHeight = $("#dot").offset().top
        var thisTop = $('#shadow').offset().top - 500;
        var top = winHeight - thisTop
        var x = Math.floor([winHeight-thisTop]/100);
         makeMoreFoot(x)


         if(huabiaoTop < 0){
           mask1.animate({
             transform:'translate(150,0)'
           },1000)

           huaShadow.animate({
             x:'200'
           },1000)

         }

        console.log(huabiaoTop)


      })//滚动

    


   

     

      // anime({
      //         targets:'.lunzi',
      //         rotate:'30',
      //         duration: 1000,
      //         loop: true
      //       })

    //   wheel.animate({
    //     transform: "rotateY(" + 35 + ")"
    // },1500, mina.bounce)



      







});