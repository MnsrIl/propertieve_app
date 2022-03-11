import React from 'react';
import { FlatList } from "react-native";
import { Layout } from "../../components/Layouts/DefaultLayout";
import { LogOutIcon } from "../../components/Icons/LogOutIcon";
import { PropertyCard } from "../../components/PropertyCard";
import { NavigationProps } from "../../../types";
import { fetchProperties } from "../../api";

const horizontalPadding = { paddingRight: 0, paddingLeft: 0 };

export interface Property {
    _id: string;
    preview: string;
    title: string;
    description: string;
}

const Properties = ({ navigation, onTokenSet, token }: NavigationProps<"Properties">) => {
    const [properties, setProperties] = React.useState<Property[]>([]);

    const handleClearToken = () => onTokenSet("");

    const handleLoadProperties = () => {
        fetchProperties(token).then(({ data, error }) => {
            if (data) setProperties(data);
        });
    };

    React.useEffect(() => {
        handleLoadProperties()
    }, []);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <LogOutIcon onPress={handleClearToken} />
        });
    });

    return (
        <Layout style={horizontalPadding}>
            <FlatList
                numColumns={2}
                data={properties}
                renderItem={({ item }) =>
                    <PropertyCard
                        desc={item.description}
                        title={item.title}
                        imgSrc={item.preview}
                    />
            }
                keyExtractor={({ _id }) => _id}
            />
        </Layout>
    );
};

export { Properties };
