//variables
var listofToDOs = [];
var input = document.getElementById("input");
var todolist = document.getElementById("todolist");

//mouse click event listener on hitting the "Add" button
document.getElementById("button").onclick = click;

//"Add" click function getting the input
function click() {
  listofToDOs.push(input.value);
  console.log(listofToDOs);
  input.value = "";
  printToDos();
}

//Function to display the added ToDo's with facility to Edit and Delete
function printToDos() {
  todolist.innerHTML = "";

  listofToDOs.forEach(function (task, option) {
    todolist.innerHTML +=
      "<li>" +
      task +
      "<a onclick = 'editTask(" +
      option +
      ")'>Edit</a>" +
      "<a onclick='deleteTask(" +
      option +
      ")'>&times|</a></li>";
  });
}

//Edit function to edit existing ToDo's
function editTask(option) {
  var newTodo = prompt("Update task : ");
  listofToDOs.splice(option, 1, newTodo);
  printToDos();
}

//Delete function to delete existing ToDo's
function deleteTask(option) {
  listofToDOs.splice(option, 1);
  printToDos();
}
