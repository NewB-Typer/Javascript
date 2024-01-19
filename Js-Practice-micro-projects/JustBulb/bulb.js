var bulb = document.querySelector("#bulb")
var on = document.querySelector("button")


var count = 0;
on.addEventListener("click", function(){
  if(count === 0){
    bulb.style.backgroundColor = "yellow"
    bulb.style.border = "5px dotted greenyellow"
    on.style.border = "5px solid darkred"
    on.innerText = "OFF"
    count = 1;
  }else{
    bulb.style.backgroundColor = "transparent"
    bulb.style.border = "3px solid green"
    on.style.border = "4px dotted green"
   
    on.innerText = "ON"
    count = 0;
  }

})