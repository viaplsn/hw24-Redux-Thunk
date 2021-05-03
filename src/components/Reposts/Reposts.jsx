import React, { useEffect, useState } from 'react';
import {ReactComponent as Repost} from '../../assets/images/repost.svg';

const Reposts = (props) => {
    const {reposts} = props;
    const [currentReposts, setReposts] = useState(reposts);
    const [currentState, setState] = useState(false);
    useEffect(() => {
        if(currentState === false) {
            setReposts(reposts);
        } else {
            setReposts(reposts + 1)
        }
    }, [currentState, reposts])
    const changeState = () => {
        setState(!currentState)
    }
    return(
        <div className="reposts">
            <button className="repost__button" onClick={changeState}><Repost/></button>
            <p>{currentReposts}</p>
        </div>
    )
}

export default Reposts;