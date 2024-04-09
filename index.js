// index.js, Priyesh Gautam, 200568939, 2/16/2024
// index.js, Chandrika Ghale, 200575692, 2/16/2024

const bodyParser = require("body-parser");

const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs");

const bookRoutes = require("./src/routes/routes.js");
const initializeMongoServer = require("./db.js");
const Book = require("./src/model/model.js");

const main = async () => {
    const app = express();
    app.use(bodyParser.json());
    const port = process.env.PORT || 3000;
    const mongoURI = process.env.MONGODB_URL;

    //Initialize MongoDB connection
    initializeMongoServer();
    //Seed the data if the collection is empty
    mongoose.connect(mongoURI).then(() => {
        seedData();
    });

    app.use("/", bookRoutes);

    app.listen(port, () => {
        console.log(`Assignment 2 - CRUD application on the port: ${port}!`);
    });
};

main();

const seedData = async () => {
    try {
        const data = JSON.parse(fs.readFileSync("./books.json", "utf-8"));
        //check if the books collection is empty
        const count = await Book.countDocuments();
        if (count === 0) {
            await Book.create(data);
            console.log("The book data succesfully imported to MongoDB");
        } else {
            console.log("Data already exists!");
        }
    } catch (error) {
        console.log("This is the catched error::>>", error);
        throw error;
    }
};
