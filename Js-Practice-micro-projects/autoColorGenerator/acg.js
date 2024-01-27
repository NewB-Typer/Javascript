const hex = "0123456789ABCDEF"
let cal = "";
let intervalID ;
function genColor(){
cal = "#"
for(let i = 0 ; i < 6 ; i++ ){
  let randPlace = Math.floor(Math.random()*16)
  cal += hex[randPlace];
}
return cal;
}


document.querySelector('#start').addEventListener("click", ()=>{

intervalID = setInterval(()=>{
    genColor();
    document.querySelector('body').style.backgroundColor = cal;
  }, 1000)
console.log("Starting..")
})

document.querySelector('#stop').addEventListener("click",()=> {
  console.log("Stopping..")
clearInterval(intervalID);
})

