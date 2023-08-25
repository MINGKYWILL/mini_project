import React from "react";
import { styled } from "styled-components";

function GenreFilter({ selectedGenres, onSelectGenres }) {
  const genres = [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 35,
      name: "Comedy",
    },
    {
      id: 80,
      name: "Crime",
    },

    {
      id: 18,
      name: "Drama",
    },
    {
      id: 10751,
      name: "Family",
    },
    {
      id: 14,
      name: "Fantasy",
    },
    {
      id: 36,
      name: "History",
    },
    {
      id: 27,
      name: "Horror",
    },
    {
      id: 10402,
      name: "Music",
    },
    {
      id: 9648,
      name: "Mystery",
    },
    {
      id: 10749,
      name: "Romance",
    },
    {
      id: 878,
      name: "Science Fiction",
    },

    {
      id: 53,
      name: "Thriller",
    },
  ];

  const handleGenreChange = (clickedGenre) => {
    onSelectGenres((prevSelectedGenres) => {
      if (prevSelectedGenres.includes(clickedGenre)) {
        return prevSelectedGenres.filter((genre) => genre !== clickedGenre);
      } else {
        return [...prevSelectedGenres, clickedGenre];
      }
    });
  };

  return (
    <GenreWrapper>
      <Title className="filter_title">
        <h2>Genres</h2>
      </Title>
      <GenreLists>
        {genres.map((genre) => {
          console.log("Genre:", genre);
          return (
            <div key={genre.id}>
              <input
                type="checkbox"
                id={`genre-${genre.id}`}
                value={genre.id}
                checked={selectedGenres.includes(genre.id)}
                onChange={() => handleGenreChange(genre.id)}
              />
              <label htmlFor={`genre-${genre.id}`}>{genre.name}</label>
            </div>
          );
        })}
      </GenreLists>
    </GenreWrapper>
  );
}

export default GenreFilter;

const GenreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  padding: 20px;
`;
const GenreLists = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-width: calc(30% - 2px);
  padding: 2px;
  height: auto;
  font-size: 15px;

  label {
    margin: 10px;
  }
`;

const Title = styled.div`
  h2 {
    font-size: 18px;
  }
`;
