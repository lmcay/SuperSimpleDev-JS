
const product = {
    name: 'basketball',
    price: 2095,
    'delivery-time': '3 days'
}

const product2 = {
    name: 'shirt',
    price: 20,
    'delivery-time': '3 days'
}

console.log(product.name, product.price);
product.price += 500;
console.log(product.price);
console.log(product['delivery-time']);

function comparePrice(product1, product2){
    const lower = product1 < product2 ? product1 : product2;
    return lower;
}

console.log(comparePrice(product.price, product2.price));

function isSameProduct(product1, product2){
    const result = product1.name === product2.name && product1.price === product2.price ? true : false;

    return result;
}

console.log(isSameProduct(product, product2))
console.log('Good Morning'.toLowerCase());
console.log('test'.repeat(2));