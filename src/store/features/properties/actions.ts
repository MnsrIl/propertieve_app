import { FETCH_PROPERTIES } from "./constants";
import * as api from "../../../api";
import { Dispatch } from "redux";

const fetchProperties = (token: string) => async (dispatch: Dispatch) => {
    dispatch(FETCH_PROPERTIES.pending);

    const { data, error } = await api.fetchProperties(token);

    const finalAction = error ? FETCH_PROPERTIES.rejected(error) : FETCH_PROPERTIES.fulfilled(data);

    dispatch(finalAction);
};

export { fetchProperties };
