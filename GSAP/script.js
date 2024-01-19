
gsap.from('#card', {
  rotate: -360,
  x: 900,
  y: 300,
  duration: 2,
  delay: 1,  
  scale: 1,
  backgroundColor: "darkgreen",
  borderRadius: "50%",
  border: "15px solid yellowgreen"
})

//**  gsap.to('#card', {
//  rotate: -360,
//  x: 900,
//  y: 300,
//  duration: 2,
//  delay: 1,  
//  scale: 1,
//  backgroundColor: "darkgreen",
//  borderRadius: "50%",
//  border: "15px solid yellowgreen"
// }) 
 

gsap.to("h1", {
  backgroundColor: "black",
  color: "white",
  x: 900,
  duration: 2,
  delay: 1,
  rotate: 360,
  stagger: 1,
  repeat: 2,
  yoyo: true
})

