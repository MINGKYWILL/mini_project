import React from "react";
import { styled } from "styled-components";

function MovieCard({ movie }) {
  return (
    <CardWrapper className="movie-card">
      <h2>{movie.title}</h2>
      <Poster
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt={movie.title}
      />
      <p>Rating: {movie.vote_average}</p>
      <p>Release Date: {movie.release_date}</p>
    </CardWrapper>
  );
}

export default MovieCard;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-item: center;
  padding: 0 1rem;
  z-index: 10;
  height: 100%;

  h2 {
    font-size: 14px;
  }
`;

const Poster = styled.img`
  display: flex;
  height: 250px;
  width: auto;
`;
