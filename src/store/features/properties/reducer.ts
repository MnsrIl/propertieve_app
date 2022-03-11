import { AnyAction } from "redux";
import { FETCH_PROPERTIES_TYPES } from "./constants";
import { PropertiesState, RootState } from "../../types";

const initialState: PropertiesState = {
    data: [],
    error: null,
    loading: false,
};

const reducer = (state = initialState, action: AnyAction): PropertiesState => {
    switch (action.type) {
        case FETCH_PROPERTIES_TYPES.pending:
            return { ...state, loading: true };
        case FETCH_PROPERTIES_TYPES.rejected:
            return { ...state, error: action.payload.error, loading: false };
        case FETCH_PROPERTIES_TYPES.fulfilled:
            return { ...state, data: action.payload.data, loading: false };

        default:
            return state;
    }
};

const selectProperties = (state: RootState) => state.data;

export { reducer as propertiesReducer, selectProperties };
