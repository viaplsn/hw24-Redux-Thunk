import GET_USERS from "../actions/GET_USERS.js";

const getUsers = () => async (dispatch) => {
    try {
        const response = await fetch('http://domer.tech:9999/users/');
        const data = await response.json();
        dispatch({
            type: GET_USERS,
            payload: data.data
        })
    } catch(error) {
        console.log('Возникла проблема с вашим fetch запросом:', error.message)
    }
};

export default getUsers;