import React from "react";
import { styled } from "styled-components";

function MovieCard({ movie }) {
  return (
    <CardWrapper className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt={movie.title}
      />
      <h2>{movie.title}</h2>
      <p className="rating">Rating: {movie.vote_average}</p>
      <p className="relaeasedDate">Released Date: {movie.release_date}</p>
    </CardWrapper>
  );
}

export default MovieCard;

const CardWrapper = styled.div`
  flex: auto;
  max-width: calc(18% - 20px); /* Adjust the width of each card */
  border: 1px solid #e3e3e3;
  border-radius: 10px;
  overflow: hidden;
  box-sizing: border-box;
  color: #101010;
  background-color: #fff;
  transition: transform 0.5s;

  h2 {
    font-size: 16px;
    padding: 20px 0 5px 10px;
  }
  p {
    font-size: 14px;
  }

  .rating {
    padding: 0 10px;
  }
  .relaeasedDate {
    padding: 0 0 10px 10px;
  }
  img {
    max-width: 100%;
    height: auto;
    // border-radius: 8px 8px 0 0;
  }
  &:hover {
    transform: scale(1.03);
  }
`;
