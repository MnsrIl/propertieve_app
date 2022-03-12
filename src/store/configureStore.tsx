import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { reducers } from "./features";
import { composeWithDevToolsDevelopmentOnly } from "@redux-devtools/extension";

const store = createStore(reducers, composeWithDevToolsDevelopmentOnly(applyMiddleware(thunk)));

export { store };
