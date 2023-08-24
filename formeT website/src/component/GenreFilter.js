import React from "react";

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
      id: 99,
      name: "Documentary",
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
    // {
    //   id: 10770,
    //   name: "TV Movie",
    // },
    {
      id: 53,
      name: "Thriller",
    },
    // {
    //   id: 10752,
    //   name: "War",
    // },
    // {
    //   id: 37,
    //   name: "Western",
    // },
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
    <div>
      <h2>Genres</h2>
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
    </div>
  );
}

export default GenreFilter;
