const { response } = require("express");
const express = require("express");
const path = require("path");
const axios = require("axios");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.get("/api/books", function (req, res) {
  //database querry to get all saved books as json
  res.json([])
});

app.post("/api/books", function (req, res) {
  // database querry to create a new book where saved = true
  res.json([])
  
});

app.delete("/api/books/:id", function (req, res) {
  // database querry to delete a book where id = req.params.id
  res.json([])
});

app.get("/api/google", function (req, res) {
  // use axios to make a querry to google api endpoint for a specific book
  axios.get("https://www.googleapis.com/books/v1/volumes?q="+req.query.book).then(function(data){
    res.json(data.data.items)
  })
  console.log("req.query",req.query);
  //res.json([])
});
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
