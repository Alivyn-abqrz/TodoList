const todoList = [{
  name:'watch anime',
  duedate: '2022-11-22'

  },{  name:'Coding',
  duedate: '2022-11-22'
}];
renderTodoList ();

function renderTodoList (){
  let todolistHTML = '';

  todoList.forEach((todoObject, index)=>{
    const {name, dueDate}= todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-todo-button js-delete-button">Delete</button> 
    `;
    todolistHTML+=html;

  });

  document.querySelector('.js-todo-list').innerHTML =todolistHTML;
}
document.querySelectorAll('.js-delete-button')
.forEach((deleteButton, index)=>{
  deleteButton.addEventListener('click',()=>{
    todoList.splice(index, 1);
        renderTodoList();
  })
});

document.querySelector('.js-todo-button').addEventListener('click', ()=>{
  addTodo();
});
function addTodo(){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
 
  const dateinputElement= document.querySelector('.js-due-date-input');
  const dueDate = dateinputElement.value;

  todoList.push({
    name,
  dueDate

});

  inputElement.value = '';
  renderTodoList ();
  }
