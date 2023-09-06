import PropTypes from 'prop-types';
import { Content, Item, Name } from './ReviewsItem.styled';

export const ReviewsItem = ({ author, content }) => {
  return (
    <Item>
      <Name>Author: {author}</Name>
      <Content>{content}</Content>
    </Item>
  );
};

ReviewsItem.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string,
};
