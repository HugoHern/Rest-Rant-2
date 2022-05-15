require('dotenv').config()
const express = require('express')
const app = express()

//importing router for restaurants / index page
app.use('/places', require('./controllers/places'))

//main page
app.get('/', (req, res) => {
    res.send('Hello world!')
})

//404 PAGE
app.get('*', (req, res) => {
    res.status(404).send('<h1>404</h1>')
})

app.listen(process.env.PORT)
