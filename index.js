const inputElement = document.getElementById('input');
const todoList = document.querySelector('.todo-list');
const addTaskBtn = document.getElementById('addTask');

function addTask() {
    const task = inputElement.value;

    if (task) {
        const newTask = document.createElement('li');
        newTask.className = 'todo-item';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'form-check-input';

        const taskText = document.createElement('label');
        taskText.className = 'form-check-label';
        taskText.textContent = task;

        newTask.appendChild(checkbox);
        newTask.appendChild(taskText);
        todoList.appendChild(newTask);
        inputElement.value = '';

        checkbox.addEventListener('change', () => {
            taskText.classList.toggle('checked');
            if (checkbox.checked) {
                checkbox.classList.add('bi', 'bi-check');
            } else {
                checkbox.classList.remove('bi', 'bi-check');
            }
        });
    }
}


function logic() {
    addTaskBtn.addEventListener('click', () => {
        addTask();
    });

    inputElement.addEventListener('keydown', (ev) => {
        if (ev.key === 'Enter') {
            addTask();
        }
    });
}

logic();
