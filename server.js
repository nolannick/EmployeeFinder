const express = require("express");

const app = express();

const PORT = 8080;

app.get("/about", function(req, res) {
    res.json({ message: "About information..."});
});

app.listen(PORT, function() {
    console.log("Listening on Port: " + PORT);
});