var field = document.querySelector('body')
var cursor = document.querySelector("#cursor")

field.addEventListener("mousemove", function(info){
  cursor.style.left = info.x+ "px"
  cursor.style.top = info.y+ "px"
})

