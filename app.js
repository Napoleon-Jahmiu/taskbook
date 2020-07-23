// Routine Constructor
function Routine(tasks, time, rate) {
    this.tasks = tasks;
    this.time = time;
    this.rate = rate;
}

// UI Constructor
function UI() {}

// Add Routine to list prototype
UI.prototype.addRoutineToList = function(routine) {

    const list = document.getElementById('routine-list');

    // Create a Table row (tr) Element
    const row = document.createElement('tr');

    // Insert Cols
    row.innerHTML = `
        <td>${this.tasks}</td>
        <td>${this.time}</td>
        <td>${this.rate}</td>
        <td><a href="#" class="delete-items">X</a></td>
    `;

    list.appendChild(row);
}

// Clear Fields
UI.prototype.clearFields = function() {
    document.getElementById('tasks').value = '';
    document.getElementById('time').value = '';
    document.getElementById('rate').value = '';
}

// Add Event Listener

document.getElementById('tasks-form').addEventListener('submit', function(e){

    // Get Tasks Form Values

    const tasks = document.getElementById('tasks').value,
            time = document.getElementById('time').value,
            rate = document.getElementById('rate').value;

    // instantiate the routine constructor
    const routine = new Routine(tasks, time, rate);

    const ui = new UI

    ui.addRoutineToList(routine);

    // Clear Fields

    ui.clearFields();
    e.preventDefault();
});