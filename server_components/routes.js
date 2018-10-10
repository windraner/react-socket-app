const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader("Access-Control-Allow-Origin",  null);
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

module.exports = router;