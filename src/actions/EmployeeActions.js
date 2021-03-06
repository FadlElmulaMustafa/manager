import firebase from 'firebase';
import { 
    SHIFT_TEXT_CHANGE,
    NAME_TEXT_CHANGE,
    PHONE_TEXT_CHANGE,
    CREATE_USER_EMPLOYEE,
    EMPLOYEE_FETCH_SUCCESS,
    EMPLOYEE_SAVE_SUCCESS
} from "./types";
import { ActionConst, Actions } from 'react-native-router-flux';

export const emptyState = () => {
    return {
        type : EMPLOYEE_SAVE_SUCCESS
    }
}
export const onNameTextChanged = (text) => {
    return {
        type: NAME_TEXT_CHANGE,
        payload: text
    };
}

export const onPhoneTextChanged = (text) => {
    return {
        type: PHONE_TEXT_CHANGE,
        payload: text
    };
}
export const onShiftPickerChanged = (text) => {
    return {
        type: SHIFT_TEXT_CHANGE,
        payload: text
    }
}

export const createUserEmployee = ({ name, phone, shift }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${ currentUser.uid }/employees`)
        .push({ name, phone, shift })
        .then(() => {
            dispatch({ type: CREATE_USER_EMPLOYEE});
            Actions.employeeList({ type: ActionConst.RESET });
        });
    }
}

export const employeeFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .on('value', snapshot => {
            dispatch({ type: EMPLOYEE_FETCH_SUCCESS, payload: snapshot.val() });
        });
    }
}

export const employeeSave = ({ name, phone, shift, uid }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
        .set({ name, phone, shift })
        .then(()=> {
            dispatch({type: EMPLOYEE_SAVE_SUCCESS});
            Actions.employeeList({ type: ActionConst.RESET});
        });
    }
}

export const employeeDelete = ({ uid }) => {
    const { currentUser } = firebase.auth();
    return () => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
        .remove()
        .then(() => {
            Actions.employeeList({ type: ActionConst.RESET});
        });
    }
    
}