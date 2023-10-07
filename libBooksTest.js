describe('Library Functions', () => {
    describe('addBook()', () => {
      it('Successfully added a book', () => {
        const newBook = addBook("Road Book", "Bill Zates", 7890);
        assert.deepEqual(newBook, { title: "Road Book", author: "Bill Zates", libraryID: 7890 });
        assert.strictEqual(libraryBooks.length, 5);
        assert.deepEqual(libraryBooks, [
            { title: "The Road Ahead", author: "Bill Gates", libraryID: 1235 },
            { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4268 },
            { title: "The Road Ahead", author: "Bill Gates", libraryID: 4268 },
            { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3257 },
            { title: "Road Book", author: "Bill Zates", libraryID: 7890 },
          ]);
      });
    });
  
    describe('getTitles()', () => {
      it('Got books titles in an ordered manner', () => {
        const titles = getTitles();
        assert.deepEqual(titles, ["Mockingjay: The Final Book of The Hunger Games", "Road Book",  "The Road Ahead", "The Road Ahead", "Walter Isaacson"]);
      });
    });
  
    describe('findBooks()', () => {
      it('Found books by keyword then return them ordered alphabetically by author name', () => {
        const matchingBooks = findBooks("Road");
        assert.deepEqual(matchingBooks, [
          { title: "The Road Ahead", author: "Bill Gates", libraryID: 1235 },
          { title: "The Road Ahead", author: "Bill Gates", libraryID: 4268 },
          { title: "Road Book", author: "Bill Zates", libraryID: 7890 },
        ]);
      });
    });
  });