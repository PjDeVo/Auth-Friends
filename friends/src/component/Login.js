import React, { useState } from "react";
import axios from "axios";
import { axiosWithAuth } from "./utilities/axiosWithAuth";

function Login(props) {
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  };

  const login = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/login", loginForm)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        console.log(localStorage.getItem("token"));
        props.history.push("/home");
      });
  };
  return (
    <form onSubmit={login}>
      <label> Username</label>
      <input
        type="text"
        name="username"
        value={loginForm.username}
        onChange={handleChange}
      />
      <label> Password</label>
      <input
        type="text"
        name="password"
        value={loginForm.password}
        onChange={handleChange}
      />
      <button> Login</button>
    </form>
  );
}

export default Login;
