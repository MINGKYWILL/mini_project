import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/axios";
import Nav from "../component/Nav";
import "./Detail.css";

function Detail() {
  const [details, setDetails] = useState([]);
  let { mediaId, mediaType } = useParams();

  const getMovie = async () => {
    const request = await axios.get(
      `https://api.themoviedb.org/3/${mediaType}/${mediaId}`
    );
    console.log(request);
    setDetails(request.data);
  };
  useEffect(() => {
    getMovie();
  }, [mediaId]);

  if (!details) return null;

  return (
    <div
      className="detail__wrapper"
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original${details.backdrop_path}')`,
      }}
    >
      <div className="nav__container">
        <Nav />
      </div>
      <div className="movie__detail--container">
        <div className="movie__content">
          <div className="poster__wrapper">
            <img
              key={details.id}
              src={`https://image.tmdb.org/t/p/w400${details.poster_path}`}
              alt={details.title || details.name}
            />
          </div>
          <div className="movie__meta">
            <div className="movie__title">
              <h2>{details.title || details.name}</h2>
              <div className="movie__info">
                {details.release_date || details.first_air_date} {"Rating: "}
                {details.vote_average}
              </div>
            </div>
            <div className="movie__overview">
              <h3>{"Overview"}</h3>
              <p>{details.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Detail;
