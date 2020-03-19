import React from 'react';

const RecHome = ({ home }) => {

  return (
    <div className="home">
        <img src="http://icon-library.com/images/home-vector-icon/home-vector-icon-9.jpg"></img>

      <section>

        <span>
        <p className="reviewers">{home.review.stars} ({home.review.reviewers})</p>
        <p>{home.space.occupancy} {home.space.type} ☕️ {home.space.bedCount} beds</p>
        </span>

        <p>{home.title}</p>
        <p>${home.rate.price} / {home.rate.timeframe}</p>

      </section>

    </div>
  )

};

export default RecHome;