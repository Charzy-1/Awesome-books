// Get stored books from localStorage or initialize an empty array
let books = JSON.parse(localStorage.getItem('books')) || [];

// Function to display books
function displayBooks() {
  const booksContainer = document.getElementById('books-container');
  booksContainer.innerHTML = ''; // clears existing books
  for (let i = 0; i < books.length; i += 1) {
    const book = books[i];
    const bookItem = document.createElement('div');
    bookItem.className = 'book-item'; // This gives the card some style to make it look nice and uniform

    // This adds the title and author of the book to the card.
    bookItem.innerHTML = `
            <p>${book.title}</p>
            <p>${book.author}</p>
            <button onclick="removeBook(${i})">Remove</button>
            <hr>
  `;
    booksContainer.appendChild(bookItem);
  }
}

// Function to add a new book
function addBook(title, author) {
  const newBook = { title, author }; // Create an object with title and author properties
  books.push(newBook);
  localStorage.setItem('books', JSON.stringify(books)); // converts your collection of book cards (an array of objects) into a string format and saves them in localstorage.

  displayBooks(); // calls the display book function to update displayed books
}

// Function to remove sbook
function removeBook(index) {
  books = books.filter((_, i) => i !== index);
  // (_, i) =>  index of each book in the collection. index parameter tells us which book to remove.
  localStorage.setItem('books', JSON.stringify(books)); // Save to localStorage
  displayBooks(); // Update displayed books
}

// Handle form submission
document.getElementById('add-book-form').addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form from submitting the traditional way
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  addBook(title, author); // Add the new book
  event.target.reset(); // Reset the form fields
});

// Display books on page load
displayBooks();
