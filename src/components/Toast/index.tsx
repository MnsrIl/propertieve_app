import React from "react";
import styled from "styled-components/native";

const StyledContainer = styled.View`
    width: 86%;
    padding: 10px 0;
    align-items: center;
    margin: -40px auto 0;
`;

const StyledTitle = styled.Text`
    color: crimson;
    font-size: 18px;
    text-align: center;
`;

export type ToastVariants = "error" | "success" | "common";

interface ToastProps {
    message?: string;
    show?: boolean;
    variant?: ToastVariants;
}

const Toast = ({ message, show = true, variant = "error" }: ToastProps) => {
    const colors = {
        error: "red",
        success: "green",
        common: "gray",
    };

    if (!show) {
        return null;
    }

    return (
        <StyledContainer>
            <StyledTitle style={{ color: colors[variant] }}>{message}</StyledTitle>
        </StyledContainer>
    );
};

export { Toast };
