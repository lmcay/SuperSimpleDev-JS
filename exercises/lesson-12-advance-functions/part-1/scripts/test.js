
const num = function(){
    console.log('hello');
};
console.log(num);
console.log(typeof num);
num();

const object1 = {
    num: 2,
    greet(){
        console.log('object function');
    }
}

object1.greet();

function say(){
    console.log('say');
}

function sayInside(sayInside){
    sayInside();
}

sayInside(function(){
    console.log('say');
});

setTimeout(function(){
    console.log('Timeout')
}, 1000)


let time = 10;
setInterval(function(){
    console.log(time);
    time--;
}, 1000);

[
    'make dinner',
    'wash dishes',
    'watch youtube'
].forEach(function(value){
    console.log(value);

    if(value === 'wash dishes'){ //This is same as the continue
        return;
    }
})
