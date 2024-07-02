// user input a task
// add task by clicking enter button
// delete by clicking delete button
// check button click, line
// selected
// display group: ongoing / complete
// list all

let userInput = document.getElementById('user_input');
let btnEnter = document.getElementById('btn-enter');
btnEnter.addEventListener('click', addTask);
let taskList = [];

// Access key for Enter button
userInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    btnEnter.click();
  }
});

// Modal setup
const deleteConfirmModal = new bootstrap.Modal(document.getElementById('delete-confirm-modal'));
let taskIdToDelete = null;

document.getElementById('btn-delete-confirm-modal').addEventListener('click', () => {
  if (taskIdToDelete) {
    taskList = taskList.filter(task => task.id !== taskIdToDelete);
    taskIdToDelete = null;
    deleteConfirmModal.hide();
    render();
  }
});

// Event listener to close the modal
document.getElementById('cancel-modal-button').addEventListener('click', () => {
  deleteConfirmModal.hide();
});

function addTask() {

    let tasks = {
        id: randomIDGenerate(),
        taskContents: userInput.value, 
        isCompleted: false
    }
    taskList.push(tasks);
    console.log(taskList);
    userInput.value = "";
    render();
}

function render() {
    let resultHTML = "";

    for (let i = 0; i < taskList.length; i++) {
        let task = taskList[i];
        resultHTML += `<div class="col-1">
                <input class="form-check-input" type="checkbox" value="" id="checkbox" ${task.isCompleted ? 'checked' : ''} onclick="toggleComplete('${task.id}')">
            </div>
            <div class="col-7 text-start ${task.isCompleted ? 'task-completed' : ''}">${task.taskContents}</div>
            <div class="col-4 text-end">
                <button class="btn-icon ${task.isCompleted ? 'd-none' : ''}" onclick="toggleComplete('${task.id}')"><i class="fa-solid fa-check"></i></button>
                <button class="btn-icon ${task.isCompleted ? '' : 'd-none'}" onclick="toggleComplete('${task.id}')"><i class="fa-solid fa-rotate-left"></i></button>
                <button class="btn-icon"><i class="fa-solid fa-pen-to-square"></i></button>
                <button class="btn-icon" onclick="confirmDeleteTask('${task.id}')"><i class="fa-solid fa-trash-can"></i></button>
            </div>
            <div class="row">
                <hr>
            </div>`;
    }

    document.getElementById('task-board').innerHTML = resultHTML;
}

// task completed => global scope
window.toggleComplete = function(id) {
    console.log('id', id);
   // Find the task by ID and toggle its completion status
    for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].id === id) {
            taskList[i].isCompleted = !taskList[i].isCompleted;
            break; // Exit loop once the task is found
        }
    }
    console.log(taskList);
    render();
}

// Confirm delete task
window.confirmDeleteTask = function(id) {
    taskIdToDelete = id;
    deleteConfirmModal.show();
}

function editTask() {

}

// ID generator
function randomIDGenerate() {
    return '_' + Math.random().toString(36).substring(2, 9);
}
