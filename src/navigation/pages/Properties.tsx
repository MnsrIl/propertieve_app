import React from "react";
import { FlatList } from "react-native";
import { useDispatch } from "react-redux";
import { Layout } from "../../components/Layouts/DefaultLayout";
import { PropertyCard } from "../../components/PropertyCard";
import { useTSelector } from "../../store/hooks";
import { fetchProperties, selectProperties } from "../../store/features/properties";

const horizontalPadding = { paddingRight: 0, paddingLeft: 0 };

const Properties = () => {
    const dispatch = useDispatch();
    const data = useTSelector(selectProperties);

    React.useEffect(() => {
        dispatch(fetchProperties());
    }, []);

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
