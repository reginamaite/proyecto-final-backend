const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World!')
})

router.get('/pokemons', (req, res) => {
    res.send(pokemons)
})


router.get('/pokemons/:id', (req, res) => {
    const pokeid = req.params.id
    res.send(pokemons.find(poke => poke.id == pokeid))
})



const pokemons = [
{
    "id": 1,
    "nombre": "pikachu",
    "tipo": ["electrico"],
    "move": ["mega uno", "mega dos"]
},
{
    "id": 2,
    "nombre": "raichu",
    "tipo": ["dragon"],
    "move": ["mega uno", "mega dos"]
},
{
    "id": 3,
    "nombre": "sadfjasdf",
    "tipo": ["dragon"],
    "move": ["mega uno", "mega dos"]
}
]

module.exports = router;
