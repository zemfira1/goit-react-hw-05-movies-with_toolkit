import PropTypes from 'prop-types';
import { List } from './CastList.styled';
import { CastListItem } from './CastListItem';

export const CastList = ({ cast }) => {
  return (
    <List>
      {cast.map(({ id, name, character, profile_path, gender }) => (
        <CastListItem
          key={id}
          name={name}
          character={character}
          profile_path={profile_path}
          gender={gender}
        />
      ))}
    </List>
  );
};

CastList.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number,
      name: PropTypes.string,
      character: PropTypes.string,
      profile_path: PropTypes.string,
    })
  ),
};
