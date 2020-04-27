import React from "react";
import Header from "./Header";

function Home(props) {
  const logout = () => {
    localStorage.removeItem("token");
    props.history.push("login");
    console.log(localStorage.getItem("token"));
  };
  return (
    <div>
      <Header logout={logout} />
      <h1>Here is my home Component</h1>
      <h2> Click The Link Below For The Friends Component</h2>
      <a href="/friends">
        <button> Magic Button To Friends!</button>
      </a>
    </div>
  );
}

export default Home;
