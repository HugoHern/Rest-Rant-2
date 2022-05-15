//moduls and globals
require('dotenv').config()
const express = require('express')
const app = express()

//view engine - express settings
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true })) //decrypte the data sent


//controllers and routes
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
