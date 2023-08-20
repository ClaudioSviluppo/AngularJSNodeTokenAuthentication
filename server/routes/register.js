var express = require('express');
var router = express.Router();

router.route('/')

.get(function(req, res) {
    console.log(req.query.username);
    console.log(req.query.password);
    res.json({"username": req.query.username, "password":req.query.password});
})

.post(function(req, res) {
    res.send('Hi from post');
})

module.exports = router;