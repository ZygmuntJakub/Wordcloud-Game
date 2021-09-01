import styled from "styled-components";

interface ContainerProps {
    randomMoveX: number;
    randomMoveY: number;
}
export const Container = styled.div<ContainerProps>`
    position: relative;
    transform: translate(
        ${({ randomMoveX, randomMoveY }) =>
            `${randomMoveX}rem, ${randomMoveY}rem`}
    );
`;

interface AnswerLabelProps {
    correct?: boolean | undefined;
}

export const AnswerLabel = styled.div<AnswerLabelProps>`
    color: ${({ correct }) => (correct ? "green" : "red")};
    position: absolute;
    width: 100%;
    text-align: center;
    transform: translateY(0.5rem);
`;

interface StyledWordProps {
    checked?: boolean;
    correct?: boolean | undefined;
    disabled?: boolean;
}

export const StyledWord = styled.div<StyledWordProps>`
    background-color: ${({ checked, correct }) => {
        if (typeof correct === "undefined") {
            return checked ? "coral" : "lightslategray";
        }
        return correct ? "green" : "red";
    }};

    color: white;
    flex: 1 auto;
    padding: 0.5rem 2rem;
    margin: 2.5rem;
    text-align: center;
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    border-radius: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

    transition: background-color 0.5s;

    &:hover {
        background-color: ${({ disabled }) => !disabled && "coral"};
    }
`;
