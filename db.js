const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const mongoURI = process.env.MONGODB_URL;


const InitiateMongoServer = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to the Database::");
    }
    catch (e) {
        console.log("Error traced::>>", e);
        throw e;
    }
};
module.exports = InitiateMongoServer;
