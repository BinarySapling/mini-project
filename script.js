const productsDiv = document.getElementById('products');
const searchInput = document.getElementById('searchInput');
let allProducts = [];

fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
        allProducts = data;
        displayProducts(allProducts);
    })
    .catch(error => {
        productsDiv.innerHTML = '<p class="loading">Error loading products</p>';
        console.error('Error:', error);
    });

function displayProducts(products) {
    productsDiv.innerHTML = '';
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

searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = allProducts.filter(product => 
        product.title.toLowerCase().includes(searchTerm)
    );
    displayProducts(filtered);
});
