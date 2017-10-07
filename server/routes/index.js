const express = require('express');
const login = require('./login.api');
const router = express.Router();

router.use('/login', login);

router.get('/', (req, res) => {
    res.send('api works');
});

module.exports = router;

