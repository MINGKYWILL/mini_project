import { useEffect, useState } from "react";
import requests from "../api/requests";
import axios from "../api/axios";
import Nav from "../component/Nav";
import "./Home.css";
import Row from "../component/Row";

function Home() {
  const NavFunction = () => {
    useEffect(() => {
      //for background color
      document.body.classList.add("detail-page");

      return () => {
        document.body.classList.remove("detail-page");
      };
    }, []);
  };
  NavFunction();
  return (
    <div>
      <div className="nav__container">
        <Nav />
      </div>
      <Row
        title="Trending Now"
        id="TN"
        fetchUrl={requests.fetchTrending}
        mediaType="movie"
      />
      <Row
        title="Top Rated"
        id="TR"
        fetchUrl={requests.fetchTopRated}
        mediaType="movie"
      />
      <Row
        title="Action"
        id="AM"
        fetchUrl={requests.fetchActionMovies}
        mediaType="movie"
      />
      <Row
        title="Family"
        id="FM"
        fetchUrl={requests.fetchFamilyMovies}
        mediaType="movie"
      />
      <Row
        title="Comedy"
        id="CM"
        fetchUrl={requests.fetchComedyMovies}
        mediaType="movie"
      />
      <Row
        title="Mystery"
        id="RM"
        fetchUrl={requests.fetchMysteryMovies}
        mediaType="movie"
      />
      <Row
        title="TV Series"
        id="TV"
        fetchUrl={requests.fetchTv}
        mediaType="tv"
      />
    </div>
  );
}

export default Home;
