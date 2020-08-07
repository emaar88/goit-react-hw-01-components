import React from "react";
import FriendListItem from "./../FriendListItem/FriendListItem";
import PropTypes from "prop-types";
import { FriendsList } from "./FriendList.styled";

const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map((el) => (
        <FriendListItem
          key={el.id}
          avatar={el.avatar}
          name={el.name}
          isOnline={el.isOnline}
        />
      ))}
    </FriendsList>
  );
};

FriendList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendList;
