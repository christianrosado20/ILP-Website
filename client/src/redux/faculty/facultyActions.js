import {
    CREATE_FACULTY_REQUEST,
    CREATE_FACULTY_SUCCESS,
    CREATE_FACULTY_FAILURE
} from './facultyTypes';

// Student Actions
export const createFacultyRequest = () => {
    return {
        type: CREATE_FACULTY_REQUEST
    }
}

export const createFacultySuccess = faculty => {
    return {
        type: CREATE_FACULTY_SUCCESS,
        payload: faculty
    }
}

export const createFacultyFailure = error => {
    return {
        type: CREATE_FACULTY_FAILURE,
        payload: error
    }
}

export const createFaculty = faculty => {
    return dispatch => {
        dispatch(createFacultyRequest());
        alert(`${faculty.firstName} created successfully his account!`);
        dispatch(createFacultySuccess(faculty));
    }
}