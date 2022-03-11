import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { RoutesDrawer } from "./configuration";
import { Layout } from "../components/Layouts/DefaultLayout";

const Navigation = () => {
    const renderFallback = () => (
        <Layout>
            <Text>Loading...</Text>
        </Layout>
    );

    return (
        <NavigationContainer fallback={renderFallback()}>
            <RoutesDrawer />
        </NavigationContainer>
    );
};

export { Navigation };
