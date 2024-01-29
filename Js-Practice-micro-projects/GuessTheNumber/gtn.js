let guessNo ;
let prevGuess = ""
let attempts = 5;
let randomNum ; 

 function randomGen(){
 randomNum = parseInt(Math.random()*100+1);
 return randomNum;
 }

document.querySelector("#newG").addEventListener("click" ,newGame);
randomGen();
document.querySelector("#iBox").addEventListener("keydown", (e)=>{
  if(e.key === "Enter"){
    e.preventDefault();  //stopping form submission behaviour
    innerWork();
  }
})

function comparison(guess){
  if(guessNo < randomNum ){
    showMsg("Try a bit Higher...");
  }else if(guessNo > randomNum){
    showMsg("Try a bit lower...");
  }else if(guessNo == randomNum){
  showMsg(`Well Done, ${randomNum} is the correct guess`);
  alert(`Well Done, ${randomNum} is the correct guess`)
  newGame();
  }
}

function showMsg(msg){
  document.querySelector(".msg").innerText = msg
}

function innerWork(){
  {
   
    guessNo = document.querySelector("#iBox").value;
    
    if(guessNo < 1 || guessNo > 100 || isNaN(guessNo)){
      alert("Invalid Input");
      prevGuess +=`🚫`; 
    }else{
      attempts-- ;
      document.querySelector("#attempts").innerText = attempts;
      prevGuess +=`${guessNo} `; 
      document.querySelector("#prevG").innerHTML = prevGuess
    comparison(guessNo);
    document.querySelector("#iBox").value = ""
    
    }
    
    if(attempts == 0){
      alert(`Game Over! You are out of guesses. Number was ${randomNum}`)
 newGame();
    }
    
    }
}

function newGame(){
  attempts = 5;
prevGuess = "";
document.querySelector("#attempts").innerText = attempts;
document.querySelector("#prevG").innerHTML = prevGuess
showMsg(`New Game Started.. Start Guessing`)
 randomGen();

}