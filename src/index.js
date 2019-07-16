document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.querySelector("#create-task-form");
  const tasks = document.querySelector("#tasks");
  taskForm.addEventListener('submit', submitTaskEventHandler;
});

function createNewTask() {
  const userInputString = document.querySelector("#new-task-description").value;
  const newTask = document.createElement("li");
  newTask.textContent = userInputString;
}

function createDeleteButton() {
  const newDeleteButton = document.createElement("button")
  newDeleteButton.innerHTML = "delete"
  newDeleteButton.addEventListener('click', deleteButtonClick);
}

function submitTaskEventHandler(event) {
  event.preventDefault();
  const newTask = createNewTask();
  tasks.appendChild(newTask);
  const newDeleteButton = createDeleteButton();
  newTask.appendChild(newDeleteButton);
}

function deleteButtonClick(event) {
  if (event.target.type === "submit") {
    this.parentElement.remove()
  }
}
