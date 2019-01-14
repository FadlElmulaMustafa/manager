import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeReducer from './EmpolyeeReducer';
import EmployeeListReducer from './EmployeeListReducer';

const reducers = combineReducers({
    auth: AuthReducer,
    emp: EmployeeReducer,
    empList: EmployeeListReducer
});

export default reducers;