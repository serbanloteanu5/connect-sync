/*
   Filename: complexCode.js

   Description: This code is a complex implementation of a library management system. 
                It provides various functionalities like adding books, searching, and lending books.
*/

class Book {
  constructor(id, title, author, publicationDate) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.publicationDate = publicationDate;
    this.isAvailable = true;
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
    this.lentBooks = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  findBookById(id) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].id === id) {
        return this.books[i];
      }
    }
    return null;
  }

  searchBooksByTitle(title) {
    const results = [];
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].title.toLowerCase().includes(title.toLowerCase())) {
        results.push(this.books[i]);
      }
    }
    return results;
  }

  lendBook(id, borrowerName) {
    const book = this.findBookById(id);
    if (book && book.isAvailable) {
      book.isAvailable = false;
      this.lentBooks.push({ book: book, borrower: borrowerName });
      return true;
    }
    return false;
  }

  returnBook(id) {
    const index = this.lentBooks.findIndex(
      (lentBook) => lentBook.book.id === id
    );
    if (index >= 0) {
      const { book, borrower } = this.lentBooks[index];
      book.isAvailable = true;
      this.lentBooks.splice(index, 1);
      return { book: book, borrower: borrower };
    }
    return null;
  }

  listAvailableBooks() {
    return this.books.filter((book) => book.isAvailable);
  }

  listLentBooks() {
    return this.lentBooks.map((lentBook) => lentBook.book);
  }
}

// Create a library instance
const library = new Library("My Library");

// Add books to the library
library.addBook(new Book(1, "The Great Gatsby", "F. Scott Fitzgerald", "1925"));
library.addBook(new Book(2, "To Kill a Mockingbird", "Harper Lee", "1960"));
library.addBook(
  new Book(3, "Pride and Prejudice", "Jane Austen", "1813")
);
// ... add more books

// Search for books by title
const searchResults = library.searchBooksByTitle("pride");
console.log("Search Results:");
console.log(searchResults);

// Lend a book
const lentSuccess = library.lendBook(1, "John Doe");
if (lentSuccess) {
  console.log("Book lent successfully.");
}

// Return a book
const returnedBook = library.returnBook(1);
if (returnedBook) {
  console.log("Book returned successfully.");
  console.log(returnedBook);
}

// List all available books
console.log("Available Books:");
console.log(library.listAvailableBooks());

// List all lent books
console.log("Lent Books:");
console.log(library.listLentBooks());

// ... more operations on the library

// Output remaining books in the library for testing
console.log("Remaining Books in Library:");
console.log(library.books);
