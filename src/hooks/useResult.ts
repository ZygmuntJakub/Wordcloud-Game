import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAppSelector } from "utils/store";
import { startNewGame } from "store/game";

const useResult = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const result = useAppSelector(({ game }) => game.game.result);
    const player = useAppSelector(({ game }) => game.game.player);
    const handlePlayAgain = () => {
        dispatch(startNewGame());
        history.push("/");
    };

    return [result, player, handlePlayAgain] as const;
};

export default useResult;
