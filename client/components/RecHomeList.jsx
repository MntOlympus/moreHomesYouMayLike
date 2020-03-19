import React from 'react';
import RecHome from './RecHome.jsx';

const RecHomeList = ({ homesSet }) => {

   const homes = homesSet.map(home =>
        <div>
            <RecHome home={home} />
        </div>
    )

    return (
        <div>
            More Homes You May Like
            {homes}
        </div>
    )

};

export default RecHomeList;