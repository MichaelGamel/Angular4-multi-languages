const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    if (req.body.username && req.body.password) {
        if (req.body.username === 'michael' && req.body.password === '123') {
            res.status(200).send('success');
        } else {
            res.status(401).send('wrong-credentials');
        }
    } else {
        res.status(401).send('wrong-credentials');
    }
});

module.exports = router;