import axios from "axios";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NGRiYzY0MGVlZDI4ZDZkOGEzMDdiZGM1ZDk5MzJjMCIsIm5iZiI6MTc0MTg2NTUwMS43MzYsInN1YiI6IjY3ZDJjMjFkNDM0Yzk4YzhlYzgxYmMwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GYFhO5qzAT8LGaA9pq8lrHFTqnn51_TG84nw-_QBQQY";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common["Authorization"] = `Bearer  ${API_KEY}`;

export async function fetchFilms() {
  const response = await axios.get("/trending/movie/day?language=en-US");
  return response.data;
}

export async function fetchFilmsByQuery(query) {
  const response = await axios.get(
    `/search/movie?query=${query}&include_adult=false&language=en-US`
  );
  return response.data;
}

export async function fetchFilmsDetails(movie_id) {
  const response = await axios.get(`/movie/${movie_id}?language=en-US`);
  return response.data;
}

export async function fetchCastDetails(movie_id) {
  const response = await axios.get(`/movie/${movie_id}/credits?language=en-US`);
  return response.data;
}
export async function fetchReviewDetails(movie_id) {
  const response = await axios.get(`/movie/${movie_id}/reviews?language=en-US`);
  return response.data;
}
