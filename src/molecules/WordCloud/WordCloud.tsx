import React from "react";
import { useAppSelector } from "utils/store";
import Word from "atoms/Word";
import { Container } from "./styled";

const WordCloud = () => {
    const words = useAppSelector(
        ({ game }) => game?.game?.question?.allWords ?? []
    );

    return (
        <Container>
            {words.map((word, index) => (
                <Word key={`${word.value}-${index}`} index={index} />
            ))}
        </Container>
    );
};

export default WordCloud;
