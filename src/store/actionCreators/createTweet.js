import CREATE_TWEET from "../actions/CREATE_TWEET.js";

const createTweet = (tweet) => async (dispatch) => {
    try {
        const requestOptions = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tweet)
        };
        const response = await fetch('http://domer.tech:9999/tweets/', requestOptions);
        const data = await response.json();
        dispatch({
            type: CREATE_TWEET,
            payload: data
        })
    } catch(error) {
        console.log(error)
    }
};

export default createTweet;