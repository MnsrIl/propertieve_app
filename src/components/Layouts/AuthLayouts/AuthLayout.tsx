import React from 'react';
import { GestureResponderEvent, StatusBar } from "react-native";
import { Layout } from "../DefaultLayout";
import { Group } from "../../Group";
import { Title } from "../../Title";
import { Button } from "../../Button";

interface AuthLayout {
    title: string;
    groupItems: React.ReactNode;
    additionalCaption?: React.ReactNode

    ActionButton?: React.ReactNode;
    actionButtonTitle?: string;
    onPressAction?: (event: GestureResponderEvent) => void;
}

const AuthLayout = ({
    title,
    groupItems,
    ActionButton,
    actionButtonTitle,
    onPressAction,
    additionalCaption
}: AuthLayout) => {

    const LayoutStyle = { paddingBottom: StatusBar.currentHeight };

    return (
        <Layout style={LayoutStyle}>
            <Title>{title}</Title>
            <Group>
                {groupItems}
                {additionalCaption}
            </Group>
            {ActionButton ? ActionButton : <Button title={actionButtonTitle || ""} onPress={onPressAction} /> }
        </Layout>
    );
};

export { AuthLayout };
