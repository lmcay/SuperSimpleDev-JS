
const multiply = (param1, param2) => param1*param2;

console.log(multiply(2,3));
console.log(multiply(7,10));

const countPositive = array => {
    let count = 0;
    array.forEach((value) => {
        if(value > 0){
            count += 1
        }
    })

    return count;
}

console.log(countPositive([1, -3, 5]));
console.log(countPositive([-2, 3, -5, 7, 10]));

const addNum = (arrayx, toAdd) => {
    return arrayx.map(val => val += toAdd);

}

console.log('a', addNum([1,2,3], 2));
console.log('b', addNum([-2,-1,0, 99], 2));

const removeEgg = (arrayx) => {
    return newArr = arrayx.filter(val => val !== 'egg' ? true : false);
}

const remove2Egg = arrayx => {
    let count = 0;
    let newArr = arrayx.filter(
        function(value){
            if(value === 'egg' && count < 2){
                count++;
                return false;
            } else {
                return true;
            }
        }
    );

    return newArr;
}

console.log(remove2Egg(['egg', 'apple', 'egg', 'egg', 'ham']));

