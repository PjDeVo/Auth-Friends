import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "./utilities/axiosWithAuth";

function AddFriend(props) {
  //   const [friends, setFriends] = useState([]);

  const [newFriend, addFriend] = useState({
    id: Date.now(),
    name: "",
    age: "",
    email: "",
  });

  const handleChange = (e) => {
    addFriend({
      ...newFriend,
      [e.target.name]: e.target.value,
    });
  };

  //   useEffect(() => {
  //     axiosWithAuth()
  //       .get("/friends")
  //       .then((res) => {
  //         console.log(res);
  //         setFriends(res.data);
  //       });
  //   }, [setFriends]);

  const onSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/friends", newFriend)
      .then((res) => {
        console.log(res);
      });
    window.location.reload();
  };
  return (
    <form onSubmit={onSubmit}>
      <label> Friend Name</label>
      <input
        type="text"
        name="name"
        value={newFriend.name}
        onChange={handleChange}
      />
      <label> Friend Age</label>
      <input
        type="text"
        name="age"
        value={newFriend.age}
        onChange={handleChange}
      />
      <label> Friend Email</label>
      <input
        type="text"
        name="email"
        value={newFriend.email}
        onChange={handleChange}
      />
      <button> Make A New Friend</button>
    </form>
  );
}

export default AddFriend;
