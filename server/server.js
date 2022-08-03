
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const { urlencoded } = require('express');

app.use(bodyParser, urlencoded({ extended: true }))





app.listen(3000, () => {
    console.log("server is running on 3000")
})


