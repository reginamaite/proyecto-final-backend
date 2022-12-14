require('dotenv').config()

const express = require('express')
const cors = require('cors')
var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir: './upload/image'});
const app = express()
const port = process.env.EXPRESS_PORT || 8000
const indexRoutes = require('./app/routes/index.routes')
const pokemonRoutes = require('./app/routes/pokemons.routes')
const userRoutes = require("./app/routes/users.routes")
const typesRoutes = require("./app/routes/types.routes")
const movesRoutes = require("./app/routes/moves.routes")
const ImageController = require("./app/controllers/Image.controllers")

app.use(cors())
app.use(express.json());
app.use('/', indexRoutes)
app.use('/pokemons', pokemonRoutes)
app.use('/types', typesRoutes)
app.use('/moves', movesRoutes)
app.use("/users", userRoutes)
app.post('/image-saveImage/:id', [md_upload], ImageController.saveImage);
app.listen(port, ()=> {
    console.log(`Application is listening on port: ${port}`)
})

