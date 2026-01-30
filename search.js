const productsDiv = document.getElementById('products');
const params = new URLSearchParams(window.location.search);
const searchTerm = params.get('q');

fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
        const filtered = data.filter(product => 
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        displayProducts(filtered);
    })
    .catch(error => {
        productsDiv.innerHTML = '<p class="loading">Error loading products</p>';
        console.error('Error:', error);
    });

function displayProducts(products) {
    productsDiv.innerHTML = '';
    if (products.length === 0) {
        productsDiv.innerHTML = '<p class="loading">No products found</p>';
        return;
    }
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p class="price">$${product.price}</p>
        `;
        productsDiv.appendChild(productCard);
    });
}
