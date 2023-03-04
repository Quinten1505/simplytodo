const inputField = document.querySelector('.add-item__input');
const todoList = document.querySelector('.todo-list');

// Add event listener to input field for the enter key press
inputField.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        // Create a new li element
        const li = document.createElement('li');
        // Add the class name to the li element
        li.className = 'todo-list__item';
        // Add the text from the input field to the li element
        li.appendChild(document.createTextNode(inputField.value));
        // Append the li element to the ul element
        todoList.appendChild(li);
        // Clear the input field
        inputField.value = '';
    }
});