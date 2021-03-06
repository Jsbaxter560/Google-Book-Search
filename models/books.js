const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: String,
    author: String,
    description: String,
    image: URL,
    link: URL
});

const books = mongoose.model("books", bookSchema);

module.exports = books;
