
var tm = gsap.timeline()

function time(){
  var a = 0;
  setInterval(function(){
    a = a +  Math.floor(Math.random()*30)
    
    if(a<100){
      document.querySelector("#loader h1").innerHTML = a + '%' 
    }
    else{
a= 100;      
    document.querySelector("#loader h1").innerHTML = a + '%' 
    }

  },150)
}

tm.to("#loader h1", {

  delay: 0.5,
  duration: 1,
  onStart: time()
})

tm.to("#loader", {
  top: "-100vh",
  delay: 0.5,
  duration: 1
})


gsap.from("#page1 h1",{
   transform: "translateX(-50)",
fontWeight: "100",
duration: 0.5,
rotate: 180,
scrollTrigger:{
  trigger: "#page1",
  scroller: 'body',
  start: "top 0",
  end:"top -200%",
  scrub:0.5 ,
  yoy0: true, 
  pin: true
}
 })


