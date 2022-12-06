require('dotenv').config()

const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.EXPRESS_PORT || 8080
const indexRoutes = require('./app/routes/index.routes')
app.use(cors())
app.use(express.json());
app.use('/', indexRoutes)
app.listen(port, ()=> {
    console.log(`Application is listening on port: ${port}`)
})

