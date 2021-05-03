import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return(
        <nav className="nav">
            <Link to="/hw24-Redux-Thunk" className="nav__link link">Home</Link>
            <Link to="/hw24-Redux-Thunk/users" className="nav__link link">Users</Link>
            <Link to="/hw24-Redux-Thunk/addUser" className="nav__link link">Add user</Link>
            <Link to="/hw24-Redux-Thunk/tweets" className="nav__link link">Tweets</Link>
            <Link to="/hw24-Redux-Thunk/addTweet" className="nav__link link">Add tweet</Link>
        </nav>
    )
};

export default Navigation;