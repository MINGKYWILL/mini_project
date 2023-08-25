import React from "react";
import { styled } from "styled-components";

function YearFilter({ selectedYear, onSelectYear }) {
  const handleYearChange = (e) => {
    onSelectYear(e.target.value);
    console.log(e.target);
  };
  return (
    <YearWrapper>
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
    </YearWrapper>
  );
}

export default YearFilter;

const YearWrapper = styled.div`
  color: #fff;

  h2 {
    font-size: 18px;
  }
`;
