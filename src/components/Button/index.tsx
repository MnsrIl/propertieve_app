import React from "react";
import { TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";

const StyledButton = styled.TouchableOpacity`
  background: ${props => props.disabled ? "gray" : "#3e87c2"};
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
