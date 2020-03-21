import React from 'react';
import RecHome from './RecHome.jsx';

const RecHomeList = ({ homesSet, shift, nexthome, prevhome }) => {

   const homes = homesSet.map(home => <RecHome key={home._id} home={home} />)

    //implement restriction of three home views on screen
    //implement scroll left/right via buttons

    return (
        <div>
                <button className="left-button"
                    onClick={prevhome}
                    disabled={shift === 0}
                >Back</button>

                <button className="right-button"
                    onClick={nexthome}
                    disabled={shift === homesSet.length-3}
                    >Forward</button>

            <h4>More Homes You May Like</h4>

                <div className='list-wrapper' style={{
                    'transform': `translateX(-${shift*(100/homesSet.length)}%)`
                }}>{homes}</div>

        </div>
    )

};

export default RecHomeList;