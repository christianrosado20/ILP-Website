import axios from 'axios';
import { SEND_MESSAGE_REQUEST,
    SEND_MESSAGE_SUCCESS,
    SEND_MESSAGE_FAILURE
} from './messageTypes';

// Message Actions
export const sendMessageRequest = () => {
    return {
        type: SEND_MESSAGE_REQUEST
    }
}

export const sendMessageSuccess = message => {
    return {
        type: SEND_MESSAGE_SUCCESS,
        payload: message
    }
}

export const sendMessageFailure = error => {
    return {
        type: SEND_MESSAGE_FAILURE,
        payload: error
    }
}

export const sendMessage = message => {
    return dispatch => {
        dispatch(sendMessageRequest());
        alert("Message Successfully sent!");
        dispatch(sendMessageSuccess(message));
    }
}