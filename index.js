require('dotenv').config()

const express = require('express')
const cors = require('cors')

const app = express()
const port = process.env.EXPRESS_PORT || 8000

const indexRoutes =     require('./app/routes/index.routes')
const pokemonRoutes =   require('./app/routes/pokemons.routes')
const userRoutes =      require("./app/routes/users.routes")
const typesRoutes =     require("./app/routes/types.routes")
const movesRoutes =     require("./app/routes/moves.routes")
const pokeRoutes =      require("./app/routes/pokedex.routes")

app.use(cors())
app.use(express.json());

app.use('/',            indexRoutes)
app.use('/pokemons',    pokemonRoutes)
app.use('/types',       typesRoutes)
app.use('/moves',       movesRoutes)
app.use("/users",       userRoutes)
app.use("/pokedex",     pokeRoutes)

app.listen(port, ()=> {
    console.log(`Application is listening on port: ${port}`)
})

