import * as actionTypes from './actionTypes';
import axios from 'axios';

// export const registerUser = (rData) => {
//     return {
//         type: actionTypes.REGISTER_USER,
//         rData

//     }
// }
export const loginSuccess = (lData) => {
    return {
        type: actionTypes.LOGIN_USER,
        lData
    }
}

export const loginUser = (lData) => {
    return function (dispatch) {
        //make a call to api, and get response
        //dispatch the response
        axios.post('http://localhost:3001/users/rest/login', lData).then(function (response) {
            console.log(response);
            dispatch(loginSuccess(response.data));
        }).catch(function (error) {
            console.log(error);
        });
    }
}
