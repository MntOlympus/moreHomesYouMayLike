import React from 'react';
import RecHome from './RecHome.jsx';

const RecHomeList = ({ homesSet }) => {

   const homes = homesSet.map(home => <RecHome key={home._id} home={home} />)

    //implement restriction of three home views on screen
        //implement scroll left/right via buttons

    return (
        <div>
            <h4>More Homes You May Like</h4>

            <div className='list-wrapper'>
                    {homes}
            </div>
        </div>
    )

};

export default RecHomeList;