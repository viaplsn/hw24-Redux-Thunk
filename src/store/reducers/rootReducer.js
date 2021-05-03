import initialState from "../initialState";
import GET_USERS from "../actions/GET_USERS.js";
import CREATE_USER from "../actions/CREATE_USER.js"
import GET_TWEETS from "../actions/GET_TWEETS.js"
import CREATE_TWEET from "../actions/CREATE_TWEET.js"

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload
            };
        case GET_TWEETS:
            return {
                ...state,
                tweets: action.payload
            };
        case CREATE_USER:
            return {
                ...state,
                newUser: action.payload
            };
        case CREATE_TWEET:
            return {
                ...state,
                newTweet: action.payload
            };
        default: 
            return state;
    };
};

export default reducer;