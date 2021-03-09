import { combineReducers } from "redux";
import auth_reducer from './aut-red';
import app_reducer from './app-red';
export default combineReducers({
    auth : auth_reducer,
    app: app_reducer
})