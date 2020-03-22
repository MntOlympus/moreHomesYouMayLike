import React from 'react';
import RecHome from './RecHome.jsx';
import styles from '../stylesheets/RecHomeList.module.css';

const RecHomeList = ({ homesSet, shift, nexthome, prevhome }) => {

   const homes = homesSet.map(home => <RecHome key={home._id} home={home} />)

    return (
        <div>

      {/* _______________________________________________*/}
            <div className={styles.btnContainer}>
                <button className={styles.btnLeft}
                    onClick={prevhome}
                    disabled={shift === 0}>
                    <i className="fas fa-3x fa-chevron-left"></i>
                </button>

            <div className={styles.container}>
                    <h4>More Homes You May Like</h4>


                <div className={styles.listWrapper} style={{
                        'transform': `translateX(-${shift*(272)}px)`}}>{homes}</div>
    {/* __________________________________________________*/}

            </div>


                    <button className={styles.btnRight}
                        onClick={nexthome}
                        disabled={shift === homesSet.length-3}>
                        <i className="fas fa-3x fa-chevron-right"></i>
                    </button>

            </div>

        </div>
    )
};

export default RecHomeList;