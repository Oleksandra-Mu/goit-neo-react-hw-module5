import { useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { fetchFilmsDetails } from "../../api/film-search";
import css from "./MovieDetailsPage.module.css";
const defaultImg =
  "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

const MovieDetailsPage = () => {
  const { movieID } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    fetchFilmsDetails(movieID).then((data) => setMovieDetails(data));
  }, [movieID]);
  const location = useLocation();
  const goBackLink = useRef(location.state || "/");

  console.log(movieID);
  return (
    <div>
      <Link to={goBackLink.current}>Go back</Link>
      {movieDetails && (
        <div className={css.movieInfo}>
          <img
            src={
              movieDetails.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
                : defaultImg
            }
            width={250}
            alt="poster"
          />
          <div>
            <h2 className={css.title}>{movieDetails.title}</h2>
            <p>User score: {movieDetails.vote_average * 10}%</p>
            <h3>Overview</h3>
            <p>{movieDetails.overview}</p>
            <h3>Genres</h3>
            <p>
              {movieDetails.genres.map((genre) => (
                <span key={genre.id}>{genre.name} </span>
              ))}
            </p>
          </div>
        </div>
      )}
      <hr />
      <h3>Additional information</h3>
      <ul className={css.infoList}>
        <li className={css.link}>
          <Link to="cast">Cast</Link>
        </li>
        <li className={css.link}>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <hr />
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
