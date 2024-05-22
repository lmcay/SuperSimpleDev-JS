
let taskArray = JSON.parse(localStorage.getItem('taskStorage')) || [];


displayToDoList();


function addTask(){
    let taskHTML = '';
    const addTask = document.querySelector('.toDoInput');
    const dueDate = document.querySelector('.dueDate');
    const name = addTask.value;
    const date = dueDate.value; 

    addTask.value = '';
    dueDate.value = '';
    console.log(typeof taskArray);
    taskArray.push({name, date});
    localStorage.setItem('taskStorage', JSON.stringify(taskArray));


    displayToDoList();
}

function displayToDoList(){

    let taskHTML = '';

    taskArray.forEach(function(taskObject, i){
        taskHTML += `
        
        <p>${taskObject.name}</p>
        <p>${taskObject.date}</p>
        <button class="remove" onclick='deleteTask(${i})'>Delete</button>

        `;
    })

    // for(let i = 0; i < taskArray.length; i++){
    //     taskHTML += `
        
    //     <p>${taskArray[i].name}</p>
    //     <p>${taskArray[i].date}</p>
    //     <button class="remove" onclick='deleteTask(${i})'>Delete</button>

    //     `;
    // }
    
    document.querySelector('.taskHTML').innerHTML = taskHTML;

    
}

function deleteTask(index){
    taskArray.splice(index, 1);
    localStorage.setItem('taskStorage', JSON.stringify(taskArray));
    displayToDoList();
}