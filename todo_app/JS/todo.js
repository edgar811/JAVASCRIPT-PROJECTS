// This function retrieves stored to-dos from localStorage
function get_todos() {
    var todos = [];
    var todos_str = localStorage.getItem('todos'); // Ensure correct key usage
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

// This function adds a new task to the list
function add() {
    var task = document.getElementById('task').value.trim();
    if (task === "") return; // Prevent adding empty tasks

    var todos = get_todos();
    todos.push(task);
    localStorage.setItem('todos', JSON.stringify(todos));

    document.getElementById('task').value = ""; // Clear input field
    show();
}

// This function removes a specific to-do item when clicking "X"
function remove(index) {
    var todos = get_todos();
    todos.splice(index, 1); // Remove the selected task
    localStorage.setItem('todos', JSON.stringify(todos));
    show(); // Refresh the list
}

// This function displays tasks on the screen
function show() {
    var todos = get_todos();
    var html = '<ul>';

    for (var i = 0; i < todos.length; i++) {
        html += `<li>${todos[i]} 
                    <button class="remove" onclick="remove(${i})">X</button>
                 </li>`;
    }

    html += '</ul>';
    document.getElementById('todos').innerHTML = html;
}

// This will trigger the add function when the "Add Item" button is clicked
document.getElementById('add').addEventListener('click', add);

// Display existing tasks on page load
show();
