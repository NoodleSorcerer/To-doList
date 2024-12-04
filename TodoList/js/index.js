const button = document.getElementById("Add");
const list = document.getElementById("todo_list");

class Task {
    constructor(name, description, date, priority) {
        this.name = name;
        this.description = description;
        this.date = date;
        this.priority = priority;
        const fragment = document.createDocumentFragment();
    }
    CreateTask() {
        const taskContainer = document.createElement('div');
        list.appendChild(taskContainer);
        taskContainer.setAttribute('class', 'task-container');

        const taskName = document.createElement('p');
        taskName.textContent = this.name;
        taskContainer.appendChild(taskName);

        const taskDescription = document.createElement('p');
        taskDescription.textContent = this.description;
        taskContainer.appendChild(taskDescription);

        const priority = document.createElement('p');
        priority.textContent = this.priority;
        taskContainer.appendChild(priority);

        const form = document.createElement('form');
        const input = document.createElement('input');
        const label = document.createElement('label');
        input.type = 'checkbox';
        form.appendChild(label);
        form.appendChild(input);
        taskContainer.appendChild(form);
        return taskContainer;
    }
}

button.addEventListener("click", function (event) {
    // Create_Task();
    const task = new Task("TaskOne","asfdasf","asdf","asdf");
    task.CreateTask()

})
