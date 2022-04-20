let express = require('express');
let app = express();

require('dotenv').config();

app.listen(3000);

console.log("Hello World");

// app.get('/hello', (req, res) => {
//     res.send("Hello Express");
// });

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (reg, res) => {
    if (process.env.MESSAGE_STYLE === "uppercase"){
        res.json({ "message": "Hello json".toUpperCase() });
    }else{
        res.json({ "message": "Hello json" });
    }
    
});
































 module.exports = app;
