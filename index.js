const inputElement = document.getElementById(`input`)
const todoList = document.querySelector(`.todo-list`)
const addTaskBtn = document.getElementById(`addTask`)

function addTask() {
    const task = inputElement.value

    if (task) {
        const newTask = document.createElement(`li`)
        const checkbox = document.createElement(`input`)
        checkbox.type = `checkbox`
        checkbox.className = `form-check-input`
        checkbox.style.marginRight = `10px`
        checkbox.style.cursor = `pointer`
        const taskText = document.createElement(`span`)
        taskText.textContent = task

        newTask.appendChild(checkbox)
        newTask.appendChild(taskText)
        todoList.appendChild(newTask)
        inputElement.value = ``

        checkbox.addEventListener(`change`, () => {
            if (checkbox.checked) {
                    taskText.style.textDecoration = `line-through`
            } else {
                taskText.style.textDecoration = `none`
            }
        })
    }


}

function logic() {

    addTaskBtn.addEventListener(`click`, () => {
        addTask()
    })

    inputElement.addEventListener(`keydown`, (ev) => {
        if (ev.key === `Enter`) {
            addTask()
        }
    })

}

logic()
