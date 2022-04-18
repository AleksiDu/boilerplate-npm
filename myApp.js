let express = require('express');
let app = express();

app.listen(3000);

console.log("Hello World");

app.get('/hello', (req, res) => {
    res.send("Hello Express");
});


































 module.exports = app;
