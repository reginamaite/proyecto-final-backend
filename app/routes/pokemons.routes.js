const express = require('express');
const router = express.Router();
const pokemonController = require("../controllers/pokemon.controllers");
router.get('/', pokemonController.findAll)

router.get('/:id', pokemonController.findById)


module.exports = router;
