import { FETCH_PROPERTIES } from "./constants";
import * as api from "../../../api";
import { Dispatch } from "redux";
import { RootState } from "../../types";

const fetchProperties = () => async (dispatch: Dispatch, getState: () => RootState) => {
    dispatch(FETCH_PROPERTIES.pending);

    const state = getState();

    const { data, error } = await api.fetchProperties(state.auth.token);

    const finalAction = error ? FETCH_PROPERTIES.rejected(error) : FETCH_PROPERTIES.fulfilled(data);

    dispatch(finalAction);
};

export { fetchProperties };
