import * as actionTypes from '../actions/actionTypes';

const initialState = [];
export const userReducer = (state = initialState, action) => {
    console.log('In reducer')
    switch (action.type) {

        case actionTypes.LOGIN_USER:
            return action.lData;

        default:
            return state;
    }
}