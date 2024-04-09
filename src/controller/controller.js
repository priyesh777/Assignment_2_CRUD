const Book = require("../model/model");

exports.getAllBooks = async (_req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        console.log("Catched an error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.createBook = async (req, res) => {
    try {
        const { booksName, isbn, author, genre, rating } = req.body;
        const newBook = new Book({
            booksName,
            isbn,
            author,
            genre,
            rating,
        });
        const response = await Book.create(newBook);
        res.json(response);
    } catch (error) {
        console.log("Catched an error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.updateBook = async (req, res) => {
    try {
        const { id } = req.params;
        const { booksName, isbn, author, genre, rating } = req.body;
        const updateBook = await Book.findByIdAndUpdate(
            id,
            {
                booksName,
                isbn,
                author,
                genre,
                rating,
            },
            { new: true }
        );
        console.log("Updated book:", updateBook);
        res.json(updateBook);
    } catch (error) {
        console.log("Catched an error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteBook = await Book.findByIdAndDelete(id);
        if (deleteBook) {
            res.json({ message: "Book deleted successfully" });
        }
    } catch (error) {
        console.log("Catched an error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
