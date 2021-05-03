import CREATE_USER from "../actions/CREATE_USER.js";

const createUser = (user) => async (dispatch) => {
    try {
        const requestOptions = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        };
        const response = await fetch('http://domer.tech:9999/users/', requestOptions);
        const data = await response.json();
        dispatch({
            type: CREATE_USER,
            payload: data
        })
    } catch(error) {
        console.log(error)
    }
};

export default createUser;