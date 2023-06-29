// Declaration and Initialization
let library = [];

// Function to add a book to the library
function addBook(title, author, isbn) {
  library.push({ title, author, isbn });
}

// Function to retrieve book information by index
function getBookByIndex(index) {
  return library[index];
}

// Modifying Array Elements
function updateBookAuthor(index, newAuthor) {
  library[index].author = newAuthor;
}

// Array Length
function getTotalBooks() {
  return library.length;
}

// Iterating over Arrays
function displayAllBooks() {
  library.forEach((book, index) => {
    console.log(`Book ${index + 1}:`);
    console.log(`Title: ${book.title}`);
    console.log(`Author: ${book.author}`);
    console.log(`ISBN: ${book.isbn}`);
    console.log("--------------------");
  });
}

// Multidimensional Arrays
let libraries = [[]]; // Initialize with one library

// Function to add a book to a specific library
function addBookToLibrary(title, author, isbn, libraryIndex) {
  libraries[libraryIndex].push({ title, author, isbn });
}

// Array Methods
function removeBookByIndex(index) {
  library.splice(index, 1);
}

// Array Searching and Sorting
function searchBooksByAuthor(author) {
  return library.filter((book) => book.author === author);
}

function sortBooksByTitle() {
  library.sort((book1, book2) => {
    return book1.title.localeCompare(book2.title);
  });
}

// Array Filtering and Mapping
function filterBooksByGenre(genre) {
  return library.filter((book) => book.genre === genre);
}

function mapBookTitlesToUpperCase() {
  return library.map((book) => {
    return { ...book, title: book.title.toUpperCase() };
  });
}

// Array Destructuring
function getBookInfo(index) {
  const { title, author, isbn } = library[index];
  return { title, author, isbn };
}

// Array Spread Operator
let newBooks = [
  { title: "New Book 1", author: "Author 1", isbn: "ISBN 1234" },
  { title: "New Book 2", author: "Author 2", isbn: "ISBN 5678" }
];
library = [...library, ...newBooks];

// Immutable Arrays
function addBookImmutable(title, author, isbn) {
  const newLibrary = [...library];
  newLibrary.push({ title, author, isbn });
  return newLibrary;
}

// Example Usage:
addBook("Book 1", "Author 1", "ISBN 123");
addBook("Book 2", "Author 2", "ISBN 456");

console.log(getBookByIndex(0)); // Retrieve book at index 0
updateBookAuthor(1, "New Author"); // Update author of book at index 1
console.log(getTotalBooks()); // Get total number of books in the library
displayAllBooks(); // Display all books in the library

addBookToLibrary("Book 3", "Author 3", "ISBN 789", 1); // Add book to library at index 1
removeBookByIndex(0); // Remove book at index 0

console.log(searchBooksByAuthor("Author 1")); // Search books by author
sortBooksByTitle(); // Sort books by title

console.log(filterBooksByGenre("Fantasy")); // Filter books by genre
console.log(mapBookTitlesToUpperCase()); // Map book titles to uppercase

console.log(getBookInfo(0)); // Get book information using destructuring

console.log(library); // Original library array
console.log(addBookImmutable("Book 4", "Author 4", "ISBN 321")); // Immutable array example
