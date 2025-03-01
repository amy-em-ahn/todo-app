/*
Name: Amy Ahn
Version: Beta 1.0.0
Date: 2024-07-01 ~ 02
Feature:
    * User can type tasks
    * User can check tasks
    * User can delete tasks
    * Display a warning befor remove tasks
    * Solting tasks
*/

document.addEventListener('DOMContentLoaded', () => {
    let userInput = document.getElementById('user_input');
    let btnEnter = document.getElementById('btn-enter');
    let taskList = [];
    let currentFilter = 'all';
    let filteredList = [];
    const confirmModal = new bootstrap.Modal(document.getElementById('confirm-modal'));
    let taskIdToDelete = null;

    btnEnter.addEventListener('click', addTask);
    
    userInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            btnEnter.click();
        }
    });

    // when input filed focused, user input text remove
    userInput.addEventListener('focus', () => {
        userInput.value = "";
        userInput.placeholder = "";
    });

    userInput.addEventListener('blur', () => {
        userInput.placeholder = "Enter a task";
    });

    document.getElementById('btn-delete-modal').addEventListener('click', () => {
        if (taskIdToDelete) {
            taskList = taskList.filter(task => task.id !== taskIdToDelete);
            taskIdToDelete = null;
            confirmModal.hide(); 
            filterTasks(); // display the filtered tasks
        } else {
            confirmModal.hide(); 
        }
    });


    document.getElementById('btn-cancel-modal').addEventListener('click', () => {
        confirmModal.hide();
    });

    document.querySelectorAll('.dropdown-menu .dropdown-item').forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            filter(event);
            // dropdown select
            updateDropdownButtonText(event.target.textContent);
        });
    });

    function addTask() {
        if (userInput.value.trim() === "") {
            showModalWithMessage("Please enter a task");
            return;
        }
        
        let tasks = {
            id: randomIDGenerate(),
            taskContents: userInput.value,
            isCompleted: false
        };
        taskList.push(tasks);
        userInput.value = "";
        
        if (currentFilter !== 'all') {
            filterTasks(); // Update the filtered list and render if not in 'all' filter
        } else {
            render(); // Render all tasks if in 'all' filter
        }
    }

    function render() {
        let list = currentFilter === 'all' ? taskList : filteredList;
        let resultHTML = "";

        for (let task of list) {
            resultHTML += `
                <div class="col-1" style="width: 60px;">
                    <input class="form-check-input" type="checkbox" ${task.isCompleted ? 'checked' : ''} onclick="toggleComplete('${task.id}')">
                </div>
                <div style="width: 100%;" class="col text-start ${task.isCompleted ? 'task-completed' : ''}">${task.taskContents}</div>
                <div class="col-2 text-end" style="width:120px;">
                    <button class="btn-icon ${task.isCompleted ? 'd-none' : ''}" onclick="toggleComplete('${task.id}')"><i class="fa-solid fa-check"></i></button>
                    <button class="btn-icon ${task.isCompleted ? '' : 'd-none'}" onclick="toggleComplete('${task.id}')"><i class="fa-solid fa-rotate-left"></i></button>
                    <button class="btn-icon"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button class="btn-icon" onclick="confirmDeleteTask('${task.id}')"><i class="fa-solid fa-trash-can"></i></button>
                </div>
                <div class="row"><hr></div>`;
        }

        document.getElementById('task-board').innerHTML = resultHTML;
    }

    window.toggleComplete = function(id) {
        let task = taskList.find(task => task.id === id);
        if (task) {
            task.isCompleted = !task.isCompleted;
            filterTasks();  // Filter tasks after toggling complete status
        }
    }

    window.confirmDeleteTask = function(id) {
        taskIdToDelete = id;
        document.getElementById('modal-message').textContent = "Are you sure you want to delete this task?";
        document.getElementById('btn-cancel-modal').classList.remove('d-none');
        document.getElementById('btn-delete-modal').textContent = "Delete";
        confirmModal.show(); 
    }

    // Modal function
    function showModalWithMessage(message) {
        document.getElementById('modal-message').textContent = message;
        document.getElementById('btn-cancel-modal').classList.add('d-none');
        document.getElementById('btn-delete-modal').textContent = "Close";
        confirmModal.show();
    }

    function randomIDGenerate() {
        return '_' + Math.random().toString(36).substring(2, 9);
    }

    function filter(event) {
        currentFilter = event.target.getAttribute('value');
        filterTasks();
    }

    function filterTasks() {
        if (currentFilter === 'all') {
            filteredList = taskList;
        } else if (currentFilter === 'ongoing') {
            filteredList = taskList.filter(task => !task.isCompleted);
        } else if (currentFilter === 'completed') {
            filteredList = taskList.filter(task => task.isCompleted);
        }
        render();
    }

    function updateDropdownButtonText(text) {
        document.getElementById('dropdown-button').textContent = text;
    }
});