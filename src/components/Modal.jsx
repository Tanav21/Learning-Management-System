import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const RatingModal = ({ handleRatingSubmit,feed }) => {
  const [feedback, setFeedback] = useState([]);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(true);
  console.log("feed",feed);

  useEffect(() => {
    if(feed==1||feed==2||feed==3||feed==4||feed==5){
      setIsModalOpen(false);
    }
  }, [])
  
  if(!isModalOpen) {
    return null;
  }
  return (
    <div className="rating-modal">
      <div className="modal-content">
        <h2>Rate this Lecture</h2>

        <div className="stars">
          {[...Array(5)].map((_, index) => {
            const currentRating = index + 1;
            return (
              <label key={index}>
                <input
                  type="radio"
                  name="modal-rating"
                  value={currentRating}
                  onClick={() => setRating(currentRating)}
                  style={{ display: "none" }}
                />
                <FaStar
                  size={30}
                  color={
                    currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"
                  }
                  onMouseEnter={() => setHover(currentRating)}
                  onMouseLeave={() => setHover(null)}
                  style={{ cursor: "pointer" }}
                />
              </label>
            );
          })}
        </div>

        <textarea
          placeholder="Write your feedback here..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          rows={4}
          style={{
            width: "100%",
            marginTop: "1rem",
            padding: "0.5rem",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />

        <button
          onClick={() => handleRatingSubmit(rating, feedback)}
          className="common-btn"
          style={{ marginTop: "1rem" }}
        >
          Submit Rating & Feedback
        </button>
      </div>
    </div>
  );
};

export default RatingModal;
