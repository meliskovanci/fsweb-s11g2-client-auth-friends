import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";

import Login from "./components/Login";
import FriendList from "./components/FriendList";
import AddFriend from "./components/AddFriend";
import Logout from "./components/Logout";

import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>FRIENDS DATABASE</h1>
          <Link className="link" to="/login">LOGIN</Link>
          <Link className="link" to="/friends">FRIENDLIST</Link>
          <Link className="link" to="/friends/add">ADDFRIEND</Link>
          <Link className="link" to="/logout">LOGOUT</Link>
        </header>

        <Route exact path="/">
          <Login />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>

        <PrivateRoute exact path="/friends" component={FriendList}/>
        <PrivateRoute exact path="/friends/add" component={AddFriend}/>
        <PrivateRoute exact path="/logout" component={Logout}/>

      </div>
    </Router>
  );
}

export default App;

