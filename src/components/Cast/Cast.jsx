import { Loader } from 'components/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'servises/api';
import { CastList } from './CastList';
import { NoCast } from './NoCast';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    const getCastData = async () => {
      try {
        setIsLoading(true);
        setCast(await getCast(movieId));
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    getCastData();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {cast.length !== 0 ? <CastList cast={cast} /> : <NoCast />}
      {error && alert('Sorry, something is wrong!')}
    </>
  );
};
