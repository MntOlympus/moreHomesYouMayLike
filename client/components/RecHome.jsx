import React, {useState} from 'react';
import { CSSTransition, TransitionGroup } from "react-transition-group";
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
            <i className="fas fa-2x fa-chevron-left"></i>
            </button>

            <TransitionGroup component={null}>
              <CSSTransition
                  classNames='carousel'
                  timeout={1500}
                  appear={false}
                  in={false}
                  key={home.images[index]}>
                  <img src={home.images[index]} className={styles.img}/>
              </CSSTransition>
            </TransitionGroup>

            <button className={styles.btnRight}
            onClick={() => setIndex(index + 1)}
              disabled={index === home.images.length - 1}>
              <i className="fas fa-2x fa-chevron-right"></i>
          </button>
        </div>
{/* ______________image carousel__________________________ */}

        <span>
          <p className={styles.reviewers}>
            <Stars starCount={home.review.stars} />
              {home.review.stars}&nbsp;
              ({home.review.reviewers})
          </p>

          <p>{home.space.occupancy} {home.space.type} ⚛ {home.space.bedCount} beds</p>
          <p>{home.description}</p>

          <div className={styles.sideBySideRate}>
            <p style={{fontWeight: 'bold'}}> ${home.rate.price} &nbsp;</p>
          </div>
          <div className={styles.sideBySideRate}>
            <p>/&nbsp; {home.rate.timeframe}</p>
          </div>

        </span>

      </section>

    </div>
  )

};

export default React.memo(RecHome);