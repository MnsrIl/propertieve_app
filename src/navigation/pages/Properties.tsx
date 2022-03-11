import React from "react";
import { FlatList } from "react-native";
import { useDispatch } from "react-redux";
import { Layout } from "../../components/Layouts/DefaultLayout";
import { LogOutIcon } from "../../components/Icons/LogOutIcon";
import { PropertyCard } from "../../components/PropertyCard";
import { NavigationProps } from "../../../types";
import { useTSelector } from "../../store/hooks";
import { fetchProperties, selectProperties } from "../../store/features/properties";

const horizontalPadding = { paddingRight: 0, paddingLeft: 0 };

export interface Property {
    _id: string;
    preview: string;
    title: string;
    description: string;
}

const Properties = ({ navigation, onTokenSet, token }: NavigationProps<"Properties">) => {
    const dispatch = useDispatch();
    const data = useTSelector(selectProperties);

    const handleClearToken = () => onTokenSet("");

    React.useEffect(() => {
        dispatch(fetchProperties(token));
    }, []);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <LogOutIcon onPress={handleClearToken} />,
        });
    });

    return (
        <Layout style={horizontalPadding}>
            <FlatList
                numColumns={2}
                data={data}
                renderItem={({ item }) => (
                    <PropertyCard
                        desc={item.description}
                        title={item.title}
                        imgSrc={item.preview}
                    />
                )}
                keyExtractor={({ _id }) => _id}
            />
        </Layout>
    );
};

export { Properties };
