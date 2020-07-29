import React from "react";
import Profile from "./Components/Profile/Profile.js";
import Statistics from "./Components/Statistics/Statistics.js";
import FriendList from "./Components/FriendList/FriendList.js";
import TransactionHistory from "./Components/TransactionHistory/TransactionHistory.js";
import friends from "./db/friends.json";
import user from "./db/user.json";
import statisticalData from "./db/statistical-data.json";
import transactions from "./db/transactions.json";

import "./App.css";

function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
