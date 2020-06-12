import {
    CREATE_STUDENT_REQUEST,
    CREATE_STUDENT_SUCCESS,
    CREATE_STUDENT_FAILURE
} from './studentTypes';

const initialState = {
    loading: false,
    student: '',
    error: ''
}

const studentReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_STUDENT_REQUEST:
            return {
                ...state,
                loading: true
            }

        case CREATE_STUDENT_SUCCESS:
            return {
                loading: false,
                student: action.payload,
                error: ''
            }
        
        case CREATE_STUDENT_FAILURE:
            return {
                loading: false,
                student: '',
                error: action.payload
            }
        
        default: return state;
    }
}

export default studentReducer;