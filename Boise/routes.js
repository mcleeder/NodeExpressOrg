const router = require('express').Router();

router.get('/', (req, res) => {
    res.send("Boise!");
});

router.get('/about', (req, res) => {
    res.send("All about Boise!");
});

module.exports = router;