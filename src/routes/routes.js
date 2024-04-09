const express = require("express");
const router = express.Router();
const bookController = require("../controller/controller");
const middleware = require("../middleware/middleware");
const Book = require("../model/model");

router.get("/books", middleware.logReadRequest, bookController.getAllBooks);
router.post("/books", middleware.logCreateRequest, bookController.createBook);
router.put(
    "/books/:id",
    middleware.logUpdateRequest,
    bookController.updateBook
);
router.delete(
    "/books/:id",
    middleware.logDeleteRequest,
    bookController.deleteBook
);

module.exports = router;
