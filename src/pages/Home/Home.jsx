import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../servises/api';
import { ListOfMovies } from 'components/ListOfMovies';
import { Loader } from 'components/Loader';
import { Title } from './Home.styled';
import { LoadMore } from 'components/LoadMore';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isButton, setIsButton] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getTrendingMovies(currentPage)
      .then(r => {
        if (r.results.length === 0) {
          alert('Sorry, there are no movies.');
          return;
        }
        setMovies(prevState => [...prevState, ...r.results]);
        setIsButton(currentPage < r.total_pages);
      })
      .catch(error => setError(error))
      .finally(() => setIsLoading(false));
  }, [currentPage]);

  const loadMoreMovies = () => {
    setCurrentPage(prevState => prevState + 1);
  };

  return (
    <>
      {isLoading && <Loader />}
      {movies.length !== 0 && (
        <>
          <Title>Trending this week</Title>
          <ListOfMovies movies={movies} />
        </>
      )}
      {isButton && <LoadMore onClick={loadMoreMovies} />}
      {error && alert('Sorry, something is wrong!')}
    </>
  );
};

export default Home;
