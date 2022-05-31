const React = require('react')
const Def = require('../default')

function show(data) {
  console.log("have to display comments" + data);
  let comments = <h3 className="inactive">No Comments Yet!</h3>;
  if (data.place.comments.length){
    comments = data.place.comments.map(c => {
      return (
        <div className='border'>
          <h2 className='rant'>{c.rant ? 'Rant!' : 'Rave!'}</h2>
          <h4></h4>
          <h3></h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      )
    })
  }

  return (
    <Def>
      <main>
        <h1>{data.place.name}</h1>
        <img src={data.place.pic} alt={data.place.name} />
        <h3>RATING</h3>
        <p>Not Rated</p>
        <h3>DESCRIPTION</h3>
        <p>Located in {data.place.city}</p>
        <h3>{data.place.showEstablished()}</h3>
        <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">
          Edit
        </a>
        <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
          <button type="submit" className="btn btn-danger">
            Delete
          </button>
        </form>

        <br />
        <h1>COMMENTS</h1>
        {comments}
      </main>
    </Def>
  );
}

module.exports = show
