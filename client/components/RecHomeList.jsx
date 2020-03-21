import React from 'react';
import RecHome from './RecHome.jsx';

const RecHomeList = ({ homesSet, shift, nexthome, prevhome }) => {

   const homes = homesSet.map(home => <RecHome key={home._id} home={home} />)

    return (
        <div>
            <h4>More Homes You May Like</h4>

                <button className="left-button"
                    onClick={prevhome}
                    disabled={shift === 0}
                >Back</button>

                <button className="right-button"
                    onClick={nexthome}
                    disabled={shift === homesSet.length-3}
                >Forward</button>

                <div className='container'>
                    <div className='list-wrapper' style={{
                        'transform': `translateX(-${shift*(272)}px)`}}>
                    {homes}</div>
                </div>

        </div>
    )
};

export default RecHomeList;