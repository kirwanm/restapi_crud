'use strict';

const express = require('express');
const router = express.Router();
const ContactController = require('../controllers/ContactController');

router.get('/', ContactController.readAll);
router.get('/:id', ContactController.readById);
router.post('/', ContactController.create);
router.put('/:id', ContactController.update);
router.delete('/:id', ContactController.destroy);

module.exports = router;