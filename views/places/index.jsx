//PLACES INDEX
const React = require('react')
const Def = require('../default')

function index (data) {
    //formatting data to html
    let placesFormatted = data.places.map((place) => {
        return (
            <div>
                <h2>{place.name}</h2>
                <img src={place.pic} alt={place.name} />
            </div>
        )
})
    return (
        <Def>
            <main>
                <h1>INDEX - PLACES</h1>
                {placesFormatted}
            </main>
        </Def>
    )
}

module.exports = index