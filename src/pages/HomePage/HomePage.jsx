import { useEffect, useState } from "react";
import { fetchFilms } from "/src/api/film-search.js";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [trendingFilms, setTrendingFilms] = useState([]);
  useEffect(() => {
    fetchFilms().then((data) => setTrendingFilms(data.results));
  }, []);

  return (
    <div>
      <h1>Trending Movies</h1>
      <MovieList movies={trendingFilms} />
    </div>
  );
};

export default HomePage;
