import React, { useState } from 'react';

const GiveReviews = ({ doctor, onSubmit }) => {
  const [submittedMessage, setSubmittedMessage] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const [rating, setRating] = useState(0);
  const [formData, setFormData] = useState({
        name: '',
        review: '',
        rating: 0
      });

  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //formData.rating = rating;
    setSubmittedMessage(formData);

    onSubmit({doctor, formData});

    setFormData('');
        if (formData.name && formData.review && formData.rating > 0) {
          setShowWarning(false);
        } else {
          setShowWarning(true);
        }
  };

  const StarRating = () => {
    return (
      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={index <= rating ? "on" : "off"}
              onClick={() => setRating(index)}
            >
              <span className="star">&#9733;</span>
            </button>
          );
        })}
      </div>
    );
  };

  return (
        <div>
        <form onSubmit={handleSubmit} className="review-form">
          <h2>Give Your Feedback</h2>
            {showWarning && <p className="warning">Please fill out all fields.</p>}
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="review">Review:</label>
                <textarea id="review" name="review" value={formData.review} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="rating">Rating:</label>
                <StarRating/>
            </div>
            <button type="submit">Submit</button>
        </form>

{submittedMessage && (
    <div>
      <h3>Submitted Message:</h3>
      <p>{submittedMessage}</p>
    </div>
  )}
  </div>
  )
}

export default GiveReviews;
