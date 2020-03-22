import React, {useState} from 'react';
import Stars from './Stars.jsx';
import styles from '../stylesheets/RecHome.module.css';

const RecHome = ({ home }) => {

  const [index, setIndex] = useState(0);

  return (
    <div className={styles.home}>

      <section>
{/* ______________image carousel_________________________*/}
        <div className={styles.container}>
          <button className={styles.btnLeft}
            onClick={() => setIndex(index - 1)}
            disabled={index === 0}>
            <i class="fas fa-4x fa-chevron-left"></i>
            </button>

        <img src={home.images[index]} className={styles.img}></img>

          <button className={styles.btnRight}
            onClick={() => setIndex(index + 1)}
              disabled={index === home.images.length - 1}>
              <i class="fas fa-4x fa-chevron-right"></i>
          </button>
        </div>
{/* ______________image carousel__________________________ */}

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