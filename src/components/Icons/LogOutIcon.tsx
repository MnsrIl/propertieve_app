import React from 'react';
import { Image, TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";

const Icon = styled.TouchableOpacity`
  margin-right: 10px;
`;

const LogOutIcon = (props: TouchableOpacityProps) => {

    return (
        <Icon {...props}>
            <Image
                style={{ width: 23, height: 23, tintColor: "#131d3f" }}
                source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/OOjs_UI_icon_logOut-ltr.svg/2048px-OOjs_UI_icon_logOut-ltr.svg.png"}}
            />
        </Icon>
    );
};

export { LogOutIcon };
