const express = require('express');
const router = express.Router();
const movesController = require("../controllers/moves.controllers");
router.get('/', movesController.findAll)
module.exports = router;