import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useAppSelector } from "utils/store";

const useCheckPlayer = () => {
    const history = useHistory();
    const player = useAppSelector(({ game }) => game.game.player);

    useEffect(() => {
        if (!player) history.push("/");
    }, []);
};

export default useCheckPlayer;
