
const todoList = [{
  name: 'cut paper',
  dueDate: '2023-11-21'
  },{
    name: 'break table',
    dueDate: '2023-12-24'
  }
  ];
  
  function addList(){
  const itemList = document.querySelector('.inputElement');
  const dateInput = document.querySelector('.dateType');
  
  const dueDate = dateInput.value
  const item = itemList.value
  
  todoList.push({
    item: item,
  dueDate: dueDate
  /*shorthand property:
  item,
  duuDate 
  also works
  */
  }
  )
  console.log(todoList)
  itemList.value= ''
  dateInput.value = ''
  displayList();
  }
  function delItem(i){
    todoList.splice(i,1)
    displayList();
  
  }
  
  function displayList(){
  
  let todoHTML = '' ;
  todoList.forEach((todo, i) => {
      const item = todo.item; // const {item} = todo  -- Destructuring
      const date = todo.dueDate;
      const html = `<div> ${item}</div> 
      <div> ${date}</div>   
      <button class="delB delX"
      displayList();  
        ">Delete</button>`;
      todoHTML += html;
  });
 
  document.querySelector('.textDiv').innerHTML = todoHTML

  document.querySelectorforAll('.delX').forEach((delBtn,index)=>{
delBtn.addEventListener('click', delItem(i))

})

  }
  
 