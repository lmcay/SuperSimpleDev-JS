let equation = localStorage.getItem('equation') || '';

function updateCalculation(userInput){
    equation += userInput;
    console.log(equation);
    localStorage.setItem('equation', equation);
}

function clearx(){
    equation = '';
    localStorage.removeItem('equation');
    console.log(equation);
}