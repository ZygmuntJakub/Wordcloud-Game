import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useAppSelector } from "utils/store";
import { checkAnswer } from "store/game";

const useQuestion = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const [showAnswer, setShowAnswer] = useState(false);

    const question = useAppSelector(
        ({ game }) => game?.game?.question?.question ?? ""
    );

    const handleCheckAnswers = () => {
        setShowAnswer(true);
        dispatch(checkAnswer());
    };
    const handleFinishGame = () => history.push("result");

    return [
        showAnswer,
        question,
        handleCheckAnswers,
        handleFinishGame,
    ] as const;
};

export default useQuestion;
