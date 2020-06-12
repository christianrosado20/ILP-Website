import {
    CREATE_FACULTY_REQUEST,
    CREATE_FACULTY_SUCCESS,
    CREATE_FACULTY_FAILURE
} from './facultyTypes';

const initialState = {
    loading: false,
    faculty: '',
    error: ''
}

const facultyReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_FACULTY_REQUEST:
            return {
                ...state,
                loading: true
            }

        case CREATE_FACULTY_SUCCESS:
            return {
                loading: false,
                faculty: action.payload,
                error: ''
            }
        
        case CREATE_FACULTY_FAILURE:
            return {
                loading: false,
                faculty: '',
                error: action.payload
            }
        
        default: return state;
    }
}

export default facultyReducer;