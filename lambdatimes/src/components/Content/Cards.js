import React, { Component } from 'react';
import Card from './Card';

import propTypes from 'prop-types';



//DATA FLOW:
//Content > Tabs > Tab and Content > *Cards* > Card

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map((card, index) => {
        return(
          <Card 
          key={index}
          card={card}
          />
        )
      })}
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props
//Incoming prop is the filtered array of cards?

Cards.propTypes = {
  card: propTypes.array
}
//doesnt give me any errors so assuming this works!

//**NOTE** Could also use shape() to check the types of items inside the array but I will be checking them
// in the cards.js file



export default Cards;