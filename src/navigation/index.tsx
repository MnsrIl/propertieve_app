import React from "react";
import { Text } from "react-native";
import { useDispatch } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { RoutesDrawer } from "./configuration";
import { Layout } from "../components/Layouts/DefaultLayout";
import { AUTH_SET_TOKEN } from "../store/features/auth";

const Navigation = () => {
    const [loading, setLoading] = React.useState(true);
    const dispatch = useDispatch();

    const renderFallback = () => (
        <Layout>
            <Text>Loading...</Text>
        </Layout>
    );

    React.useEffect(() => {
        AsyncStorage.getItem("token").then((token) => {
            if (token) {
                dispatch(AUTH_SET_TOKEN(token));
            }
            setLoading(false);
        });
    }, []);

    return (
        <NavigationContainer fallback={renderFallback()}>
            {loading ? renderFallback() : <RoutesDrawer />}
        </NavigationContainer>
    );
};

export { Navigation };
