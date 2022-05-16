const router = require('express').Router()
const places = require('../models/places.js')

//using the /get /PLACES
router.get('/', (req, res) => {
    res.render('places/index', {places})
})


  

//adding restaurants
router.post("/", (req, res) => {
  
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = "http://placekitten.com/400/400";
  }
  if (!req.body.city) {
    req.body.city = "Anytown";
  }
  if (!req.body.state) {
    req.body.state = "USA";
  }
  places.push(req.body)
  res.redirect('/places')
});

//go to add a new place page
router.get('/new', (req, res) => {
    res.render('places/new')
})

//show each restaurant
router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
      res.render('error404')
    }
    else if (!places[id]){
        res.render('error404')
    }
    else {
      res.render('places/show', {place:places[id]})
    }
})
  

module.exports = router
