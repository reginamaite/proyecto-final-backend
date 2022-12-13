const express = require('express');
const router = express.Router();
const pokemonController = require("../controllers/pokemon.controllers");


router.get('/', pokemonController.findAll)

router.get('/:id', pokemonController.findById)

router.post('/create', pokemonController.create)



module.exports = router;
