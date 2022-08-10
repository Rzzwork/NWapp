const express = require('express');
const router = express.Router();
const ipaddress = require("../mongooseModel/mongooseModel")


router.route('/create').post((req, res) => {
    const title = req.body.title;
    const address = req.body.address

    const newAddress = new ipaddress({
        title,
        address
    })

    newAddress.save()

})

router.route('/create').get((req, res) => {
    ipaddress.find()
        .then(foundAddress => res.json(foundAddress))
})



module.exports = router;