import { useEffect, useRef, useState } from "react";
import { fetchCastDetails } from "../../api/film-search";
import { useParams } from "react-router-dom";
import css from "./MovieCast.module.css";

const defaultImg =
  "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

const MovieCast = () => {
  const { movieID } = useParams();
  const [creditDetails, setCreditDetails] = useState(null);

  useEffect(() => {
    fetchCastDetails(movieID).then((data) => setCreditDetails(data));
  }, [movieID]);
  const galleryRef = useRef(null);
  setTimeout(() => {
    if (galleryRef.current) {
      galleryRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, 0);
  return (
    <div>
      {creditDetails && creditDetails.cast.length > 0 ? (
        <>
          <ul className={css.castList} ref={galleryRef}>
            {creditDetails.cast.map((cast) => (
              <li key={cast.id}>
                <img
                  src={
                    cast.profile_path
                      ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                      : defaultImg
                  }
                  width={100}
                  alt={cast.name}
                />
                <p className={css.name}>{cast.name}</p>
                <p>Character: {cast.character}</p>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>No cast information</p>
      )}
    </div>
  );
};

export default MovieCast;
