const express = require('express');
const router = express.Router();
const pokedexController = require("../controllers/pokedex.controllers");
const verifyToken = require('../middlewares/validate-tokens');

router.post('/', verifyToken, pokedexController.create)

module.exports = router;
