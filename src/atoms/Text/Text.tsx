import styled from "styled-components";

interface TextProps {
    secondary?: boolean;
    margin?: string;
}

const Text = styled.h1<TextProps>`
    color: ${({ secondary }) => secondary && "coral"};
    margin: ${({ margin }) => margin};
`;

export default Text;
