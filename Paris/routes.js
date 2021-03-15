const router = require('express').Router();

router.get('/', (req, res) => {
    res.send("Paris!");
});

router.get('/about', (req, res) => {
    res.send("About Paris!");
});

module.exports = router;