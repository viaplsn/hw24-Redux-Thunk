import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './pages/Home/Home';
import Navigation from './components/Navigation/Navigation';
import Users from './pages/Users/Users';
import AddUser from './pages/AddUser/AddUser';
import Tweets from './pages/Tweets/Tweets';
import AddTweet from './pages/AddTweet/AddTweet';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/hw24-Redux-Thunk" exact>
            <Home />
          </Route>
          <Route path="/hw24-Redux-Thunk/users">
            <Users />
          </Route>
          <Route path="/hw24-Redux-Thunk/addUser">
            <AddUser />
          </Route>
          <Route path="/hw24-Redux-Thunk/tweets">
            <Tweets />
          </Route>
          <Route path="/hw24-Redux-Thunk/addTweet">
            <AddTweet />
          </Route>
          <Route path="*">
            <h2>No page found</h2>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;