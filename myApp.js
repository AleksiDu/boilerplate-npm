let express = require('express');
let app = express();
let bodyParser = require('body-parser');

require('dotenv').config();

app.listen(3000);

app.use((req, res, next) => {
    
    console.log(req.method + " " + req.path + " - " + req.ip);


    next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

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


app.get("/now", (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res) => {
    res.json({time: req.time});
}
);



app.get("/:word/echo", (req, res) => {
    res.json({ echo: req.params.word });
});


app.get("/name", (req, res) => {
   res.json({ name: req.query.first + " " + req.query.last }); 
});


app.post("/name", (req, res) => {
    res.json({ name: req.body.first + " " + req.body.last })
})
























 module.exports = app;
