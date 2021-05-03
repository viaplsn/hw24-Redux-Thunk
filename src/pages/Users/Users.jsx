import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getUsers from '../../store/actionCreators/getUsers';
import './Users.css';

const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users);

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);
    return (
        <main className="Users">
            <h2 className="Users__header">Users list</h2>
            {users.map((user, index) => {
            return <div key={index} className="Users__container">
                <div className="Users__container__image" style={{backgroundImage: `url(${user.avatar})`}}/>
                <p className="Users__container__name">{user.name}</p>
                <p className="Users__container__username">{user.username}</p>
            </div>
            })}
        </main>
    );
};

export default Users;