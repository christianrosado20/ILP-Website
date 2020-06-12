import { combineReducers } from 'redux';
import messageReducer from './message/messageReducer';
import studentReducer from './student/studentReducer';
import facultyReducer from './faculty/facultyReducer';

const rootReducer = combineReducers({
    message: messageReducer,
    student: studentReducer,
    faculty: facultyReducer
});

export default rootReducer;
