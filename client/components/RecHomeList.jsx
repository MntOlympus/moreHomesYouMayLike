import React from 'react';
import RecHome from './RecHome.jsx';

const RecHomeList = ({ homesSet }) => {

   const homes = homesSet.map(home => <RecHome home={home} />)

    return (
        <div>
            <h4>More Homes You May Like</h4>
            <div className='list-wrapper'>{homes}</div>
        </div>
    )

};

export default RecHomeList;