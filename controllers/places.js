const router = require('express').Router()

//using the /get route
router.get('/', (req, res) => {
    res.send('GET /places')
})

module.exports = router
