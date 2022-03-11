import React from "react";
import { DrawerRoute } from "../../types";
import { Properties, SignIn, SignUp } from "./pages";
import { LogOutIcon } from "../components/Icons/LogOutIcon";

const routes: DrawerRoute[] = [
    {
        name: "SignIn",
        component: SignIn,
        access: "out",
        options: {
            drawerLabel: "Sign In",
            headerShown: false,
        },
    },
    {
        name: "SignUp",
        component: SignUp,
        access: "out",
        options: {
            drawerLabel: "Sign Up",
            headerShown: false,
        },
    },
    {
        name: "Properties",
        component: Properties,
        access: "in",
        options: {
            headerRight: () => <LogOutIcon />,
            headerLeft: () => null,
            drawerLabel: "Properties",
            swipeEnabled: false,
        },
    },
];

const filterRoutes = (token: string) => {
    return routes.filter(({ access }) => {
        if (access === "none") return true;

        return token ? access === "in" : access === "out";
    });
};

export { routes, filterRoutes };
