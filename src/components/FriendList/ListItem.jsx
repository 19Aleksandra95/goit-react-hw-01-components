import { PropTypes } from 'prop-types';

import { Status } from './ListItem.styled';

export const ListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <li id={id}>
      <Status status={isOnline}></Status>
      <img src={avatar} alt="User Avatar" width="48" />
      <p>{name}</p>
    </li>
  );
};

ListItem.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};