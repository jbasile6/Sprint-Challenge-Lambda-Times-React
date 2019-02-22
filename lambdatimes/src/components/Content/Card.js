import React from 'react';



//DATA FLOW:
//Content > Tabs > Tab and Content > Cards > *Card*

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{/* headline goes here */}</div>
      <div className="author">
        <div className="img-container">
          <img src={'' /* image source goes here */} />
        </div>
        <span>By {/* author goes here */}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.

export default Card;
