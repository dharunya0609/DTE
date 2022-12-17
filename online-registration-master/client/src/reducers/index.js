import { combineReducers } from "redux";
import authReducer from "./auth";
import currentUserReducer from "./currentUser";
import courseReducer from "./course";
import detailsReducer from "./myDetails";
export default combineReducers({
    authReducer,
    currentUserReducer,
    courseReducer,
    detailsReducer
})

