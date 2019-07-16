document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.querySelector("#create-task-form");
  taskForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const userInputField = document.querySelector("#new-task-description").value;
    const userInputString = userInputField;
    const tasks = document.querySelector("#tasks");
    const newTask = document.createElement("li");
    newTask.textContent = userInputString;
    tasks.appendChild(newTask);
    if (event.target.value === "Create New Task") {
    }

  });
});
