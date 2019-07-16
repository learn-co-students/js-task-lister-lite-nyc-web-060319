document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.querySelector("#create-task-form");
  const tasks = document.querySelector("#tasks");
  taskForm.addEventListener('submit', submitTaskEventHandler);
});

function taskStyleFromColor(priorityString) {
  switch(priorityString) {
    case "high":
      return "red";
    case "medium":
      return "yellow";
    case "low":
      return "green";
    default:
      console.error("Bad priority: " + priorityString)
  }
}

function createNewTask() {
  const userInputString = document.querySelector("#new-task-description").value;
  const userInputPriority = document.getElementById("new-task-input").value;
  const newTask = document.createElement("li");
  newTask.textContent = userInputString;
  newTask.style.color = taskStyleFromColor(userInputPriority)
  return newTask
}

function createDeleteButton() {
  const newDeleteButton = document.createElement("button")
  newDeleteButton.innerHTML = "delete"
  newDeleteButton.addEventListener('click', deleteButtonClick);
  return newDeleteButton;
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
