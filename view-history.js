const viewHistoryProducts = document.getElementById('viewHistoryProducts');

const viewHistory = JSON.parse(localStorage.getItem("viewHistory")) || [];

if(viewHistory.length > 0) {
    viewHistoryProducts.innerHTML = '';
    
    viewHistory.forEach(productId => {
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(response => response.json())
            .then(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product';
                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.title}">
                    <h3>${product.title}</h3>
                    <p class="price">$${product.price}</p>
                `;
                productCard.addEventListener('click', () => {
                    window.location.href = `product-details.html?id=${product.id}`;
                });
                viewHistoryProducts.appendChild(productCard);
            })
            .catch(error => {
                console.error('Error loading product:', error);
            });
    });
} else {
    viewHistoryProducts.innerHTML = '<p class="loading">No view history found</p>';
}

function clearViewHistory() {
    if(confirm('Are you sure you want to clear all view history?')) {
        localStorage.removeItem('viewHistory');
        viewHistoryProducts.innerHTML = '<p class="loading">No view history found</p>';
    }
}
