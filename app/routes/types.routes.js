const express = require('express');
const router = express.Router();
const typesController = require("../controllers/types.controllers");
router.get('/', typesController.findAll)
module.exports = router;