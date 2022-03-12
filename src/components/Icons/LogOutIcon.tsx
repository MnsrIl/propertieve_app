import React from "react";
import { GestureResponderEvent, Image, TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";
import { useDispatch } from "react-redux";
import { AUTH_SIGNOUT } from "../../store/features/auth";

const Icon = styled.TouchableOpacity`
    margin-right: 10px;
`;

const LogOutIcon = ({ onPress, ...props }: TouchableOpacityProps) => {
    const dispatch = useDispatch();

    const handlePress = (event: GestureResponderEvent) => {
        onPress?.(event);
        dispatch(AUTH_SIGNOUT);
    };

    return (
        <Icon onPress={handlePress} {...props}>
            <Image
                style={{ width: 23, height: 23, tintColor: "#131d3f" }}
                source={{
                    uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/OOjs_UI_icon_logOut-ltr.svg/2048px-OOjs_UI_icon_logOut-ltr.svg.png",
                }}
            />
        </Icon>
    );
};

export { LogOutIcon };
