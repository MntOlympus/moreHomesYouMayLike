import React from 'react';

const Stars = ({starCount}) => {

  return (
    <span>

    {(function() {

      const x = starCount;

      switch (true) {
        case (x >=1 && x < 2):
          return <span className="hearts">
            <i className="fas fa-heart fa-xs" style={{color: "pink"}}/>
          </span>


        case (x >=2 && x < 3):
          return <span className="hearts">
            <i className="fas fa-heart fa-xs" style={{color: "pink"}}/>
            <i className="fas fa-heart fa-xs" style={{color: "pink"}}/>
          </span>


        case (x >=3 && x < 4):
          return <span className="hearts">
            <i className="fas fa-heart fa-xs" style={{color: "pink"}}/>
            <i className="fas fa-heart fa-xs" style={{color: "pink"}}/>
            <i className="fas fa-heart fa-xs" style={{color: "pink"}}/>
          </span>

        case (x >=4 && x < 5):
          return <span className="hearts">
            <i className="fas fa-heart fa-xs" style={{color: "pink"}}/>
            <i className="fas fa-heart fa-xs" style={{color: "pink"}}/>
            <i className="fas fa-heart fa-xs" style={{color: "pink"}}/>
            <i className="fas fa-heart fa-xs" style={{color: "pink"}}/>
          </span>

        case (x === 5):
          return <span className="hearts">
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