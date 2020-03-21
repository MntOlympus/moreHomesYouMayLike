import React from 'react';
import Stars from './Stars.jsx';
import styles from '../stylesheets/RecHome.module.css';

const RecHome = ({ home, image, imageForward, imageBackward }) => {

  return (
    <div className={styles.home}>

      <section>
        <div>
                <button
                  onClick={imageBackward}
                  disabled={image === 0}
                >Back</button>

        <img src={home.images[image]} className={styles.img}></img>

               <button
                  onClick={imageForward}
                  disabled={image === home.images.length - 1}
                >Forward</button>

        </div>

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