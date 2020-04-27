import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

import Home from "./component/Home";
import Login from "./component/Login";
import PrivateRoute from "./component/PrivateRoute";
import FriendsList from "./component/FriendsList.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <PrivateRoute path="/friends" component={FriendsList} />
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
