import React, { useEffect, useState } from 'react';
import {ReactComponent as Comment} from '../../assets/images/comment.svg';

const Comments = (props) => {
    const {comments} = props;
    const [currentComments, setComments] = useState(comments);
    const [currentState, setState] = useState(false);
    useEffect(() => {
        if(currentState === false) {
            setComments(comments);
        } else {
            setComments(comments + 1)
        }
    }, [currentState, comments])
    const changeState = () => {
        setState(!currentState)
    }
    return(
        <div className="comments">
            <button className="comment__button" onClick={changeState}><Comment /></button>
            <p>{currentComments}</p>
        </div>
    )
}

export default Comments;