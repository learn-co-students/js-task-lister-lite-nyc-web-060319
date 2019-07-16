document.addEventListener("DOMContentLoaded", () => {
  // your code here
  function myFunction(){
    let newTask = document.querySelector('#new-task-description');
    let taskString = newTask.value;

    let unorderedList = document.querySelector('#tasks');
    let newList = document.createElement('li');
    newList.innerText = taskString;
    unorderedList.appendChild(newList);
  }

  
  document.querySelector('#create-task-form').addEventListener('submit', (eventObj) => {
    console.log(eventObj);
    eventObj.preventDefault();
    myFunction();
    console.log(newTask.value);
  });

  let deleteButton = document.createElement('button');
  deleteButton.innerText = "DELETE";

  document.body.appendChild(deleteButton);

  deleteButton.addEventListener('click', () => {
    let unorderList = document.querySelector('#tasks');
    unorderList.lastElementChild.remove(); //lastChild
  });


});


