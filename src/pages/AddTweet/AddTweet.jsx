import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import createTweet from '../../store/actionCreators/createTweet';
import './AddTweet.css'
import '../AddUser/AddUser.css'
import { useSelector } from 'react-redux';
import getUsers from '../../store/actionCreators/getUsers';

const AddTweet = () => {
    const [currentUser, setUser] = useState('User');
    const [currentContent, setContent] = useState('');
    const [currentLink, setLink] = useState('');
    const [buttonState, setButtonState] = useState(false);
    const dispatch = useDispatch();
    const users = useSelector(state => state.users);

    const regularName = /^.{2,}$/;
    const regularURL = /^((ftp|http|https):\/\/)?(www\.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9-]*\.?)*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!-])*)?/;

    useEffect(() => {
        if(buttonState) {
            dispatch(createTweet({userId: Number(currentUser), content: currentContent, image: currentLink}));
            setButtonState(false)
        };
        dispatch(getUsers());
    }, [dispatch, buttonState, currentContent, currentLink, currentUser]);

    const submitChanges = () => {
        const erors = document.querySelector('.AddTweet__errors');
        while (erors.firstChild) {
            erors.removeChild(erors.firstChild);
        }
        if(currentUser !== 'User' && regularName.test(currentContent) && regularURL.test(currentLink)) {
            setButtonState(true);
        } else {
            erors.insertAdjacentHTML('afterbegin', '<p class="AddTweet__error">Please fill all required fields correctly</p>')
        }
    };

    return (
        <main className="AddTweet">
            <div className="inputForm__names">
                <h3 className="inputForm__name h3">User</h3>
                <h3 className="inputForm__name h3">Content</h3>
                <h3 className="inputForm__name h3">Image link</h3>
            </div>
            <div className="inputForm">
                <select className="inputForm__input select"  value={currentUser} onChange={e => {setUser(e.target.value)}}>
                    <option className="inputForm__option" disabled value="User">User</option>
                    {users.map((user, index) => {
                        return <option key={index} className="inputForm__option" value={user.id}>{user.name}</option>
                    })}
                </select>
                <input className="inputForm__input input" type="text" onChange={e => setContent(e.target.value)}></input>
                <input className="inputForm__input input" type="text" onChange={e => setLink(e.target.value)}></input>
            </div>
            <div className="inputForm__descriptions">
                <p className="inputForm__description">*Select user</p>
                <p className="inputForm__description">*At least 2 characters</p>
                <p className="inputForm__description">*Link only</p>
            </div>
            <button className="AddTweet__button button" onClick={submitChanges}>Submit</button>
            <div className="AddTweet__errors">
            </div>
        </main>
    )
};

export default AddTweet;

// import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import createUser from '../../store/actionCreators/createUser';
// import './AddUser.css'

// const AddUser = () => {
//     const [currentName, setName] = useState('');
//     const [currentUsername, setUsername] = useState('');
//     const [currentLink, setLink] = useState('');
//     const [buttonState, setButtonState] = useState(false);
//     const dispatch = useDispatch();

//     const regularName = /^[A-Za-zа-яА-ЯёЁіІєЄ' ]{2,}$/;
//     const regularUsername = /@+[A-Za-zа-яА-ЯёЁіІєЄ']{2,}/;
//     const regularURL = /^((ftp|http|https):\/\/)?(www\.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9-]*\.?)*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!-])*)?/;

//     useEffect(() => {
//         if(buttonState) {
//             async function dispatchUser() {
//                 await dispatch(createUser({name: currentName, username: currentUsername, avatar: currentLink}))
//                 setButtonState(false)
//             }
//             dispatchUser()
//         }
//     }, [buttonState, currentLink, currentName, currentUsername, dispatch]);

//     const submitChanges = () => {
//         const erors = document.querySelector('.AddUser__errors');
//         while (erors.firstChild) {
//             erors.removeChild(erors.firstChild);
//         }
//         if(regularName.test(currentName) && regularUsername.test(currentUsername) && regularURL.test(currentLink)) {
//             setButtonState(true);
//         } else {
//             erors.insertAdjacentHTML('afterbegin', '<p class="AddUser__error">Please fill all required fields correctly</p>')
//         }
//     };

//     return (
//         <main className="AddUser">
//             <div className="inputForm__names">
//                 <h3 className="inputForm__name h3">Name</h3>
//                 <h3 className="inputForm__name h3">Username</h3>
//                 <h3 className="inputForm__name h3">User avatar link</h3>
//             </div>
//             <div className="inputForm">
//                 <input className="inputForm__input input" type="text" onChange={e => setName(e.target.value)}></input>
//                 <input className="inputForm__input input" type="text" onChange={e => setUsername(e.target.value)}></input>
//                 <input className="inputForm__input input" type="text" onChange={e => setLink(e.target.value)}></input>
//             </div>
//             <div className="inputForm__descriptions">
//                 <p className="inputForm__description">*At least 2 characters</p>
//                 <p className="inputForm__description">*Always starts with @ </p>
//                 <p className="inputForm__description">*Link only</p>
//             </div>
//             <button className="AddUser__button button" onClick={submitChanges}>Submit</button>
//             <div className="AddUser__errors">
//             </div>
//         </main>
//     )
// };

// export default AddUser;