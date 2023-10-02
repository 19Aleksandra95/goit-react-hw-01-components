import  PropTypes  from 'prop-types';

import { Friends } from "./FriendsList.styled";
import { ListItem } from '../ListItem/ListItem';

export const FriendList = ({ friends }) => {



  return (
    <Friends>
      {friends.map((friend) => {
        return (
          <ListItem key={friend.id} {...friend}/>
        );
      })}
    </Friends>
  );
};


FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired
    })
  ).isRequired
};