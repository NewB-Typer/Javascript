var rectangle = document.querySelector("#box")

rectangle.addEventListener("mousemove", function(info){
 var outerLine = rectangle.getBoundingClientRect();

//var insideX = info.clientX - outerLine.left;

var insideY = info.clientY - outerLine.top;
/*
if(insideX < outerLine.width/2){
var greenColor = gsap.utils.mapRange(0, outerLine.width/2 ,255 , 0 ,insideX);
gsap.to(rectangle,{
  backgroundColor: `rgb(0,${greenColor},0)`,
  ease: Power4,
})
}
else{
var blueColor = gsap.utils.mapRange(outerLine.width/2 , outerLine.width , 0 , 255, insideX);
gsap.to(rectangle,{
  backgroundColor: `rgb(0,0,${blueColor})`,
  ease: Power4,
})

}

})
*/

if(insideY < outerLine.height/2){
  var redColor = gsap.utils.mapRange(0, outerLine.height/2 ,255 , 0 ,insideY);
  gsap.to(rectangle,{
    backgroundColor: `rgb(${redColor},0,0)`,
    ease: Power4,
  })
  }
  else{
  var blackColor = gsap.utils.mapRange(outerLine.height/2 , outerLine.hright , 0 , 255, insideY);
  gsap.to(rectangle,{
    backgroundColor: `black`,
    ease: Power4,
  })
  
  }
  
  })
rectangle.addEventListener("mouseleave", function(){
gsap.to(rectangle,{
  backgroundColor: 'white',
  ease: Power4,
})
})



