import React from 'react';
import styles from '../stylesheets/Stars.module.css';

const Stars = ({starCount}) => {
  console.log (styles);

  return (
    <span>

    {(function() {

      const x = starCount;

      switch (true) {
        case (x >=1 && x < 2):
          return <span className={styles.hearts}>
            <i className="fas fa-heart fa-xs" style={{color: "pink"}}/>
          </span>


        case (x >=2 && x < 3):
          return <span className={styles.hearts}>
            <i className="fas fa-heart fa-xs" style={{color: "pink"}}/>
            <i className="fas fa-heart fa-xs" style={{color: "pink"}}/>
          </span>


        case (x >=3 && x < 4):
          return <span className={styles.hearts}>
            <i className="fas fa-heart fa-xs" style={{color: "pink"}}/>
            <i className="fas fa-heart fa-xs" style={{color: "pink"}}/>
            <i className="fas fa-heart fa-xs" style={{color: "pink"}}/>
          </span>

        case (x >=4 && x < 5):
          return <span className={styles.hearts}>
            <i className="fas fa-heart fa-xs" style={{color: "pink"}}/>
            <i className="fas fa-heart fa-xs" style={{color: "pink"}}/>
            <i className="fas fa-heart fa-xs" style={{color: "pink"}}/>
            <i className="fas fa-heart fa-xs" style={{color: "pink"}}/>
          </span>

        case (x === 5):
          return <span className={styles.hearts}>
            <i className="fas fa-heart fa-xs" style={{color: "pink"}}/>
            <i className="fas fa-heart fa-xs" style={{color: "pink"}}/>
            <i className="fas fa-heart fa-xs" style={{color: "pink"}}/>
            <i className="fas fa-heart fa-xs" style={{color: "pink"}}/>
            <i className="fas fa-heart fa-xs" style={{color: "pink"}}/>
          </span>

        default:
          return <i className="fas fa-house-damage fa-xs hearts"/>
      }
    })()}
    </span>
  )
}

export default Stars