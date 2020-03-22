import React from 'react';
import RecHome from './RecHome.jsx';
import styles from '../stylesheets/RecHomeList.module.css';

const RecHomeList = ({ homesSet, shift, nexthome, prevhome }) => {

   const homes = homesSet.map(home => <RecHome key={home._id} home={home} />)

    return (
        <div>
            <h4>More Homes You May Like</h4>


            <div className={styles.container}>
            <button
                    onClick={prevhome}
                    disabled={shift === 0}
                    >Back</button>
                <div className={styles.listWrapper} style={{
                        'transform': `translateX(-${shift*(272)}px)`}}>{homes}</div>

                    <button
                        onClick={nexthome}
                        disabled={shift === homesSet.length-3}
                    >Forward</button>

            </div>


        </div>
    )
};

export default RecHomeList;