document.addEventListener("DOMContentLoaded", () => {
  let isThereAButton
  const form = document.querySelector('#create-task-form')
  const taskInput = form["new-task-description"]
   form.addEventListener('submit', function(eventObj){
    eventObj.preventDefault()
    const taskValue = taskInput.value
    console.log("form submitted")
    var taskOutput = document.createElement("li")
    taskOutput.id = taskValue + "list"
    var node = document.createTextNode(taskValue)
      taskOutput.appendChild(node)
    var element = document.getElementById("tasks")
    element.appendChild(taskOutput)
     var taskButton = document.createElement("BUTTON")
     taskButton.innerHTML = "DElete me"
     taskButton.id = taskValue



     element.appendChild(taskButton)
     isThereAButton = true
     //delete

        if (isThereAButton) {
           const deleteButtons = document.querySelectorAll(`#${taskValue}`)
           deleteButtons.forEach(function(button){
             button.addEventListener('click',
      function(eventObj2){

        eventObj2.preventDefault()
        // const deleteButton = document.querySelector(`#${taskValue}`)
      const list = document.querySelector(`#${taskValue}list`)
       list.remove()
       button.remove()
       // element.removeChild(button)

           })


           })
         }
   })







});
