console.log('hello from js');

$(document).ready(onReady);

function onReady(){
  console.log('hello from JQ');
  getTasks();
  $('#addTask').on('click', addTask);
}//end onReady

function addTask(){
  let newTask = $('#taskInput').val();
  $.ajax({
    method: 'POST',
    url: '/toDo',
    data: {taskName: newTask}
  }).then(function(response){
    $('#taskList').empty();
    getTasks();
    console.log(response);    
  }).catch(function(error) {
    console.log(error);
  });
}//end add Task

function getTasks(){
  // console.log('getting Tasks');
  $.ajax({
    method: 'GET',
    url: '/toDo'
  }).then(function(response) {
    console.log(response);  
    appendToDom(response);  
  }).catch(function(error){
    console.log('error in get', error);    
  });
}//end getTasks

function appendToDom (array) {
  let completedText = '';
  for(let task of array) {
    if(task.completed === true){
      completedText = 'Yes! Good Job!'
    } else {
      completedText = 'No'
    }
    $('#taskList').append(`
      <tr>
        <td>${task.taskName}</td>
        <td>${completedText}</td>
        <td><button>Complete Task</button></td>
        <td><button>Delete Task</button></td>
      </tr>
    `);
  }
}//end appendToDom