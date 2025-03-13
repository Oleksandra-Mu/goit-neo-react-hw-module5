import { useEffect, useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import { useSearchParams } from "react-router-dom";
import { fetchFilmsByQuery } from "../../api/film-search";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [queryFilms, setQueryFilms] = useState([]);
  const [searchPerformed, setSearchPerformed] = useState(false);
  function handleSearch(query) {
    setSearchParams({ query });
    setSearchPerformed(false);
  }

  useEffect(() => {
    const query = searchParams.get("query");
    if (!query) {
      return;
    }
    setSearchPerformed(true);

    fetchFilmsByQuery(query).then((data) => setQueryFilms(data.results));
  }, [searchParams]);

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      {searchPerformed && queryFilms.length === 0 && <h2>No results found</h2>}
      {queryFilms.length > 0 && <h2>Search results</h2>}
      <MovieList movies={queryFilms} />
    </div>
  );
};

export default MoviesPage;
