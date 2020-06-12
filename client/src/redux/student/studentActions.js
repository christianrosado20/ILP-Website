import {
    CREATE_STUDENT_REQUEST,
    CREATE_STUDENT_SUCCESS,
    CREATE_STUDENT_FAILURE
} from './studentTypes';

// Student Actions
export const createStudentRequest = () => {
    return {
        type: CREATE_STUDENT_REQUEST
    }
}

export const createStudentSuccess = student => {
    return {
        type: CREATE_STUDENT_SUCCESS,
        payload: student
    }
}

export const createStudentFailure = error => {
    return {
        type: CREATE_STUDENT_FAILURE,
        payload: error
    }
}

export const createStudent = student => {
    return dispatch => {
        dispatch(createStudentRequest());
        alert(`${student.firstName} created successfully his account!`);
        dispatch(createStudentSuccess(student));
    }
}