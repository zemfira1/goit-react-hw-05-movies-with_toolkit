import PropTypes from 'prop-types';
import { ActorData, Image, Item, Name } from './CastListItem.styled';
import man from '../../../../images/man.jpg';
import woman from '../../../../images/woman.jpg';

export const CastListItem = ({ name, character, profile_path, gender }) => {
  const BASE_URL = 'http://image.tmdb.org/t/p/w185/';
  console.log(gender === 1);

  return (
    <Item>
      <Image
        src={
          profile_path ? BASE_URL + profile_path : gender === 1 ? woman : man
        }
        alt={name}
      />
      <ActorData>
        <Name>{name}</Name>
        <p>Character: {character}</p>
      </ActorData>
    </Item>
  );
};

CastListItem.propTypes = {
  name: PropTypes.string,
  character: PropTypes.string,
  profile_path: PropTypes.string,
};
