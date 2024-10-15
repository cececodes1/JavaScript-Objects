// Task 1: Create a constructor function for the Book object with properties for title, author, and pages.
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

let book1 = new Book("Hatchet", "Gary Paulsen", 189);
console.log(book1);

// Task 2: Implement a method within the Book object to display book information.
Book.prototype.displayInfo = function() { // 
    console.log('Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}');
};
book1.displayInfo();

// Task 3: Create an array to store book objects and implement functions to add new books and search for books by title or author.
let library = [];

function addBook(title, author, pages) {
    let newBook = new Book(title, author, pages); // creates a new Book object 
    library.push(newBook);
}
// implements a function to search for books by title or author
function searchBooks(query) { // searchBooks dunction that takes one argument: query
    let results = library.filter(book => { // uses the filter method to create a new array of books that match the search
        return book.title.toLowerCase().includes(query.toLowerCase()) || book.author.toLowerCase().includes(query.toLowerCase()); // checks id the books title or author matches the search query
    });
    return results;
}
// adds a new book to the library
addBook("The Giver", "Lois Lowry", 179);
addBook("The Hunger Games", "Suzanne Collins", 374);
addBook("The Great Gatsby", "F. Scott Fitzgerald", 218);

let results = searchBooks("gatsby");
console.log(results);

// Task 4: Create functions that utilize the filter method to filter out books that contain more than 100 pages and the map method to add "Title: " and "Author: " to the book's title and author properties respectably.
function filterLongBooks() {
    let shortBooks = library.filter(book => book.pages <= 100); // filter method to create an array of books with 100 pages or less
    return shortBooks;
}
// A function to add Title: and Author: to the book's properties
function formatBookInfo() {
    let formattedBooks = library.map(book => {
        return {
            title: `Title: ${book.title}`,
            author: `Author: ${book.author}`,
            pages: book.pages
        };
    });
    return formattedBooks;
}

let shortBooks = filterLongBooks();
console.log(shortBooks);

let formattedBooks = formatBookInfo();
console.log(formattedBooks);