import Question from "atoms/Question";
import WordCloud from "molecules/WordCloud";
import Button from "atoms/Button";
import useQuestion from "hooks/useQuestion";

const QuestionSection = () => {
    const [showAnswer, question, handleCheckAnswers, handleFinishGame] =
        useQuestion();
    const QuestionButton = showAnswer ? (
        <Button onClick={handleFinishGame}>finish game</Button>
    ) : (
        <Button onClick={handleCheckAnswers}>check answers</Button>
    );

    return (
        <div>
            <Question>{question}</Question>
            <WordCloud />
            {QuestionButton}
        </div>
    );
};

export default QuestionSection;
