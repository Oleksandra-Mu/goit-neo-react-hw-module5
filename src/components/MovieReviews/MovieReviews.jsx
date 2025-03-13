import { useEffect, useRef, useState } from "react";
import { fetchReviewDetails } from "../../api/film-search";
import { useParams } from "react-router-dom";
import css from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieID } = useParams();
  const [reviewDetails, setReviewDetails] = useState(null);

  useEffect(() => {
    fetchReviewDetails(movieID).then((data) => setReviewDetails(data));
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
      {reviewDetails && reviewDetails.results.length > 0 ? (
        <>
          <ul ref={galleryRef}>
            {reviewDetails.results.map((result) => (
              <li key={result.id}>
                <p className={css.author}>Author: {result.author}</p>
                <p>{result.content}</p>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>There are no reviews for this movie</p>
      )}
    </div>
  );
};

export default MovieReviews;
