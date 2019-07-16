document.addEventListener("DOMContentLoaded", () => {
  const newForm = document.querySelector('#create_task_form');
  const toDoList = document.getElementById('tasks');
  const submit = document.getElementById('submit');
  const newTaskDescription = document.getElementById('new-task-description');

  submit.addEventListener('click', (event) => {
    event.preventDefault();
    createNewTask(event);
  })
  const createNewTask = function() {
    const newTask = document.createElement('li');
    newTask.innerText = newTaskDescription.value;
    toDoList.appendChild(newTask)
  }
  
  
  
});

