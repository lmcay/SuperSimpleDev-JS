let qty = 0;

function updateCartQuantity(number, operation){
    if(operation === '+'){
        (qty+number) > 10 ? console.log(`The cart max capacity is 10. Cart quantity: ${qty}`) : qty+=number;
    } else if (operation === '-'){
        (qty-number) <= 0 ? console.log(`The cart minimum capacity is 0. Cart quantity: ${qty}`) : qty-=number;  
    }

    showCart();
}

function showCart(){
    document.querySelector('.cart').innerHTML = `Cart Quantity: ${qty}`;
}