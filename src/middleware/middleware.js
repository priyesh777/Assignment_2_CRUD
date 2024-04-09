//middleware functions

const logReadRequest = (_req, _res, next) => {
    console.log("Middleware: fetch all books.");
    next();
};

const logCreateRequest = (req, res, next) => {
    const { booksName, isbn, author, genre, rating } = req.body;
    console.log(
        `
      Adding new book with BooksName: ${booksName},
      ISBN:${isbn},
      Author: ${author},
      Genre:${genre},
      Rating: ${rating}`);
    next();
};

const logUpdateRequest = (req, res, next) => {
    const { booksName, isbn, author, genre, rating } = req.body;
    console.log(`Update book with
      BooksName: ${booksName},
      ISBN:${isbn},
      Author: ${author},
      Genre:${genre},
      Rating: ${rating}`);
    next();
};

const logDeleteRequest = (req, res, next) => {
    console.log(`Delete book with ID: ${req.params.id}`);
    next();
};

module.exports = {
    logCreateRequest,
    logReadRequest,
    logUpdateRequest,
    logDeleteRequest,
};
