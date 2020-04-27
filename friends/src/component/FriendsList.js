import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "./utilities/axiosWithAuth";
import AddFriend from "./addFriend";

function FriendsList() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/friends")
      .then((res) => {
        console.log("response from api", res);
        setFriends(res.data);
      });
  }, [setFriends]);

  return (
    <div>
      <AddFriend addFriend={setFriends} friends={friends} />
      <h1>Friends</h1>
      {friends.map((friend) => {
        return (
          <div>
            <h1> {friend.name}</h1>
            <h2> {friend.age} </h2>
            <h3> {friend.email} </h3>
          </div>
        );
      })}
    </div>
  );
}

export default FriendsList;
