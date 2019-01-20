import { 
    NAME_TEXT_CHANGE, 
    PHONE_TEXT_CHANGE,
    SHIFT_TEXT_CHANGE, 
    CREATE_USER_EMPLOYEE,
    EMPLOYEE_SAVE_SUCCESS
} from '../actions/types';

INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
}
export default (state = INITIAL_STATE, action ) => {

    switch(action.type ){
        case NAME_TEXT_CHANGE:
            return {...state, name: action.payload}
        case PHONE_TEXT_CHANGE:
            return {...state, phone: action.payload}
        case SHIFT_TEXT_CHANGE:
            return {...state, shift: action.payload}
        case CREATE_USER_EMPLOYEE:
            return {...INITIAL_STATE}
        case EMPLOYEE_SAVE_SUCCESS:
            return INITIAL_STATE;
        default: return state;
    }

}