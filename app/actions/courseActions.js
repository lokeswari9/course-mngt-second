import * as actionTypes from './actionTypes';


export const addToCart = (item) => {
    return {
        type: actionTypes.LOGIN_USER,
        item
    }
}