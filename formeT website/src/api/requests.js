const requests = {
  fetchNowPlaying: "/movie/now_playing",
  fetchTrending: "/trending/all/week",
  fetchTopRated: "/movie/top_rated",
  fetchActionMovies: "/discover/movie?with_genres=28&page=6",
  fetchFamilyMovies: "/discover/movie?with_genres=10751&page=2",
  fetchComedyMovies: "/discover/movie?with_genres=35&page=2",
  fetchMysteryMovies: "/discover/movie?with_genres=9648&page=3",
  fetchTv: "/trending/tv/day",
  fetchAll: "/trending/all/day",
};

export default requests;
