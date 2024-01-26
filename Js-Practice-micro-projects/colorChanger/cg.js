const allButtons = document.querySelectorAll(".button")

allButtons.forEach((button)=>{

button.addEventListener('click', (e)=>{
  document.querySelector('body').style.backgroundColor = e.target.id
})

})