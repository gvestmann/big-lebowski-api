// Here's a variable for importing Express to the app
const express = require('express');

// This one imports the cors-module
const cors = require('cors');

// The app then uses Express
const app = express();

// This variable references the API's data
const importData = require("./data.json")

// For Heroku to work, you need to tell it to listen to it's default enviroment's port || or ... 3000 for local development
let port = process.env.PORT || 3000;

// I spent almost two days on trying to fix this cors shit. I eventually gave up and contacted Smári. We fixed it in 10 minutes or so. Lesson learnt. Stupid, stupid Gummi
app.use(cors())

// This is the router, it imports the data to my API's main route
app.get("/", (req, res) => {
    res.send(importData)
});

// This is just for simplicities sake in the local development enviroment to show me which port is being used and providing a link to it
app.listen(port, () => {
    console.log(`DEV app is listening on http:localhost:${port}`);
});