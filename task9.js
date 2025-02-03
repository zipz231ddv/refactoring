const cart = {};

const buttons = document.querySelectorAll('.order');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const product = button.getAttribute('data-product');
        if (cart[product]) {
            cart[product]++;
        } else {
            cart[product] = 1;
        }

        updateCart();
    });
});

function updateCart() {
    const cartTable = document.getElementById('cart');

    cartTable.innerHTML = `<tr><th>Товар</th><th>Кількість</th></tr>`;

    for (let product in cart) {
        const row = document.createElement('tr');
        const productCell = document.createElement('td');
        const quantityCell = document.createElement('td');

        productCell.textContent = product;
        quantityCell.textContent = cart[product];

        row.appendChild(productCell);
        row.appendChild(quantityCell);
        cartTable.appendChild(row);
    }
}