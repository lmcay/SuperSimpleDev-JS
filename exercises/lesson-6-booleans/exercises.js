
let hour = 7;
let greet = ''
let name = 'Luis'
;
if (hour >= 6 && hour < 12) {
    greet = 'Good morning';
} else if (hour >= 12 && hour < 17) {
    greet = 'Good afternoon';
} else {
    greet = 'Good night'
}

console.log(`${greet}, ${name}!`)

let age = 65;
let message = (age < 6 || age >= 65) ? 'Discount' : 'No discount';
console.log(message);

const isHoliday = false;

message = ((age < 6 || age >= 65) && !isHoliday) ? 'Discount' : 'No discount';
console.log(message);
