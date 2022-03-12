import { combineReducers } from "redux";
import { propertiesReducer } from "./properties";
import { authReducer } from "./auth";

const reducers = combineReducers({
    properties: propertiesReducer,
    auth: authReducer,
});

export { reducers };
