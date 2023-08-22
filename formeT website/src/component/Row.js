import axios from "../api/axios";
import React, { useEffect, useState, useCallback, useRef } from "react";
import "./Row.css";
import { Link } from "react-router-dom";

function Row({ title, id, fetchUrl, mediaType }) {
  const [mediaList, setMediaList] = useState([]);
  const scrollRef = useRef(null);

  const fetchMovieData = useCallback(async () => {
    const response = await axios.get(fetchUrl);
    console.log("response", response);

    setMediaList(response.data.results);
  }, [fetchUrl]);

  useEffect(() => {
    fetchMovieData();
  }, [fetchMovieData]);

  const scrollLeft = () => {
    if (scrollRef.current)
      scrollRef.current.scrollLeft -= window.innerWidth - 5;
  };

  const scrollRight = () => {
    if (scrollRef.current)
      scrollRef.current.scrollLeft += window.innerWidth - 5;
  };

  return (
    <div>
      <h2 className="row__title">{title}</h2>
      <div className="slider">
        <span className="slider__button left-button" onClick={scrollLeft}>
          {"<"}
        </span>
        <div className="row__images" ref={scrollRef}>
          {mediaList.map((media) => (
            <Link to={`/${mediaType}/${media.id}`} key={media.id}>
              <img
                className="row_image"
                src={`https://image.tmdb.org/t/p/original${media.poster_path}`}
                alt={media.title || media.name}
              />
            </Link>
          ))}
        </div>
        <span className="slider__button right-button" onClick={scrollRight}>
          {">"}
        </span>
      </div>
    </div>
  );
}

export default Row;
