import { Dispatch } from "redux";
import { AUTH_SIGNUP, AUTH_SIGNIN } from "./constants";
import * as api from "../../../api";
import { AuthDTO } from "../../types";

const signUp = (authData: AuthDTO) => async (dispatch: Dispatch) => {
    dispatch(AUTH_SIGNUP.pending);

    const { error } = await api.signUp(authData);

    const finalAction = error ? AUTH_SIGNUP.rejected(error) : AUTH_SIGNUP.fulfilled;

    dispatch(finalAction);
};

const signIn = (authData: AuthDTO) => async (dispatch: Dispatch) => {
    dispatch(AUTH_SIGNIN.pending);

    const { data, error } = await api.signIn(authData);

    const finalAction = error ? AUTH_SIGNIN.rejected(error) : AUTH_SIGNIN.fulfilled(data);

    dispatch(finalAction);
};

export { signIn, signUp };
