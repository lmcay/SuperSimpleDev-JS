let taskArray = JSON.parse(localStorage.getItem('taskStorage')) || [];


displayToDoList();

document.querySelector('.add').addEventListener('click', addTask);

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

    taskArray.forEach((taskObject, i) => {
        taskHTML += `
        
        <p>${taskObject.name}</p>
        <p>${taskObject.date}</p>
        <button class="remove")'>Delete</button>

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

    //In this code, we select all the remove buttons (since we have multiple)
    //then we go ahaead and loop through each of this button using a for each
    //then add an event listener of click then run our remove function

    // THIS IS GOLD right here
    document.querySelectorAll('.remove')
    .forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
            deleteTask(index);
        })
    });

    
}

function deleteTask(index){
    taskArray.splice(index, 1);
    localStorage.setItem('taskStorage', JSON.stringify(taskArray));
    displayToDoList();
}