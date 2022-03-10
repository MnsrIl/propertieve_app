import {DrawerNavigationOptions, DrawerScreenProps} from "@react-navigation/drawer";
import React from "react";

export type DrawerParamList = {
    Feed?: undefined
    Notifications?: undefined
    Profile?: undefined
    SignIn?: undefined
    SignUp?: undefined
    Properties?: undefined
}

export interface DrawerRoute {
    options?: DrawerNavigationOptions,
    name: keyof DrawerParamList,
    component: React.ComponentType<any>,
    access: "in"|"out"|"none"
}

export type NavigationProps<T extends keyof DrawerParamList> = DrawerScreenProps<DrawerParamList, T> & {
    onTokenSet: (newTokenValue: string) => void
}
