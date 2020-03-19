import React from 'react';

const RecHome = ({ home }) => {

  return (
    <div className="home">

      <section>
        <img className="contain" src={home.images[0]}></img>

        <span>
        <p className="reviewers">{home.review.stars} ({home.review.reviewers})</p>
        <p>{home.space.occupancy} {home.space.type} ☕️ {home.space.bedCount} beds</p>
        </span>

        <p>{home.description}</p>
        <p>${home.rate.price} / {home.rate.timeframe}</p>

      </section>

    </div>
  )

};

export default RecHome;