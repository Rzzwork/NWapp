
const express = require('express');
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const { urlencoded } = require('express');



app.use(bodyParser, urlencoded({ extended: true }))

//connect to mongodb and look for ip_data_react table, if does not exist, it will create one
mongoose.connect("mongodb://localhost:27017/ip_data_react", { useNewUrlParser: true })

const ipSchema = new mongoose.Schema({
    address: String
})

const ipaddress = mongoose.model('ipaddress', ipSchema)

const ips = new ipaddress({
    address: 'test'
})

//ips.save();

app.listen(3000, () => {
    console.log("server is running on 3000")
})


