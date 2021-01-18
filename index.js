const express = require('express');
const cors = require('cors');
const app = express();
const importData = require("./data.json")
let port = process.env.PORT || 3000;

app.use(cors())

app.get("/", (req, res) => {
    res.send(importData)
});


app.listen(port, () => {
    console.log(`Example App is listening on http:localhost:${port}`);
});