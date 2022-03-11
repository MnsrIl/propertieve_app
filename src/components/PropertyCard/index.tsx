import React from "react";
import { Image, ViewProps } from "react-native";
import styled from "styled-components/native";

interface PropertyCard {
    title?: string;
    imgSrc: string;
    desc?: string;
}

const PropertyCard = ({ title, imgSrc, desc = "", ...props }: ViewProps & PropertyCard) => {
    const imageStyle = { width: "100%", height: "100%" };

    const shortedDesc = desc.length > 30 ? desc?.slice(0, 40) + "..." : desc;

    return (
        <Container {...props}>
            <Title>{title}</Title>
            <ImageHolder>
                <Image resizeMode="cover" style={imageStyle} source={{ uri: imgSrc }} />
            </ImageHolder>
            <Description>{shortedDesc}</Description>
        </Container>
    );
};

const Container = styled.TouchableOpacity`
    min-width: 48%;
    max-width: 48%;
    min-height: 144px;
    margin: 1%;
    display: flex;
    justify-content: space-between;
    padding: 0 2%;
`;

const ImageHolder = styled.View`
    flex: 8;
    background: cornflowerblue;
    margin-bottom: 4px;
`;

const Title = styled.Text`
    flex: 1;
    font-size: 18px;
    text-align: center;
    padding-top: 5%;
    color: #369bc0;
`;

const Description = styled.Text`
    flex: 1;
    font-size: 13px;
    color: #356;
`;

export { PropertyCard };
