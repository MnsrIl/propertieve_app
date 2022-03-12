import { Dispatch } from "redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AUTH_SIGNUP, AUTH_SIGNIN } from "./constants";
import * as api from "../../../api";
import { AuthDTO } from "../../types";

const signUp = (authData: AuthDTO, navigateTo: () => void) => async (dispatch: Dispatch) => {
    dispatch(AUTH_SIGNUP.pending);

    const { error } = await api.signUp(authData);

    const finalAction = error ? AUTH_SIGNUP.rejected(error) : AUTH_SIGNUP.fulfilled;

    dispatch(finalAction);

    if (!error) {
        navigateTo();
    }
};

const signIn = (authData: AuthDTO) => async (dispatch: Dispatch) => {
    dispatch(AUTH_SIGNIN.pending);

    const { data, error } = await api.signIn(authData);

    const finalAction = error ? AUTH_SIGNIN.rejected(error) : AUTH_SIGNIN.fulfilled(data);

    dispatch(finalAction);

    if (data) {
        await AsyncStorage.setItem("token", data);
    }
};

export { signIn, signUp };
