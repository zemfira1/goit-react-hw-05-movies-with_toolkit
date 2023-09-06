import { Button } from 'components/Button';
import { Loader } from 'components/Loader';
import { MovieDetailsItem } from 'components/MovieDetailsItem';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'servises/api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (!movieId) return;

    const getMovieDetailsData = async () => {
      try {
        setIsLoading(true);
        setMovieDetails(await getMovieDetails(movieId));
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    getMovieDetailsData();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {movieDetails && (
        <>
          <Button location={location} />
          <MovieDetailsItem movieDetails={movieDetails} />
        </>
      )}
      {error && alert('Sorry, something is wrong!')}
    </>
  );
};

export default MovieDetails;
