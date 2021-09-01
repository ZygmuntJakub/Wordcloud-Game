import styled from "styled-components";

interface TextProps {
    secondary?: boolean;
}

const Text = styled.h1<TextProps>`
    color: ${({ secondary }) => secondary && "blue"};
`;

export default Text;
