import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER } from './types';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

const  emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    }
}

const  passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
}


const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });

        firebase.auth().signInWithEmailAndPassword(email, password)
         .then(user => handleSuccess(dispatch, user))
         .catch((error) => {
             console.log(error);

            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(user => handleSuccess(dispatch, user))
                .catch(() => handleFailed(dispatch ));
         }); 
    };
}

const handleSuccess = (dispatch, user ) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user 
   });

     Actions.main(); //the correct statement position
}

const handleFailed = (dispatch) => {
    dispatch({
        type: LOGIN_USER_FAIL
   });

  //Actions.main(); // just for testing
}

export { emailChanged, passwordChanged, loginUser };
