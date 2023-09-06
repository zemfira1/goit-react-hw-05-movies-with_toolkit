import { ReviewsItem } from './ReviewsItem';
import { List } from './ReviewsList.styled';
import PropTypes from 'prop-types';

export const ReviewsList = ({ reviews }) => {
  return (
    <List>
      {reviews.map(({ id, author, content }) => (
        <ReviewsItem key={id} author={author} content={content} />
      ))}
    </List>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number,
      author: PropTypes.string,
      content: PropTypes.string,
    })
  ),
};
