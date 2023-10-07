let libraryBooks = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1235 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4268 },
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 4268 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3257 }
];

// Function to add a book to the library
function addBook(title, author, libraryID) {
    const newBook = { title, author, libraryID };
    libraryBooks.push(newBook);
    return newBook;
  }
  
  // Function to get all book titles in alphabetical order
  function getTitles() {
    const titles = libraryBooks.map(book => book.title);
    return titles.sort();
  }
  
  // Function to find books by a keyword in the title and return them alphabetically by author
  function findBooks(keyword) {
    const matchingBooks = libraryBooks.filter(book => book.title.includes(keyword));
    return matchingBooks.sort((a, b) => a.author.localeCompare(b.author));
  }