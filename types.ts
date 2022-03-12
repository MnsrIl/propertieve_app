import { DrawerNavigationOptions, DrawerScreenProps } from "@react-navigation/drawer";
import React from "react";

export type DrawerParamList = {
    SignIn: undefined;
    SignUp: undefined;
    Properties: undefined;
};

export interface DrawerRoute {
    options?: DrawerNavigationOptions;
    name: keyof DrawerParamList;
    component: React.ComponentType<any>;
    access: "in" | "out" | "none";
}

export type NavigationProps<T extends keyof DrawerParamList> = DrawerScreenProps<
    DrawerParamList,
    T
>;

export interface Property {
    _id: string;
    preview: string;
    title: string;
    description: string;
}
