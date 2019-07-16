document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.querySelector("#create-task-form");
  const tasks = document.querySelector("#tasks");
  taskForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const userInputString = document.querySelector("#new-task-description").value;
    const newTask = document.createElement("li");
    newTask.textContent = userInputString;
    tasks.appendChild(newTask);
    const newDeleteButton = document.createElement("button")
    newDeleteButton.innerHTML = "delete"
    newDeleteButton.addEventListener('click', deleteButtonClick);
    newTask.appendChild(newDeleteButton);
    
  });

  //tasks.addEventListener('click', deleteButtonClick);
});


function deleteButtonClick(event) {
  if (event.target.type === "submit") {
    this.parentElement.remove()
  }
}