import React from 'react';
import Stars from './Stars.jsx';
import styles from '../stylesheets/RecHome.module.css';

const RecHome = ({ home }) => {

  return (
    <div className={styles.home}>

      <section>
        <img src={home.images[0]} className={styles.img}></img>

        <span>
        <p className={styles.reviewers}>
          <Stars starCount={home.review.stars} />
            {home.review.stars}
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