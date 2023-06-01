const express = require('express');
const router = express.Router();
const testController = require('../controllers/testController.js')

router.get('/', testController)

module.exports = router;