const nums = [10, 20, 30];
nums[nums.length-1] = 99;
console.log(nums[2]);

function getLastValue(array){
    return array[array.length - 1];
}

console.log(getLastValue([1,2,3]));
console.log(getLastValue(['hi','hello','good']));

function arraySwap(array){
    const temp = getLastValue(array);
    array[array.length-1] = array[0];
    array[0] = temp;
    console.log(array);
}

arraySwap([1,20,22, 24, 5]);
arraySwap(['hi','hello','good']);

for(let i = 0; i <= 10; i+=2){
    console.log(i);
}

for(let i = 5; i >= 0; i--){
    console.log(i);
}

let i = 0
while(i <= 10){
    
    console.log(i);
    i+=2;
}

let j = 5;
while(j >= 0){
    
    console.log(j);
    j--;
}

function addOne(array){
    for(let i = 0; i < array.length; i++){
        array[i] += 1;
    }

    return array;
}

console.log(addOne([1,2,3]));
console.log(addOne([-2,-1,0,99]));

function addNum(array, num){
    for(let i = 0; i < array.length; i++){
        array[i] += num;
    }

    return array;
}

console.log(addNum([1,2,3], 2));
console.log(addNum([1,2,3], 3));
console.log(addNum([-2,-1,0,99], 2));

function addArrays(array1, array2){
    for(let i = 0; i < array1.length; i++){
        array1[i] += array2[i];
    }

    return array1;
}

console.log(addArrays([1,1,2], [1,1,3]));
console.log(addArrays([1,2,3], [4,5,6]));

function countPositive(nums){

}

function countPositive(nums){
    let positive = 0;

    for(let i = 0; i < nums.length; i++){
        if (nums[i] > 0){
            positive++;
        }
    }

    return positive;
}

console.log(countPositive([1, -3, 5]));
console.log(countPositive([-2, 3, -5, 7, 10]));

function minMax(nums){
    let maxx = null;
    let minx = null;

    for(let i = 0; i < nums.length; i++){
        if (nums[i] > maxx){
            maxx = nums[i];
        }

        if(nums[i] < minx){
            minx = nums[i];
        }
    }

    return { minx, maxx };
}

console.log(minMax([1, -3, 5]));
console.log(minMax([]));
const minxmax = minMax([1,5,3]);
console.log(minxmax.minx);
console.log(minxmax.maxx);

function countWords(words){
    const result = {};

    for(let i = 0; i < words.length; i++){
        const word = words[i];

        if(!result[word]) {
            result[word] = 1;
        } else {
            result[word]++;
        }
    }

    return result;
}

console.log(countWords(['apple', 'grape', 'apple', 'apple']));