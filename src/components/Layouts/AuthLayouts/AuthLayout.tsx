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
    actionButtonDisabled?: boolean;
    onPressAction?: (event: GestureResponderEvent) => void;
}

const AuthLayout = ({
    title,
    groupItems,
    ActionButton,
    actionButtonTitle,
    actionButtonDisabled = false,
    onPressAction,
    additionalCaption
}: AuthLayout) => {

    const LayoutStyle = { paddingBottom: StatusBar.currentHeight };
    const TitleStyle = { paddingTop: 60, marginBottom: -50 };

    return (
        <Layout style={LayoutStyle}>
            <Title style={TitleStyle}>{title}</Title>
            <Group>
                {groupItems}
                {additionalCaption}
            </Group>
            {ActionButton ? ActionButton :
                <Button
                    disabled={actionButtonDisabled}
                    title={actionButtonTitle || ""}
                    onPress={onPressAction}
                />
            }
        </Layout>
    );
};

export { AuthLayout };
