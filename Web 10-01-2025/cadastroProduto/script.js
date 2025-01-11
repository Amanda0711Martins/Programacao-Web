import { addProduct, getProducts } from './data.js';
document.getElementById('productForm').addEventListener('submit',
function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const category = document.getElementById('category').value;
    addProduct({ name, price, category });
    updateView();
});
function updateView() {
    const products = getProducts();
    const tableBody = document.querySelector('#productTable tbody');
    tableBody.innerHTML = '';
    products.forEach(product => {
        const row = `<tr>
        <td>${product.name}</td>
        <td>${product.price}</td>
        <td>${product.category}</td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}