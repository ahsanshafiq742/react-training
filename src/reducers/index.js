import {combineReducers} from "redux";
import UserLogin from "./reducer_login";
import FetchEmployees from "./reducer_fetch_employees"
import UserRegistration from "./reducer_user_registration"

const rootReducer = combineReducers({
    loginStatus: UserLogin,
    SystemEmployees: FetchEmployees,
    RegistrationStatus: UserRegistration
});

export default rootReducer;
