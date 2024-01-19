let calculation = localStorage.getItem('calculation') || " ";

function showResult(){
document.querySelector('.result').innerText = `${calculation}`
localStorage.setItem('calculation', calculation);
}