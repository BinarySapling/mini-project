const productsDiv = document.getElementById('products');

fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
        productsDiv.innerHTML = '';
        data.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product';
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>${product.description.substring(0, 100)}...</p>
                <p class="price">$${product.price}</p>
            `;
            productsDiv.appendChild(productCard);
        });
    })
    .catch(error => {
        productsDiv.innerHTML = '<p class="loading">Error loading products</p>';
        console.error('Error:', error);
    });
