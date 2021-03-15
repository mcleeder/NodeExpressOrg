const express = require('express');
const router = require('express').Router();
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'static')));

router.get('/', (req, res) => {
    res.send("Paris!");
});

router.get('/about', (req, res) => {
    res.send("About Paris!");
});

router.get('/puck', (req, res) => {
    res.sendFile(path.join(__dirname, '/static/images/puck.jpg'));
});


module.exports = router;