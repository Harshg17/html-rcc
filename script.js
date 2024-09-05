document.getElementById('add-item-button').addEventListener('click', function() {
    const list = document.getElementById('item-list');
    const newItem = document.createElement('li');
    newItem.textContent = `Item ${list.children.length + 1}`;
    newItem.classList.add('list-item');
    list.appendChild(newItem);
});
