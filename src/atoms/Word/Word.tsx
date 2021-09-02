import React from "react";
import useWord from "hooks/useWord";
import { StyledWord, Container, AnswerLabel } from "./styled";

interface PropsTypes {
    index: number;
}

const Word = ({ index }: PropsTypes) => {
    const [
        value,
        checked,
        correct,
        gameChecked,
        handleClick,
        randomMoveX,
        randomMoveY,
    ] = useWord(index);

    const isAnswer = typeof correct !== "undefined";

    const answerText = () => {
        if (isAnswer) {
            return correct ? "Good" : "Bad";
        }
        return "";
    };

    return (
        <Container randomMoveX={randomMoveX} randomMoveY={randomMoveY}>
            <AnswerLabel data-testid="answer-label" correct={correct}>
                {answerText()}
            </AnswerLabel>
            <StyledWord
                checked={checked}
                correct={correct}
                onClick={handleClick}
                disabled={gameChecked}
            >
                {value}
            </StyledWord>
        </Container>
    );
};

export default Word;
