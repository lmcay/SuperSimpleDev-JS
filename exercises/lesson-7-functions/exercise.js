
function greet(name = 'there'){
    console.log(`Hello ${name}!`);
}

greet('Luis');
greet();

function convertToFahrenheit(celcius){
    let fahrenheit = (celcius*9/5)+32
    return fahrenheit;
}

let a = convertToFahrenheit(25);
console.log(a);

function convertToCelcius(fahrenheit){
    let celcius = (fahrenheit-32)*5/9;
    return celcius;
}

let b = convertToCelcius(86);
console.log(b);

function convertTemperature(degrees, unit){
    let converted;

    if(unit === 'C'){
        converted = (degrees*9/5)+32;
    } else if (unit === 'F') {
        converted = (degrees-32)*5/9;
    }

    return converted;
}

let c = convertTemperature(25, 'C')
console.log(c + 'F');

let d = convertTemperature(86, 'F');
console.log(d + 'C');

function convertLength(length, from, to){

    if(from === 'miles' && to === 'km'){
        return (length*1.6) + ' km';
    } else if (from === 'km' && to === 'miles'){
        return (length/1.6) + ' miles';
    } else if (from === 'miles' && to === 'ft'){
        return (length * 5280) + ' ft';
    } else if (from === 'km' && to === 'ft'){
        return (length * 3281) + ' ft';
    } else {
        return `Invalid unit: from - ${from} and to - ${to}`;
    }
}

console.log(convertLength(50, 'miles', 'km'));
console.log(convertLength(32, 'km', 'miles'));
console.log(convertLength(50, 'km', 'km'));

console.log(convertLength(5, 'miles', 'km'));
console.log(convertLength(5, 'miles', 'ft'));
console.log(convertLength(5, 'km', 'ft'));
console.log(convertLength(5, 'lbs', 'lbs'));