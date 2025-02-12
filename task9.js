const cart = {};

const buttons = document.querySelectorAll('.order');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const product = button.getAttribute('data-product');
        updateCartData(product);
    });
});

function updateCartData(product) {
    cart[product] = cart[product] ? cart[product] + 1 : 1;
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartTable = document.getElementById('cart');
    const rows = generateCartRows();
    
    cartTable.innerHTML = `<tr><th>Товар</th><th>Кількість</th></tr>${rows}`;
}

function generateCartRows() {
    return Object.entries(cart).map(([product, quantity]) => {
        return `<tr><td>${product}</td><td>${quantity}</td></tr>`;
    }).join('');
}
