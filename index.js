require('dotenv').config()
const express = require('express')
const app = express()

//view engine
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
//importing router for restaurants / index page
app.use('/places', require('./controllers/places'))

//main page
app.get('/', (req, res) => {
    res.render('home')
})

//404 PAGE
app.get('*', (req, res) => {
    res.render('error404')
})

app.listen(process.env.PORT)
