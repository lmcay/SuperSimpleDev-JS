
const product = {
    name: 'socks',
    price: 1098,
    rating: {
        stars: 4.5,
        count: 87
    },
    fun: function display(){
        console.log('function inside');
    }
};

console.log(product.rating.stars);
console.log(product.fun()); 

// product.name = 'cotton-socks ';
// console.log(product);
// console.log(product.name);
// console.log(product.price);

// console.log(product.newProperty = 'jonson');
// delete product.newProperty;
// console.log(product.newProperty);

const jsonString = JSON.stringify(product);
console.log(JSON.parse(jsonString));


console.log('string'.length);
console.log('string'.toUpperCase());

const obj = {
    message: 'hello'
}

const obj2 = obj;

obj.message = 'good job';
console.log(obj.message);
console.log(obj2.message);

const obj3 = {
    message: 'good job'
};

console.log(obj === obj3)

const shortcut = {
    message: 'shortcut',
    price: 7.99
}

const { message, price} = shortcut;
console.log(message, price);

const shortcut2 = {
    message,
    method() {
        console.log('method')
    }
}

console.log(shortcut2.message);
shortcut2.method();
