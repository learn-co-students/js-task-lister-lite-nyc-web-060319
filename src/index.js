document.addEventListener("DOMContentLoaded", () => {


  function submitHandler(event) {
    debugger
    const priority = event.target.querySelector('#outer').value;

    const input = event.target.querySelector('#new-task-description').value;
    const toAddTo = document.querySelector('ul#tasks')
    const eleToAdd = document.createElement('li')
    eleToAdd.innerText = input;

    switch (priority) {
      case "High Priority":
        eleToAdd.style = "color: red;"
        break;
    
      case "Medium Priority":
        eleToAdd.style = "color: yellow;"

        break;
      case "Low Priority":
        eleToAdd.style = "color: green;"
        break;
    }

    
    toAddTo.appendChild(eleToAdd)
  }
  function deleteHandler(event){
    const toDelete = document.querySelector('ul#tasks').lastChild
    toDelete.remove()
  }
  document.querySelector('#create-task-form').addEventListener(
    'submit', function(e){
      e.preventDefault();
      submitHandler(e)
    })

    document.querySelector('#delete-button').addEventListener(
      'click', function(e){
        deleteHandler(e)
        e.preventDefault()
      }
    )
});
