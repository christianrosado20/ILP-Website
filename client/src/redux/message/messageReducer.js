import { SEND_MESSAGE_REQUEST,
         SEND_MESSAGE_SUCCESS,
         SEND_MESSAGE_FAILURE
} from './messageTypes';

const initialState = {
    loading: false,
    message: '',
    error: ''
}

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE_REQUEST:
            return {
                ...state,
                loading: true
            }
        
        case SEND_MESSAGE_SUCCESS: 
            return {
                ...state,
                loading: false,
                message: action.payload
            }

        case SEND_MESSAGE_FAILURE:
            return {
                loading: false,
                message: '',
                error: action.payload
            }

        default: return state;
    }
}

export default messageReducer;