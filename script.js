function clickSubmit(event){
  // prevent default event submit to another where
  event.preventDefault();

  // get value from input-text
  let input = document.getElementById("new-task");
  let val = input.value;
  input.value = "";

  // create new li and add value
  let li = document.createElement("li");
  li.classList.add("margin-li")
  li.innerHTML = val;

  //create icon trask
  let trash = document.createElement("i");
  trash.classList.add("fas");
  trash.classList.add("fa-trash-alt");
  trash.addEventListener("click", deleteTask);


  // create icon edit
  let edit = document.createElement("i");
  edit.classList.add("fas");
  edit.classList.add("fa-edit");
  edit.addEventListener("click", editTask);

  // create select
  let mySelect = document.createElement("select");
  edit.classList.add("status");
  let inProgress = document.createElement("option");
  inProgress.innerHTML = "In Progress";

  let done = document.createElement("option");
  done.innerHTML = "Done";

  let review = document.createElement("option");
  review.innerHTML = "Review";

  mySelect.appendChild(inProgress);
  mySelect.appendChild(done);
  mySelect.appendChild(review);

  // append trash, edit, status into li
  li.appendChild(trash);
  li.appendChild(edit);
  li.appendChild(mySelect);

  // append li into ul
  let taskArea = document.getElementById("tasks-Area");
  console.log(taskArea);
  console.log(taskArea.childNodes);
  console.log("test", taskArea.children);
  taskArea.childNodes[1].appendChild(li);
}

// FUNCTION SHOW REMAINING CHARACTERS
function countCharacter(event){
  let numberCharacters = document.getElementById("new-task").value.length;

  let remainingCharacters = 80 - numberCharacters;
  let result = document.getElementById("character");
  result.innerHTML = `${remainingCharacters} remaining character`;

  // change text to red
  if(remainingCharacters < 0){
    result.classList.add("red");
  }
}

// FUNCTION DELETE TASK
function deleteTask(event){
  let trash = event.target;
  console.log(trash);
  let deleteTask = trash.parentNode;
  let ul = trash.parentNode.parentNode;
  ul.removeChild(deleteTask);
}

// FUNCTION EDIT TASK
function editTask(event){
  let edit = event.target;
  console.log(edit);
  let editTask = edit.parentNode;

  let form = document.createElement("form");
  form.addEventListener("submit", renewTask)

  let input = document.createElement("input");
  input.value = editTask.childNodes[0].nodeValue;

  let editButton = document.createElement("button");
  editButton.innerHTML = "Submit";


  form.appendChild(input);
  form.appendChild(editButton);
  editTask.appendChild(form);

  // function renewTask
  function renewTask(event){
    event.preventDefault();
    editTask.childNodes[0].nodeValue = input.value;
    event.target.remove();
  }
}


// EVENT SUBMIT FORM
let addTask = document.getElementById("task-form");
addTask.addEventListener("submit", clickSubmit);

// EVENT COUNT FOR INPUT
let input = document.getElementById("new-task");
input.addEventListener("keyup", countCharacter);

