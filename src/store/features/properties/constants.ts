import { AnyAction } from "redux";
import { Property } from "../../../navigation/pages/Properties";

export const FETCH_PROPERTIES_TYPES = {
    pending: "properties/fetchProperties/pending",
    rejected: "properties/fetchProperties/rejected",
    fulfilled: "properties/fetchProperties/fulfilled",
};

export const FETCH_PROPERTIES = {
    pending: { type: FETCH_PROPERTIES_TYPES.pending },
    rejected: (error: string): AnyAction => ({
        type: FETCH_PROPERTIES_TYPES.rejected,
        payload: { error },
    }),
    fulfilled: (data: Property[]): AnyAction => ({
        type: FETCH_PROPERTIES_TYPES.fulfilled,
        payload: { data },
    }),
};
