
const rButton = document.querySelector('.rScore');
rButton.addEventListener('click', (action) => {
resetScore();
})


let score = JSON.parse(localStorage.getItem('score')) || {
  wins : 0,
  losses : 0,
  ties : 0
  }

function resetScore(){
score.wins = 0,
score.losses = 0,
score.ties = 0,
localStorage.removeItem('score')
scoreBoard();
confirm('Score Reset Done...')
}

function scoreBoard(){
document.querySelector('.board').innerHTML = `Wins : ${score.wins} Losses : ${score.losses} Ties : ${score.ties}`
}

let genNum = Math.random()

function rock(){
 genNum = Math.random();
  if(genNum > 0 && genNum < 1/3 ){
  comChoice = 'Rock';
  score.ties += 1
  scoreBoard();
  alert('Computer also chose Rock, Game Tied!!');
  }
  else if(genNum > 1/3  &&  genNum  < 2/3){
  comChoice = 'Paper';
  score.losses += 1;
  scoreBoard();
  alert(`Computer chose Paper and you chose Rock, You lose!!`);
  }
  else{
  comChoice = 'Scissor';
  score.wins += 1;
  scoreBoard();
  alert(`Computer chose Scissor and you chose Rock, You Won!!`);
  }
  localStorage.setItem('score' , JSON.stringify(score));
}

function paper(){ 
genNum = Math.random();
if(genNum > 0 && genNum < 1/3 ){
comChoice = 'Rock';
score.wins += 1;
scoreBoard();
alert(`Computer chose Rock and you chose Paper, You Won!!`);
}
else if(genNum > 1/3  &&  genNum  < 2/3){
comChoice = 'Paper';
score.ties += 1;
scoreBoard();
alert(`Computer also chose Paper, Game Tied!!`);
}
else{
comChoice = 'Scissor';
score.losses += 1;
scoreBoard();
alert(`Computer chose Scissor and you chose Paper, You lose!!`);
}
localStorage.setItem('score' , JSON.stringify(score));
}

function scissor(){
  genNum = Math.random();
  if(genNum > 0 && genNum < 1/3 ){
  comChoice = 'Rock';
  score.losses += 1;
  scoreBoard();
  alert(`Computer chose Rock and you chose Scissor, You lose!!`);
  }
  else if(genNum > 1/3  &&  genNum  < 2/3){
  comChoice = 'Paper';
  score.wins += 1;
  scoreBoard();
  alert(`Computer chose Paper and you chose Scissor, You Won!!`);
  }
  else{
  comChoice = 'Scissor';
  score.ties += 1;
  scoreBoard();
  alert('Computer also chose Scissor, Game tied!!')
  }
  localStorage.setItem('score' , JSON.stringify(score));  
}


document.body.addEventListener('keydown', (event) =>{

  if(event.key === 'Backspace'){
  resetScore();
}
  if(event.key === 'r'){
  rock();
}else if(event.key === 'p'){
  paper();
}else if(event.key === 's'){
scissor()
}

})
