import React from 'react';

import propTypes from 'prop-types';


//DATA FLOW:
//Content > Tabs > Tab and Content > Cards > *Card*

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.card.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.card.img} alt='Author Image' />
        </div>
        <span>By {props.card.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.

Card.propTypes = {
  headline: propTypes.string,
  img: propTypes.string,
  author: propTypes.string

}

export default Card;
