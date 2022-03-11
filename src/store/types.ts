import { store } from "./configureStore";
import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import { Property } from "../navigation/pages/Properties";

type AppDispatch = typeof store.dispatch;

type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>;

type RootState = ReturnType<typeof store.getState>;

interface PropertiesState {
    data: Property[];
    error: string | null;
    loading: boolean;
}

export { AppDispatch, AppThunk, RootState, PropertiesState };
