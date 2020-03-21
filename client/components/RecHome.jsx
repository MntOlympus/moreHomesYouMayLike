import React from 'react';
import Stars from './Stars.jsx';

const RecHome = ({ home }) => {

  return (
    <div className="home">

      <section>
        <img src={home.images[0]}></img>

        <span>
        <p className="reviewers">
          <Stars starCount={home.review.stars} />
            {home.review.stars}.0
            ({home.review.reviewers})
        </p>
        <p>{home.space.occupancy} {home.space.type} ☕️ {home.space.bedCount} beds</p>
        </span>

        <p>{home.description}</p>
        <p>${home.rate.price} / {home.rate.timeframe}</p>

      </section>

    </div>
  )

};

export default RecHome;