console.log('hello from js');

$(document).ready(onReady);

function onReady(){
  console.log('hello from JQ');
  getTasks();
  $('#addTask').on('click', addTask);
  $('#taskList').on('click', '.deleteBtn', deleteTask);
  $('#taskList').on('click', '.completeBtn', completeTask);
}//end onReady

function completeTask(){
  let taskId = $(this).closest('tr').data('id');
  let status = $(this).closest('tr').data('complete');
  let dataToSend = {}
  //allow user to toggle a task from done to undone and back
  if(status === true){
    dataToSend = {taskStatus: false};
    $(this).closest('tr').addClass('complete');
  }else {
    dataToSend = {taskStatus: true};
    $(this).closest('tr').removeClass();
  }
  $.ajax({
    method: 'PUT',
    url: `/toDo/completed/${taskId}`,
    data: dataToSend
  }).then(function(response){
    getTasks();
    console.log(response);
  }).catch(function(error) {
    console.log(error);   
  })
}//end completeTask


function deleteTask(){
  let taskId = $(this).closest('tr').data('id');
  let answer = window.confirm('You SURE you want to give up?');
  if(answer) {
    $.ajax({
      method: 'DELETE',
      url: `/toDo/${taskId}`
    }).then(function(response){
      getTasks();
      console.log(response);
    }).catch(function(error) {
      console.log(error);   
    })
  } else {
    console.log('Ok we will keep it');
  }
  
}//end deleteTask


function addTask(){
  let newTask = $('#taskInput').val();
  $.ajax({
    method: 'POST',
    url: `/toDo/add/${newTask}`,
    // data: {taskName: newTask} passing user input as a param to allow for use of apostraphe in task creation
  }).then(function(response){
    $('#taskInput').val('');
    getTasks();
    console.log(response);    
  }).catch(function(error) {
    console.log(error);
  });
}//end add Task

function getTasks(){
  $.ajax({
    method: 'GET',
    url: '/toDo'
  }).then(function(response) {
    console.log(response);  
    $('#taskList').empty();
    appendToDom(response);  
  }).catch(function(error){
    console.log('error in get', error);    
  });
}//end getTasks

function appendToDom (array) {
  let completedText = '';
  let setClass = '';
  for(let task of array) {
    if(task.completed === true){
      completedText = 'Done! Good Job!'
      setClass = 'complete'
    } else {
      completedText = 'Undone'
      setClass = 'notComplete'
    }
    $('#taskList').append(`
      <tr data-id=${task.id} data-complete=${task.completed} class='${setClass}'>
        <td>${task.taskName}</td>
        <td>${completedText}</td>
        <td><button class="completeBtn">Change Status</button></td>
        <td><button class="deleteBtn" data-toggle="modal" data-target="#myModal">Delete</button></td>
      </tr>
    `);
  }
}//end appendToDom

