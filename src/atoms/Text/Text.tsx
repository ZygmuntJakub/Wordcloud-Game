import styled from "styled-components";

interface TextProps {
    secondary?: boolean;
    margin?: string;
}

const Text = styled.h1<TextProps>`
    color: ${({ secondary }) => secondary && "blue"};
    margin: ${({ margin }) => margin};
`;

export default Text;
