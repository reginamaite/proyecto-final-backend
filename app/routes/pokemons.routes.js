const express = require('express');
const router = express.Router();
const pokemonController = require("../controllers/pokemon.controllers");
const verifyToken = require('../middlewares/validate-tokens');

router.get('/', pokemonController.findAll)

router.get('/:id', pokemonController.findById)

//router.post('/create', pokemonController.create)
router.post('/create', verifyToken, pokemonController.create)



module.exports = router;
