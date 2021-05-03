import React from 'react';
import {ReactComponent as VeridiedLogo} from '../../assets/images/verified-icon.svg';
import {ReactComponent as NavigateArrow} from '../../assets/images/navigate-arrow.svg';
import Likes from '../Likes/Likes';
import Comments from '../Comments/Comments';
import Reposts from '../Reposts/Reposts'
import {ReactComponent as Share} from '../../assets/images/share.svg';
import './Post.css';

const Post = ({author, content, image, date, activity}) => {
    return(
        <div className="Post">
            <div className="Post__profilePicture">
                <div className="profilePicture__container" style={{backgroundImage: `url(${author.photo})`}}>
                </div>
            </div>
            <div className="Post__container">
                <div className="Post__container__header">
                    <h3 className="Post__container__header__name">{author.name}</h3>
                    <VeridiedLogo/>
                    <p className="Post__container__header__text">{author.nickname}</p>
                    <p className="Post__container__header__text">&#8231;</p>
                    <p className="Post__container__header__text">{date}</p>
                    <NavigateArrow/>
                </div>
                <p className="Post__container__content">{content}</p>
                <div className="Post__container__image">
                    <img src={image} alt="Feed post img" className="Post__container__image__img"/>
                </div>
                <div className="Post__activity">
                    <Likes likes={activity.likes}/>
                    <Comments comments={activity.comments}/>
                    <Reposts reposts={activity.reposts}/>
                    <Share/>
                </div>
            </div>
        </div>
    )
}

export default Post;