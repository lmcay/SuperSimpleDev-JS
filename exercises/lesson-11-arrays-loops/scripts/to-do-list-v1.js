let toDo = [];


function add(vers){
    let toDoListHTML = '';
    const task = document.querySelector(`.${vers}`);
    toDo.push(task.value);
    
    if(vers === 'v1'){
        
        console.log(toDo);
    } else if (vers === 'v2'){
        for(let i = 0; i < toDo.length; i++){
            toDoListHTML += `<p>${toDo[i]}</p>`;
        }

        document.querySelector('.showList').innerHTML = toDoListHTML;
        console.log(toDoListHTML);
    }
    
    task.value = '';
}

