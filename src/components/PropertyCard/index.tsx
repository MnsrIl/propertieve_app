import React from 'react';
import { ViewProps } from "react-native";
import styled from "styled-components/native";

const StyledBlock = styled.View`
  width: 48%;
  margin: 1%;
  padding: 26% 0;
  background: cornflowerblue;
`;

const PropertyCard = ({ ...props }: ViewProps) => {
    return (
        <StyledBlock />
    );
};

export { PropertyCard };
