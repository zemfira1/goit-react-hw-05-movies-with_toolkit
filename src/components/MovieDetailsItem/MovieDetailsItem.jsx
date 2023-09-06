import { Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import {
  MovieContainer,
  MovieInfo,
  PageContainer,
  Title,
  Image,
  Paragraph,
  Score,
  Overview,
  Description,
  GenresList,
  AddInfoContainer,
  AddInfoTitle,
  AddInfoList,
  AddInfoItem,
  Line,
} from './MovieDetailsItem.styled';
import PropTypes from 'prop-types';

export const MovieDetailsItem = ({ movieDetails }) => {
  const { poster_path, title, vote_average, overview, genres } = movieDetails;
  const BASE_URL = 'http://image.tmdb.org/t/p/w342/';

  return (
    <PageContainer>
      <MovieContainer>
        <Image src={BASE_URL + poster_path} alt={title} />
        <MovieInfo>
          <Title>{title}</Title>
          <Paragraph>
            Use Score: <Score>{Math.round(Number(vote_average) * 10)} %</Score>
          </Paragraph>
          <Description>
            <Paragraph>Overview</Paragraph>
            <Overview>{overview}</Overview>
          </Description>
          <Description>
            <Paragraph>Genres</Paragraph>
            <GenresList>
              {genres.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </GenresList>
          </Description>
        </MovieInfo>
      </MovieContainer>
      <Line></Line>
      <AddInfoContainer>
        <AddInfoTitle>Additional information</AddInfoTitle>
        <AddInfoList>
          <AddInfoItem>
            <Link to="cast">Cast</Link>
          </AddInfoItem>
          <AddInfoItem>
            <Link to="reviews">Reviews</Link>
          </AddInfoItem>
        </AddInfoList>
      </AddInfoContainer>
      <Line></Line>
      <Suspense>
        <Outlet />
      </Suspense>
    </PageContainer>
  );
};

MovieDetailsItem.propTypes = {
  movieDetails: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      })
    ),
  }),
};
