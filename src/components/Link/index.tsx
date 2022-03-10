import React from 'react';
import styled from "styled-components/native";
import {TouchableOpacityProps} from "react-native";

const LinkButton = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
`

const LinkTitle = styled.Text`
  color: #5a84d0;
  text-decoration-line: underline;
`

interface LinkProps {
    title?: string | null
    children?: string | null
}

const Link = ({ title = null, children, ...props }: LinkProps & TouchableOpacityProps) => {
    return (
        <LinkButton {...props}>
            <LinkTitle>{children}</LinkTitle>
        </LinkButton>
    );
};

export { Link };
