let equation = localStorage.getItem('equation') || '';

show();

function equate(key){
    if (key === '='){
        equation = eval(equation);
    } else {
        equation += key;   
    }
    localStorage.setItem('equation', equation);
    show();
}

function show(){
    document.querySelector('.equation').innerHTML = equation;
}

function clearx(){
    equation = '';
    localStorage.removeItem('equation');
    show();
}