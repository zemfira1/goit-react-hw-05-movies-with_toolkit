import { BsArrowLeft } from 'react-icons/bs';
import { ButtonEl } from './Button.styled';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

export const Button = ({ location }) => {
  const locationRef = useRef(location.state?.from ?? `/`);
  // console.log(location);
  // console.log(locationRef);

  return (
    <Link to={locationRef.current}>
      <ButtonEl>
        <BsArrowLeft />
        <span>Go back</span>
      </ButtonEl>
    </Link>
  );
};
