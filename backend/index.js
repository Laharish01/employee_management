let express = require('express');
let app = express();
let path = require('path');
let employeeRoute = require('./routes/employee');
let bodyParser = require('body-parser');
let cors = require('cors');

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});


app.use(bodyParser.json());

app.use((req, res, next) => {
    console.log(`${new Date().toString()} => ${req.originalUrl}`, req.body);
    next();

})
app.use(employeeRoute);
app.use(express.static('public'));


app.use((req, res, next) => {
    res.status(404).send('You are lost in the web!');
})

//Handler for server error
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.sendFile(path.join(__dirname, '../public/500.html'))
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is listening in port ${PORT}`);
})

