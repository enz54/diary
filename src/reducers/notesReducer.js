import {GET_NOTES} from '../actionTypes';

export default (state={}, action) => {
    switch (action.type) {
        case 'GET_NOTES': 
            return action.payload;
        default:
            return action;
    }}