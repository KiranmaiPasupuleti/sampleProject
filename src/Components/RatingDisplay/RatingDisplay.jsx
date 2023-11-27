import React from 'react';
import ReactStars from "react-rating-stars-component";

const StarRating = ({ rating }) => {
  // console.log(rating)
  const ratingChanged = (newRating) => {
    // console.log(newRating);
  };
   
  return (
    <div className='col-12 d-flex flex-wrap justify-content-center'>
    <ReactStars
    count={5}
    onChange={ratingChanged}
    size={34}
    value={rating}
    isHalf={true}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#ffd700"
      edit={false} // Disable user interaction
  />
    </div>
    
  );
};

export default StarRating;