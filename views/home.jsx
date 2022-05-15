const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
        <main>
          <h1>HOME</h1>
          <div>
              <img src="/images/food_plate.jpg" alt="Plate of Food"/>
              <div>Photo by Lily Banse <a href="https://unsplash.com/photos/-YHSwy6uqvk?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">Unsplash</a></div>
          </div>
          <a href="/places">
            <button className="btn-primary">Places Page</button>
          </a>
        </main>
      </Def>
    );
}

module.exports = home
  
