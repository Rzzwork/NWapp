
const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//connect to mongodb and look for ip_data_react table, if does not exist, it will create one
mongoose.connect("mongodb://localhost:27017/ip_data_react", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });


//require route 

app.use('/', require('./routes/ipRoute'))

app.listen(8080, () => {
    console.log("server is running on 8080")
})


