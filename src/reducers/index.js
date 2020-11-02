import {combineReducers} from 'redux';
import notesReducer from './notesReducer';

const rootreducer = combineReducers({
    notes: notesReducer
});

export default rootreducer;