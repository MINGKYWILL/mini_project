import React from "react";

function RatingFilter({ selectedRating, onSelectRating }) {
  const handleRatingChange = (e) => {
    onSelectRating(parseFloat(e.target.value));
    console.log(e.target);
  };
  return (
    <div>
      <h2>⭐️Rating⭐️</h2>
      <input
        type="range"
        min="0"
        max="10"
        step="0.1"
        value={selectedRating}
        onChange={handleRatingChange}
      />
      <span>{selectedRating}</span>
    </div>
  );
}

export default RatingFilter;
