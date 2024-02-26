
class Post {
    constructor({author, date, desc, id, img, profile}){
        this.author = author
        this.date = date
        this.desc = desc
        this.id = id
        this.img
        this.profile
    }
    toHTML(){
        const statusClass = this.done ? 'task-done' : '';
        return `
        <div class="column">
            <div class="row">
                <div class="card">
                    <div class="container">
                        <img src="${this.profile}" alt="Avatar" class="card-profile">
                        <h4><b class="cardtitle">${this.author}</b></h4>
                        <img src="${this.img}" alt="post" style="width:100%" class="cardimages">
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}


function updateStorage(newData) {
    localStorage.setItem('tasks', JSON.stringify(newData));
}

function readStorage(){
    const jsonString = localStorage.getItem('tasks');
    let result = JSON.parse(jsonString) || [];
    result = result.map(taskData => new Task(taskData));
    return result;
}

function createPost() {
    event.preventDefault()
    //TODO: grab the data from the author and put it in a variable
    const profile;
    const desc = document.getElementById('desc').value;// TODO: Pull in form data from DOM
    const img = document.getElementById('img').value;// TODO: Format form data to Task Object

    if (text == ''){
        alert('Please enter a task...');
        return;
    }
    const newTask = new Task({author, date:Date.now(), desc, id: Date.now(), img, profile})
    const existingTasks = readStorage();
    existingTasks.push(newTask);
    updateStorage(existingTasks);
    readTasks();
    // TODO: Pull in tasks from local storage and push new one to task list array
    // TODO: Save it to local storage
    // TODO: Update DOM (Call readTasks())
    // Hint - Look at the JavaScript code from lab 1B to see how to extract form data
}

function readTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    
    const tasks = readStorage();
    tasks.forEach(task => {
        taskList.innerHTML += task.toHTML();
    });
    // TODO: Clear current tasks to not have duplicates
    // TODO: Pull in tasks from local storage
    // TODO: Parse tasks and Update DOM accordingly
}

function updateTask(id) {
    const tasks = readStorage();
    const taskToUpdate = tasks.find((task) => task.id === id);
    if (taskToUpdate){
        taskToUpdate.toggle();
    }
    // TODO: Update the task in `tasks` array by flipping it's `done` value
    // TODO: Save to local storage
    // TODO: Update DOM (Call readTasks())
}

function deleteTask(id) {
    const tasks = readStorage();
    const updatedTasks = tasks.filter((task) => task.id !== id);
    updateStorage(updatedTasks);
    readTasks();
    // TODO: Delete task from `tasks` array
    // TODO: Save to local storage
    // TODO: Make the DOM update
    // TODO: Update DOM (Call readTasks())

}

document.addEventListener('DOMContentLoaded', () => {
    readTasks();
})
