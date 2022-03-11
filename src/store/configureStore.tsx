import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { propertiesReducer } from "./features/properties/reducer";

const store = createStore(propertiesReducer, applyMiddleware(thunk));

export { store };
