// export const URL_SERVICIOS = "http://localhost:3000";

// TMDB -> https://www.themoviedb.org/
// API Key (v3 auth):
// 0dc1c8e9b5ba6fc5a651c4a5fff68895
// API Read Access Token (v4 auth)
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZGMxYzhlOWI1YmE2ZmM1YTY1MWM0YTVmZmY2ODg5NSIsInN1YiI6IjVlZDU3MDA5NTI4YjJlMDAyMDcwNjY5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j2X8PLjKNZ5_Hw6s6_ftXdiQHZnk9XOWOm_d75alAug

export const API_KEY = "0dc1c8e9b5ba6fc5a651c4a5fff68895";
export const URL_TMDB = "https://api.themoviedb.org/3/";

// tmdb API https://developers.themoviedb.org/3/getting-started/introduction
const fetchWithGenres = `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=`;

export const methodsTMdB = {
  getTrenging: `trending/all/week?api_key=${API_KEY}&language=en-US`,
  getTopRated: `movie/top_rated?api_key=${API_KEY}&language=en-US`,
  // put API_KEY and SEE genre code in https://developers.themoviedb.org/3/genres/get-movie-list
  getActionMovies: `${fetchWithGenres}28`,
  getComedyMovies: `${fetchWithGenres}35`,
  getHorrorMovies: `${fetchWithGenres}27`,
  getRomanceMovies: `${fetchWithGenres}10749`,
  getMysteryMovies: `${fetchWithGenres}9648`,
  getSciFiMovies: `${fetchWithGenres}878`,
  getWesternMovies: `${fetchWithGenres}37`,
  getAnimationMovies: `${fetchWithGenres}16`,
  getTvMovies: `${fetchWithGenres}10770`,
};
