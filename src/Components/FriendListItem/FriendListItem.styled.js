import styled from "styled-components";

export const FriendCard = styled.li`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 450px;
  padding: 10px 0px;
  -webkit-box-shadow: 0px 0px 17px 5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 17px 5px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 17px 5px rgba(0, 0, 0, 0.75);
  margin-bottom: 20px;
`;

export const FriendCardStatus = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 0 20px 0 20px;
  background-color: ${(props) => (props.isOnline ? "green" : "red")};
`;

export const FriendCardAvatar = styled.img`
  display: block;
  width: 100px;
  height: 100px;
  margin-right: 20px;
  border-radius: 10px;
`;

export const FriendCardName = styled.p`
  font-size: 28px;
  font-weight: 700;
`;
