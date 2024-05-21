function liveText(){
    const inputElement = document.querySelector('.textInput');
    const messageElement = document.querySelector('.live');

    inputElement.onkeyup = function() {
        messageElement.innerHTML = inputElement.value;
    };
}

liveText();
console.log(document.querySelector('.a9'));

function chose(userChoice){
    document.querySelector('.chose').innerText = `You chose: ${userChoice}`;
}

function b9(){
    let msg = document.querySelector('.b9');
    msg.innerText = msg.innerText === '9b' ? '9b done!' : '9b';
}

function displayName(){
    let name = document.querySelector('.yourName').value;
    document.querySelector('.displayName').innerText = `Your name is ${name}`;
}

function onKeyName(key){
    if(key === 'Enter'){
        displayName();
    }
}

function calculate(){
    let price = parseFloat(document.querySelector('.cost').value);
    let total = price < 40 ? price+= 10 : price;
    

    document.querySelector('.totalCost').innerText = `$${Math.round(total*100)/100}`;
}

function enter(key){
    if(key === 'Enter'){
        calculate();
    }
}