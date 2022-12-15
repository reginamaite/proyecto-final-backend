const express = require('express');
const router = express.Router();
const movesController = require("../controllers/moves.controllers");
const verifyToken = require('../middlewares/validate-tokens');
router.get('/', movesController.findAll)
router.post('/insert',verifyToken, movesController.insert)
module.exports = router;