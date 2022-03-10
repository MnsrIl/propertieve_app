import React from 'react';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Navigation } from "./navigation";

const Main = () => {
    return (
        <SafeAreaProvider>
            <Navigation />
            <StatusBar hidden />
        </SafeAreaProvider>
    );
};

export default Main;
