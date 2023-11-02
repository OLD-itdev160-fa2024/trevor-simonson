var tasks = [];

// Task status enumeration
var taskStatus = {
    active: 'active',
    completed: 'completed'
}

//Task Constructer
function Task(id, name, status){

    this.id = id;
    this.name = name;
    this.status = status;


}

function addTaskElement(task){
    // fetch / create elements
    var listEl = document.getElementById('active-list');
    var taskEl = document.createElement('li');
    var textEl = document.createTextNode(task.name);

    taskEl.setAttribute('id', task.id);

    taskEl.appendChild(textEl);

    listEl.appendChild(taskEl);

}

function addTask(event){
    var inputEl = document.getElementById('input-task');
    console.log(inputEl.value)
    if(inputEl.value != ''){
        var id = 'item-'+ tasks.length;

        var task = new Task(id, inputEl.value, taskStatus.active);


        tasks.push(task);

        addTaskElement(task);

        inputEl.value = '';
    }
}

function completeTask(event){
    var taskEl = event.target;
    var id = taskEl.id;

    for(var i = 0; i < tasks.length; i++){
        if(id === tasks[i].id){
            tasks[i].status = taskStatus.completed;
            break;
        }
    }

    taskEl.remove();
    document.getElementById('completed-list').appendChild(taskEl);
}

// Use enter to click button
function clickButton(event){
    if(event.keyCode === 13){
        document.getElementById('add-task').click();
    }
}


function init(){
    // WIre the add task to button clicker event
    document.getElementById('add-task').onclick = addTask;

    // Wire task completed to click handler
    document.getElementById('active-list').onclick = completeTask;

    document.getElementById('input-task').onkeypress = clickButton;
}

init();