import { FormEl } from 'components/Form/Form';
import { ListOfMovies } from 'components/ListOfMovies';
import { Loader } from 'components/Loader';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovie } from 'servises/api';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchMovies, setSearchMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const formSubmit = data => {
    if (data.query === query) {
      alert('This request is already active!');
      return;
    }

    if (data.query === '') {
      return setSearchParams({});
    }

    setSearchParams({ query: data.query });
  };

  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;

    const getSearchMovieData = async () => {
      try {
        setIsLoading(true);
        const movies = await getSearchMovie(query);
        const normalizedQuery = query.toLowerCase();
        const filteredMovies = movies.filter(movie =>
          movie.title.toLowerCase().includes(normalizedQuery)
        );
        setSearchMovies(filteredMovies);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    getSearchMovieData();
  }, [query]);

  return (
    <>
      <FormEl onSubmit={formSubmit} />
      {isLoading && <Loader />}
      {Array.isArray(searchMovies) && searchMovies.length !== 0 && (
        <ListOfMovies movies={searchMovies} />
      )}
      {error && alert('Sorry, something is wrong!')}
    </>
  );
};

export default Movies;
