const startButton = document.querySelector('.str');
startButton.addEventListener('click', () => {
  startWatch();
  document.querySelector('.str').innerText = 'Pause'
});

const resetButton = document.querySelector('.res');
resetButton.addEventListener('click', () => {
 resetWatch();
  console.log('Reset Done');
});

let minutesInput = document.querySelector('.min');
let secondsInput = document.querySelector('.sec');
let timer;

function startWatch() {
  if (!timer) {
    timer = setInterval(updateWatch, 1000); 
  }
}

function displayWatch() {
  let minutes = minutesInput.value;
  let seconds = secondsInput.value;

  document.querySelector('.display').innerText = `${minutes}:${seconds}`;
}

function updateWatch() {
  let minutes = parseInt(minutesInput.value, 10);
  let seconds = parseInt(secondsInput.value, 10);

  if(minutes === 0 && seconds === 0){
  resetWatch();
}else if ( seconds === 0){
  seconds = 59;
  minutes--
}else{
  seconds--
}
if(minutes < 0){
  minutes = 0
}
 

  minutesInput.value = minutes.toString().padStart(2, '0');
  secondsInput.value = seconds.toString().padStart(2, '0');

  displayWatch();
}


function resetWatch() {
  clearInterval(timer);
  timer = null;
  minutesInput.value = '00';
  secondsInput.value = '00';
  displayWatch();
}
