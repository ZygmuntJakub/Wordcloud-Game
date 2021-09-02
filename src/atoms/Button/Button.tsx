import styled from "styled-components";

const Button = styled.button`
    margin: 0.5rem 0;
    width: fit-content;
    padding: 0.5rem 2rem;
    background: none;
    border: 1px solid coral;
    border-radius: 0.5rem;
    color: coral;

    transition: all 0.5s;

    cursor: pointer;

    &:disabled {
        color: gray !important;
        border-color: gray;
        background: none !important;

        cursor: not-allowed;
    }

    &:hover {
        background: coral;
        color: white;
    }
`;

export default Button;
