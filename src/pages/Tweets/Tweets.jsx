import React, { useEffect } from 'react';
import Post from '../../components/Post/Post';
import './Tweets.css';
import { useDispatch } from 'react-redux';
import getTweets from '../../store/actionCreators/getTweets';
import { useSelector } from 'react-redux';

const Tweets = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  const tweets = useSelector(state => state.tweets);

  useEffect(() => {
    dispatch(getTweets());
}, [dispatch]);
    return (
      <main className="Tweets">
        <div className ="Tweets__feed">
        <h2 className="Tweets__header">Tweets</h2>
            {tweets.map((tweet, index) => {
            return <Post key={index} author={{
              name: users.find(user => user.id === tweet.userId).name,
              photo: users.find(user => user.id === tweet.userId).avatar,
              nickname: users.find(user => user.id === tweet.userId).username
              }}
              content={tweet.content}
              image={tweet.image}
              date={new Date().toLocaleString("ua", {month: 'long', day: 'numeric'})}
              activity = {{
                likes: Math.floor(Math.random() * (1000 - 100 + 1)) + 100,
                comments: Math.floor(Math.random() * (1000 - 100 + 1)) + 100,
                reposts: Math.floor(Math.random() * (1000 - 100 + 1)) + 100
              }}
            />
            })}
        </div>
      </main>
    )
};

export default Tweets;