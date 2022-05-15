const router = require('express').Router()

//using the /get /PLACES
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/restaurant_1.jpg' //https://unsplash.com/photos/0uAVsDcyD0M
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/restaurant_2.jpg' //https://unsplash.com/photos/yhn4okt6ci0
      }]
      
    res.render('places/index', {places})
})

//adding restaurants
router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places')
})
  
router.get('/new', (req, res) => {
    res.render('places/new')
})

module.exports = router
