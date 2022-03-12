import { store } from "./configureStore";
import { Property } from "../../types";

type AppDispatch = typeof store.dispatch;

type RootState = ReturnType<typeof store.getState>;

interface PropertiesState {
    data: Property[];
    error: string | null;
    loading: boolean;
}

interface AuthState {
    token: string;
    error: string | null;
    loading: boolean;
}

interface AuthDTO {
    email: string;
    password: string;
}

export { AppDispatch, RootState, PropertiesState, AuthState, AuthDTO };
