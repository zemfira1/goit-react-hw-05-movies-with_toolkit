import { ButtonEl } from './LoadMore.styled';
//import PropTypes from "prop-types";

export const LoadMore = ({ onClick }) => {
  return (
    <ButtonEl type="button" onClick={onClick}>
      Load more
    </ButtonEl>
  );
};
