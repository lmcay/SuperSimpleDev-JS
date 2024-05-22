let add = function(){ console.log(3+2); };
// add();

function runTwice(fun){
    fun();
    fun();
}

runTwice(function(){console.log('5')});
runTwice(add);

function start(){
    let btn = document.querySelector('.click');
    btn.innerHTML = 'Loading...';
    setTimeout(function(){btn.innerHTML = 'Finished!'}, 1000);
}

let timeoutId;

function addCart(){
    let displayMsg = document.querySelector('.display');
    displayMsg.innerHTML = 'Added';
    
    clearTimeout(timeoutId);

    timeoutId = setTimeout(function(){displayMsg.innerHTML = ''}, 2000);
    
}

setInterval(() => document.title = '(2) New Messages', 1000);

setInterval(function(){
    if(document.title === 'App'){
        document.title = '(2) New Messages';
    } else {
        document.title = 'App';
    }
}, 1000)

let numb = 0;
let intervalID;
function message(act){
    
    if(act === 'add'){
        numb += 1;
    } else if (act === 'remove' && numb > 0){
        numb -=1;
    }

    clearInterval(intervalID);

    if (numb === 0){
        document.title = 'App'
    } else {
        intervalID = setInterval(function(){
            if(document.title === 'App'){
                document.title = `(${numb}) New messages`;
                
            } else {
                document.title = 'App';
            }
        }, 1000)
    }

}