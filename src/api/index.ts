import { BASE_API } from "../utils/constants";
import { AuthDTO } from "../store/types";

const fetchProperties = async (token: string) => {
    try {
        const res = await fetch(BASE_API + "/properties", {
            headers: {
                Authorization: token,
            },
        });

        const { data, error } = await res.json();

        return { data, error };
    } catch (e) {
        console.error(e);
        throw e;
    }
};

const signIn = async ({ email, password }: AuthDTO) => {
    try {
        const res = await fetch(BASE_API + "/users/sign-in", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const { data, error } = await res.json();

        return { data, error };
    } catch (e) {
        console.error(e);
        throw e;
    }
};

const signUp = async ({ email, password }: AuthDTO) => {
    try {
        const res = await fetch(BASE_API + "/users/sign-up", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const { data, error } = await res.json();

        return { data, error };
    } catch (e) {
        console.error(e);
        throw e;
    }
};

export { fetchProperties, signIn, signUp };
