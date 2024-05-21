String(23);

window.document
window.console.log
window.alert

function subscribe() {
    let sub = document.querySelector('.subscribe');
    sub.innerText = sub.innerText === 'Subscribe now' ? 'Subscribed' : 'Subscribe';
}

function calculate(){
    let price = parseFloat(document.querySelector('.cost').value);
    const total = price < 40 ? price+= 10 : price;
    document.querySelector('.totalCost').innerText = `$${total}`;
}

function enter(key){
    if(key === 'Enter'){
        calculate();
    }
}