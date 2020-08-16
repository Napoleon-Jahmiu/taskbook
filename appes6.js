class Book  {
    constructor(book, author, isbn){
        this.book = book;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    addBookToList(book) {
    const list = document.getElementById('book-list');

    // create tr element
    const row = document.createElement('tr');

    // insert cols
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete-items">X</a></td>
    `;

    list.appendChild(row);

    }

    showAlert(message, className) {
         // create div
    const div = document.createElement('div');
    // Add className
    div.className = `alert ${className}`;
    // Add Text
    div.appendChild(document.createTextNode(message));
    // get Parent
    const container = document.querySelector('.container');
    // get Form
    const form = document.getElementById('book-form');
    // Insert alert
    container.insertBefore(div, form);

    // TimeOut Function after 3 secs
    setTimeout(function(){
        document.querySelector('.alert').remove();
    },3000);
    }


    deleteBook(target){
        if(target.className === 'delete-items') {
            target.parentElement.parentElement.remove();
        }
    }

    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
}

// Add Event Listeners for add book
const bookForm = document.getElementById('book-form');
bookForm.addEventListener('submit', function(e) {

    // Get Forms values
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value;
     
    // Instantiate book
    const book = new Book (title, author, isbn);

    // Instantiate UI 
    const ui = new UI();

    // Validate
    if(title === '' || author === '' || isbn ==='' ) {
        // Error Alert
        ui.showAlert('please fill in all fields', 'error')
            
        } else {
         // Add book to list
    ui.addBookToList(book)

    ui.showAlert('Book Added!', 'success'); 
   
    //Clear Fields
    ui.clearFields();

    }

    e.preventDefault();
});

// Event Listener for Delete Book
document.getElementById('book-list').addEventListener('click', function(e) {
    // Instantiate UI
    const ui = new UI();

    // Delete BOOK
    ui.deleteBook(e.target);

    // Show Message
    ui.showAlert('Book Removed!', 'success');
    e.preventDefault();
}); 