// function populateTodoList(todos) {
//   let list = document.getElementById('todo-list');
//   // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.




// }

// // These are the same todos that currently display in the HTML
// // You will want to remove the ones in the current HTML after you have created them using JavaScript

// populateTodoList(todos);

// // This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
// function addNewTodo(event) {
//   // The code below prevents the page from refreshing when we click the 'Add Todo' button.
//   event.preventDefault();
//   // Write your code here... and remember to reset the input field to be blank after creating a todo!
// }

// // OPTIONAL
// // Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
// function deleteAllCompletedTodos() {
//   // Write your code here...
// }

// خیلی برام سخته. میمونم تا پنشجنبه با کمک منتور حلش کنم :))))))


let todos = [
    { task: 'Wash the dishes', completed: false },
    { task: 'Do the shopping', completed: false },
];


populateTodoList(todos)

function addNewTodo(e) {
    e.preventDefault()

    let todoText = input.value.trim();

    if (todoText.length > 0) {
        todos.push({ task: todoText, completed: false })
        populateTodoList(todos)
    }

    input.value = ''
}



let input = document.getElementById('todoInput');


function populateTodoList(todos) {
    let list = document.getElementById('todo-list');
    list.innerHTML = ''

    todos.forEach((todo, index) => {
        let li = document.createElement('li');
        li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');

        li.innerText = todo.task;

        let badge = document.createElement('span')
        badge.classList.add('badge', 'bg-primary', 'rounded-pill')

        let checkIcon = document.createElement('i');
        checkIcon.classList.add('fa', 'fa-check');
        checkIcon.addEventListener('click', () => {
            if (todo.completed) {
                todo.completed = false
                li.style.textDecoration = 'none'
            } else {
                todo.completed = true
                li.style.textDecoration = 'line-through'
            }
        });
        badge.appendChild(checkIcon);

        let trashIcon = document.createElement('i');
        trashIcon.classList.add('fa', 'fa-trash');
        trashIcon.addEventListener('click', () => {
            todos.splice(index, 1)
            populateTodoList(todos)
        });
        badge.appendChild(trashIcon)

        li.appendChild(badge)
        list.appendChild(li)
    });
}

