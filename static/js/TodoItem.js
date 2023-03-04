/**
 * @typedef {Object} TodoItemOptions
 * @property {string} textValue - The text value of the todo item
 */

class TodoItem {
    constructor(options) {
        this.options = options
        this.elements = {
            main: document.createElement("div"),
            iconContainer: document.createElement("div"),
            icon: document.createElement("div"),
            text: document.createElement("div"),
        }

        this.elements.main.classList.add("todo-item")

        this.elements.iconContainer.classList.add("todo-item__icon-container")
        this.elements.main.appendChild(this.elements.iconContainer)
        this.elements.icon.classList.add("todo-item__icon-container__icon")
        this.elements.iconContainer.appendChild(this.elements.icon)

        this.elements.text.classList.add("todo-item__text")
        this.elements.text.innerText = this.options.textValue
        this.elements.main.appendChild(this.elements.text)
    }

    createItem() {
        const todoList = document.querySelector(".todo-list")
        todoList.insertBefore(this.elements.main, todoList.childNodes[0])
    }
}

export default TodoItem