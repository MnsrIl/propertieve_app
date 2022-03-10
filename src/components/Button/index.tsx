import styled from "styled-components/native";
import { TouchableOpacityProps } from "react-native";
import React from "react";

const StyledButton = styled.TouchableOpacity`
  background: #3e87c2;
  border-radius: 10px;
  width: 100%;
  padding: 10px 20px;

  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledTitle = styled.Text`
  color: #fff;
  font-size: 17px;
`

interface ButtonProps {
    title: string
}

const Button = ({ title, children, ...restProps }: TouchableOpacityProps & ButtonProps) => {
    return (
      <StyledButton {...restProps}>
          <StyledTitle>{title}</StyledTitle>
      </StyledButton>
    );
}

export { Button }
