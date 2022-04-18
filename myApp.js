let express = require('express');
let app = express();

app.listen(3000);

console.log("Hello World");

// app.get('/hello', (req, res) => {
//     res.send("Hello Express");
// });

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.use("/public", express.static(__dirname + "/public"));

































 module.exports = app;
