document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form")
  const subbtn = document.querySelector("#submit-btn")
  const taskList = document.getElementById("tasks")
  let counter = 1
  // your code here
  document.addEventListener('click', function(e) {
    //worked with both subbtn and form as location
    e.preventDefault()
    var x;
    //why did both 'event' and 'e' work on line 8?
    const userInput = document.querySelector("#new-task-description").value
    if (e.target.id === 'submit-btn') {
      const newLi = document.createElement("li")
      newLi.textContent += userInput
      var x = document.createElement("button");
      x.setAttribute('id', `deletebtn${counter++}`)
      var t = document.createTextNode("X");
      x.appendChild(t);
      taskList.appendChild(newLi)
      newLi.appendChild(x);
    }
    if (e.target.innerText === "X") {
      e.target.parentElement.remove()
    }
  })
});

