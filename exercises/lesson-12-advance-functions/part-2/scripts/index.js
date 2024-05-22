const buttonElement = document.querySelector('.js-btn');
buttonElement.addEventListener('click', sayHello);

buttonElement.removeEventListener('click', sayHello);
buttonElement.addEventListener('click', () => {console.log('hello')});

function sayHello() {
    console.log('hello world');
}

sayHello();

const oneParam = param => {
    return param += 1;
};

const addOne = param => param + 1;
console.log(addOne(2));

console.log(oneParam(2));

[
    'make dinner',
    'wash dishes',
    'cook dinner',
].forEach((task, i) => {
    console.log(i);
});

[
    'make dinner',
    'wash dishes',
    'cook dinner',
].forEach((currVal, index) => {
    console.log(currVal, index);
});

const obj = {
    method(){

    }
}

console.log([1, -3, 5].filter((value) => {
    return value > 0;
}));

console.log([1,1,3].map(value => value += 1));