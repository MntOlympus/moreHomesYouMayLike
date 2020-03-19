import React from 'react';

const Stars = ({starCount}) => {

  return (
    <span>

    {(function() {
    switch (starCount) {
      case 1:
        return <span className="hearts">
          <i className="fas fa-heart fa-xs" style={{color: "pink"}}/>
        </span>


      case 2:
        return <span className="hearts">
          <i className="fas fa-heart fa-xs" style={{color: "pink"}}/>
          <i className="fas fa-heart fa-xs" style={{color: "pink"}}/>
        </span>


      case 3:
        return <span className="hearts">
          <i className="fas fa-heart fa-xs" style={{color: "pink"}}/>
          <i className="fas fa-heart fa-xs" style={{color: "pink"}}/>
          <i className="fas fa-heart fa-xs" style={{color: "pink"}}/>
        </span>

      case 4:
        return <span className="hearts">
          <i className="fas fa-heart fa-xs" style={{color: "pink"}}/>
          <i className="fas fa-heart fa-xs" style={{color: "pink"}}/>
          <i className="fas fa-heart fa-xs" style={{color: "pink"}}/>
          <i className="fas fa-heart fa-xs" style={{color: "pink"}}/>
        </span>

      case 5:
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