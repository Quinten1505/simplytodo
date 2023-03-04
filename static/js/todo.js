import TodoItem from './TodoItem.js';

const inputField = document.querySelector('.add-item__input');

// Add event listener to input field for the enter key press
inputField.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        // Create a new todo item
        const todoItem = new TodoItem({
            textValue: inputField.value
        });
        todoItem.createItem();
        // Clear the input field
        inputField.value = '';
    }
});