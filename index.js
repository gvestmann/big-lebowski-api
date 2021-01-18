const express = require('express');
const app = express();
const importData = require("./data.json")
let port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hi there!")
});

app.get("/people", (req, res) => {
    res.send(importData)
});

app.listen(port, () => {
    console.log(`Example App is listening on http:localhost:${port}`);
});