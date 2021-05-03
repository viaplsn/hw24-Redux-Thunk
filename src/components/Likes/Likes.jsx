import React, { useEffect, useState } from 'react';
import {ReactComponent as Like} from '../../assets/images/like.svg';

const Likes = (props) => {
    const {likes} = props;
    const [currentLikes, setLikes] = useState(likes);
    const [currentState, setState] = useState(false);
    useEffect(() => {
        if(currentState === false) {
            setLikes(likes);
        } else {
            setLikes(likes + 1)
        }
    }, [currentState, likes])
    const changeState = () => {
        setState(!currentState)
    }
    return(
        <div className="likes">
            <button className="like__button" onClick={changeState}><Like/></button>
            <p>{currentLikes}</p>
        </div>
    )
}

export default Likes;