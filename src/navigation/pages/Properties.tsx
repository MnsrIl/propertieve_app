import React from 'react';
import { FlatList } from "react-native";
import { Layout } from "../../components/Layouts/DefaultLayout";
import { LogOutIcon } from "../../components/Icons/LogOutIcon";
import { PropertyCard } from "../../components/PropertyCard";
import { NavigationProps } from "../../../types";

const horizontalPadding = { paddingRight: 0, paddingLeft: 0 };

const Properties = ({ navigation, onTokenSet }: NavigationProps<"Properties">) => {

    const handleClearToken = () => onTokenSet("");

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <LogOutIcon onPress={handleClearToken} />
        })
    });

    return (
        <Layout style={horizontalPadding}>
            <FlatList
                numColumns={2}
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                renderItem={() => <PropertyCard />}
                keyExtractor={(item) => String(item)}
            />
        </Layout>
    );
};

export { Properties };
