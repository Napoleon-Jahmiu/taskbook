// Routine Constructor
function Routine(task, time, rate) {
    this.task = task;
    this.time = time;
    this.rate = rate;
}

// UI Constructor
function UI(){}

// Add Routine to list prototype
UI.prototype.addRoutineToList = function(outine) {
    const list = document.getElementById('routine-list');

    // Create a Table row (tr) Element
    const row = document.createElement('tr');

    // Insert Cols
    row.innerHTML = `
        <td>${this.task}</td>
        <td>${time}</td>
        <td>${rate}</td>
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
    // e.preventDefault();
});