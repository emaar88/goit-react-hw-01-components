import React from "react";
import PropTypes from "prop-types";
import {
  FriendCard,
  FriendCardStatus,
  FriendCardAvatar,
  FriendCardName,
} from "./FriendListItem.styled";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendCard>
      <FriendCardStatus isOnline={isOnline} />
      <FriendCardAvatar src={avatar} alt="avatar" width="48" />
      <FriendCardName>{name}</FriendCardName>
    </FriendCard>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;
