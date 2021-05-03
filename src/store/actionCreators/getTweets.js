import GET_TWEETS from "../actions/GET_TWEETS.js";

const getTweets = () => async (dispatch) => {
    try {
        const response = await fetch('http://domer.tech:9999/tweets/');
        const data = await response.json();
        dispatch({
            type: GET_TWEETS,
            payload: data.data
        })
    } catch(error) {
        console.log(error)
    }
};

export default getTweets;