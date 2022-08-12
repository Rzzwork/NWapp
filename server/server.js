
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


//require websocket

const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 5000 });

wss.on('connection', function connection(ws) {

    ws.on('message', function message(data) {
        console.log('received: %s', data);
    });

    // const json = ['1.2.3.4', '2.2.2.2']

    // setInterval(() => {
    //     ws.send(JSON.stringify(json));
    // }, 10000)


    //ping IP


    hosts.forEach(function (item) {
        ping.sys.probe(item, function (isAlive) {
            
            if (isAlive) {
                newHost.push(item)
            }
        });
    });

    const newHosts = [... new Set(newHost)]
    ws.send(JSON.stringify(newHosts));


});


//create range IPs

var ping = require('ping');

var hosts = [];
var newHost = []
let item = ''

for (i = 5; i <= 10; i++) {
    item = '10.39.175.' + i
    hosts.push(item)
}


//app listen port 8080
app.listen(8080, () => {
    console.log("server is running on 8080")
})


