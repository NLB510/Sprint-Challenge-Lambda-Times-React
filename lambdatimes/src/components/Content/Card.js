import React from "react";
import PropTypes from "prop-types";

const Card = props => {
  // console.log(props);

  return (
    <div className="card">
      <div className="headline">{props.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.cardImage} />
        </div>
        <span>By {props.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.

Card.propTypes = {
  props: PropTypes.shape({
    author: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    tab: PropTypes.string.isRequired
  })
};

export default Card;
