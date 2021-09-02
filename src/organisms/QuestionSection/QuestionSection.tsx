import Question from "atoms/Question";
import WordCloud from "molecules/WordCloud";
import Button from "atoms/Button";
import useQuestion from "hooks/useQuestion";
import { Container } from "./styled";

const QuestionSection = () => {
    const [showAnswer, question, handleCheckAnswers, handleFinishGame] =
        useQuestion();
    const QuestionButton = showAnswer ? (
        <Button onClick={handleFinishGame}>finish game</Button>
    ) : (
        <Button onClick={handleCheckAnswers}>check answers</Button>
    );

    return (
        <Container>
            <Question>{question}</Question>
            <WordCloud />
            {QuestionButton}
        </Container>
    );
};

export default QuestionSection;
