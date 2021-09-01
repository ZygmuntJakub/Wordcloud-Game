import { useDispatch } from "react-redux";
import { useState } from "react";
import { useAppSelector } from "utils/store";
import { selectWord } from "store/game";

const useWord = (index: number) => {
    const dispatch = useDispatch();

    const [randomMoveX] = useState((Math.random() - 1) * 2);
    const [randomMoveY] = useState((Math.random() - 1) * 2);

    const value = useAppSelector(({ game }) => {
        return game?.game?.question?.allWords[index].value;
    });

    const checked = useAppSelector(({ game }) => {
        return game?.game?.question?.allWords[index].checked;
    });

    const correct = useAppSelector(({ game }) => {
        return game?.game?.question?.allWords[index].correct;
    });

    const gameChecked = useAppSelector(({ game }) => {
        return game?.game?.checked;
    });

    const handleClick = () => {
        if (gameChecked) return;
        dispatch(selectWord(index));
    };

    return [
        value,
        checked,
        correct,
        gameChecked,
        handleClick,
        randomMoveX,
        randomMoveY,
    ] as const;
};

export default useWord;
