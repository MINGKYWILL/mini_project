import React from "react";

function YearFilter({ selectedYear, onSelectYear }) {
  const handleYearChange = (e) => {
    onSelectYear(e.target.value);
    console.log(e.target);
  };
  return (
    <div>
      <h2>Released Year</h2>
      <input
        type="range"
        min="2000"
        max="2023"
        step="1"
        value={selectedYear}
        onChange={handleYearChange}
      />
      <span>{selectedYear}</span>
    </div>
  );
}

export default YearFilter;
