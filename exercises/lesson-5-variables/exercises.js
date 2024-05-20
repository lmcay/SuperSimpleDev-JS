
const name = 'Luis';
console.log(`My name is: ${name}`);
const coffee = 5;
const bagels = 3;
const soup = 9;
let cost = coffee + (2*bagels) + soup;
let tax = (coffee + (2*bagels) + soup)*0.1;
let totalCost = cost + tax;

console.log(`Cost of food: $${cost}`);
console.log(`Tax (10%): $${tax}`);
console.log(`Total Cost: $${totalCost}`);
