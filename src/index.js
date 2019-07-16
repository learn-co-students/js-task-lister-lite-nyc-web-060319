document.addEventListener("DOMContentLoaded", () => {

  const listEles = []

  function submitHandler(event) {
    const input = event.target.querySelector('#new-task-description').value;
    const toAddTo = document.querySelector('ul#tasks')
    const eleToAdd = document.createElement('li')
    listEles.push(eleToAdd)
    eleToAdd.innerText = input;
    toAddTo.appendChild(eleToAdd)
  }
  function deleteHandler(event){
    toDelete = listEles.pop()
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
