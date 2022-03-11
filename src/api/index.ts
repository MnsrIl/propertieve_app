import {BASE_API} from "../utils/constants";

const signIn = async ({ password, email }: { password: string, email: string }) => {
    try {

    } catch (e) {
        console.error(e);
    }
}

const fetchProperties = async (token: string) => {
    try {
        const res = await fetch(BASE_API + "/properties", {
            headers: {
                Authorization: token
            }
        });

        const { data, error } = await res.json();

        return { data, error }
    } catch (e) {
        console.error(e);
        throw e;
    }
}
