import React, { Component } from "react";
import Card from "./Card";
import PropTypes from "prop-types"

const Cards = props => {
  // console.log(props);
  const card = props.cards.map((card,index) => {
    return <Card key={index} headline={card.headline} cardImage={card.img} author={card.author} />;
  });

 

  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
      {card}
    </div>
  );
};

// Make sure you include prop types for all of your incoming props

Cards.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      headline: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      tab: PropTypes.string.isRequired
    })
  ) 
}

export default Cards;
