import { useState, useEffect } from "react";
import axios from "../api/axios";
import GenreFilter from "../component/GenreFilter";
import RatingFilter from "../component/RatingFilter";
import YearFilter from "../component/YearFilter";
import MovieCard from "../component/MovieCard";
import "./Pick.css";

function Pick() {
  const [movies, setMovies] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedRating, setSelectedRating] = useState(0);
  const [selectedYear, setSelectedYear] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPagesInRange() {
      const apiKey = "";
      const baseUrl = `https://api.themoviedb.org/3/discover/movie`;
      const language = "en-US";

      const pages = [];
      for (let page = 1; page <= 11; page++) {
        const response = await axios.get(
          `${baseUrl}?api_key=${apiKey}&language=${language}&page=${page}`
        );
        pages.push(response.data.results);
        console.log(pages);
      }
      setMovies(pages.flat());
      setLoading(false);
    }

    fetchPagesInRange().catch((error) => {
      console.error("Error fetching data:", error);
    });
  }, []);

  return (
    <div className="pick">
      <div className="filters">
        <GenreFilter
          selectedGenres={selectedGenres}
          onSelectGenres={setSelectedGenres}
        />
        <RatingFilter
          selectedRating={selectedRating}
          onSelectRating={setSelectedRating}
        />
        <YearFilter
          selectedYear={selectedYear}
          onSelectYear={setSelectedYear}
        />
      </div>
      <div className="movie-list">
        {loading ? (
          <p>Loading..</p>
        ) : movies.length > 0 ? (
          movies
            .filter((movie) => {
              const genreMatches =
                selectedGenres.length === 0 ||
                movie.genre_ids.some((genreId) =>
                  selectedGenres.includes(genreId)
                );
              const ratingMatches = movie.vote_average >= selectedRating;
              const yearMatches =
                selectedYear === "" ||
                new Date(movie.release_date).getFullYear().toString() ===
                  selectedYear;

              return genreMatches && ratingMatches && yearMatches;
            })
            .map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <p>No movies found😢</p>
        )}
      </div>
    </div>
  );
}

export default Pick;
