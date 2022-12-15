const express = require('express');
const router = express.Router();
const typesController = require("../controllers/types.controllers");
const verifyToken = require('../middlewares/validate-tokens');
router.get('/', typesController.findAll)
router.post('/insert', verifyToken, typesController.insert)

module.exports = router;