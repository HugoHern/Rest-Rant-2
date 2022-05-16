const React = require('react')
const Def = require('../default')

function show (data) {
    return (
      <Def>
        <main>
          <h1>{data.place.name}</h1>
          <h3>RATING</h3>
          <p>Not Rated</p>
          <h3>DESCRIPTION</h3>
          <p>Located in {data.place.city}</p>
          <a href={`/places/${data.id}/edit`} className="btn btn-warning">
            Edit
          </a>
          <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
            <button type="submit" className="btn btn-danger">
              Delete
            </button>
          </form>

          <br />
          <h1>COMMENTS</h1>
          <p>No Comments</p>
        </main>
      </Def>
    );
}

module.exports = show
