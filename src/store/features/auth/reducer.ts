import { AnyAction } from "redux";
import { AuthState, RootState } from "../../types";
import { AUTH_SIGNIN_TYPES, AUTH_SIGNUP_TYPES, AUTH_SIGNOUT, AUTH_CLEAR_ERRORS } from "./constants";

const initialState: AuthState = {
    token: "",
    error: null,
    loading: false,
};

const reducer = (state = initialState, action: AnyAction): AuthState => {
    switch (action.type) {
        case AUTH_CLEAR_ERRORS.type:
            return { ...state, error: null };
        case AUTH_SIGNOUT.type:
            return { ...state, token: "" };

        case AUTH_SIGNIN_TYPES.pending:
            return { ...state, loading: true, error: null };
        case AUTH_SIGNIN_TYPES.rejected:
            return { ...state, error: action.payload.error, loading: false };
        case AUTH_SIGNIN_TYPES.fulfilled:
            return { ...state, token: action.payload.token, loading: false };

        case AUTH_SIGNUP_TYPES.pending:
            return { ...state, loading: true, error: null };
        case AUTH_SIGNUP_TYPES.rejected:
            return { ...state, error: action.payload.error, loading: false };
        case AUTH_SIGNUP_TYPES.fulfilled:
            return { ...state, loading: false };

        default:
            return state;
    }
};

const selectToken = (state: RootState): string => state.auth.token;

const selectAuthActionInfo = (state: RootState) => ({
    error: state.auth.error,
    loading: state.auth.loading,
});

export { reducer as authReducer, selectAuthActionInfo, selectToken };
