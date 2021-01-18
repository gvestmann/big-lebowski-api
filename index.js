const express = require('express');
const app = express();
const importData = require("./data.json")
let port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    response.set('Access-Control-Allow-Origin', '*');
    res.send(importData)
});


app.listen(port, () => {
    console.log(`Example App is listening on http:localhost:${port}`);
});