import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "utils/store";
import { addPlayer, changeNickname } from "store/game";

const usePlayer = () => {
    const dispatch = useDispatch();
    const player = useAppSelector(({ game }) => game.game.player);

    const [nickname, setNickname] = useState(player?.nickname ?? "");

    const saveNickname = () => dispatch(changeNickname(nickname));

    useEffect(() => {
        dispatch(addPlayer(""));
    }, []);

    return [nickname, setNickname, saveNickname] as const;
};

export default usePlayer;
