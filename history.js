const historyList = document.getElementById('historyList');

const history = JSON.parse(localStorage.getItem("searchHistory")) || [];

if(history.length > 0){
    history.forEach(item => {
        const div = document.createElement('div');
        div.className = 'history-item';
        div.innerHTML = `
            <p>${item.query}</p>
            <span>${new Date(item.time).toLocaleString()}</span>
        `;
        historyList.appendChild(div);
    });
} else {
    historyList.innerHTML = '<p class="loading">No search history found</p>';
}
