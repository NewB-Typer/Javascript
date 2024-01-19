var blur = document.querySelector("#c-blur")
var crsr = document.querySelector("#cursor")

document.addEventListener("mousemove", function(val){
crsr.style.left = val.x+30+"px"
crsr.style.top = val.y+"px"

blur.style.left = val.x - 250 + "px"
blur.style.top = val.y- 250 + "px"

})

var hnav = document.querySelectorAll("#nav h4")
hnav.forEach(function (e){
e.addEventListener("mouseenter", function(){
  crsr.style.scale = 3;
  crsr.style.border = "1px solid #fff";
  crsr.style.backgroundColor = "transparent";
})
e.addEventListener("mouseleave", function(){
  crsr.style.scale = 1;
  crsr.style.border = "0px solid #b3c77a2b";
  crsr.style.backgroundColor = "#b3c77a2b";
})
})

gsap.to("#nav",{
  backgroundColor : "#000",
  height:"120px",
  duration:0.5,
  scrollTrigger:{
trigger:"#nav",
scroller:"body",
start: "top -10%",
end:"top -11",
scrub:1

  }
})


gsap.to("#main",{
backgroundColor: "#000",
scrollTrigger:{
  trigger:"#main",
  scroller:"body",
  start:"top -20%",
  end:"top -70%",
  scrub:2
}
})

gsap.from("#about img,#about-us",{
  y:50,
  opacity: 0,
  duration: 1,
  stagger: 0.4,
  scrollTrigger:{
    trigger: "#about",
    scroller: "body",
    start: "top 50%",
    end: "top 48%",
    scrub: 3

  } 
})


gsap.from(".card",{
  scale: 0.8,
  opacity: 0,
  duration: 1,
  scrollTrigger:{
    trigger: ".card",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
    scrub: 1

  } 
})


gsap.from("#colon1",{
y: -30,
x: -90,
scrollTrigger:{
  trigger: "#colon1",
  scroller:"body",
  start:"top 55%",
  end: "top 45%",
  scrub: 4
}
})

gsap.from("#colon2",{
  y: -30,
  x: -90,
  scrollTrigger:{
    trigger: "#colon1",
    scroller:"body",
    start:"top 55%",
    end: "top 60%",
    scrub: 4
  }
  })

gsap.from("#page4 h1",{
y: 50,
scrollTrigger:{
  trigger: "#colon1",
  scroller:"body",
  start: "top 55%",
  end: "top 45%",
  scrub: 4
}
})