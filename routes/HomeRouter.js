'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`Welcome to Contact's Home`);
});

module.exports = router;