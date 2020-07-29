import React from "react";
import FriendListItem from "./../FriendListItem/FriendListItem";
import PropTypes from "prop-types";
import friends from "./../../db/friends.json";
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

export default FriendList;
