export const AUTH_SIGNIN_TYPES = {
    pending: "auth/signin/pending",
    rejected: "auth/signin/rejected",
    fulfilled: "auth/signin/fulfilled",
};

export const AUTH_SIGNUP_TYPES = {
    pending: "auth/signup/pending",
    rejected: "auth/signup/rejected",
    fulfilled: "auth/signup/fulfilled",
};

export const AUTH_SET_TOKEN_TYPE = "auth/setToken";

export const AUTH_SET_TOKEN = (token: string) => ({
    type: AUTH_SET_TOKEN_TYPE,
    payload: { token },
});

export const AUTH_CLEAR_ERRORS = {
    type: "auth/clearErrors",
};

export const AUTH_SIGNOUT = {
    type: "auth/signout",
};

export const AUTH_SIGNIN = {
    pending: { type: AUTH_SIGNIN_TYPES.pending },
    rejected: (error: string) => ({ type: AUTH_SIGNIN_TYPES.rejected, payload: { error } }),
    fulfilled: (token: string) => ({ type: AUTH_SIGNIN_TYPES.fulfilled, payload: { token } }),
};

export const AUTH_SIGNUP = {
    pending: { type: AUTH_SIGNUP_TYPES.pending },
    rejected: (error: string) => ({ type: AUTH_SIGNUP_TYPES.rejected, payload: { error } }),
    fulfilled: { type: AUTH_SIGNUP_TYPES.fulfilled },
};
