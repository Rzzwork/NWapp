
const mongoose = require('mongoose')


//create schema

const ipSchema = new mongoose.Schema({
    title: String,
    address: String
})

//create model

const ipaddress = mongoose.model('ipaddress', ipSchema)


module.exports = ipaddress;