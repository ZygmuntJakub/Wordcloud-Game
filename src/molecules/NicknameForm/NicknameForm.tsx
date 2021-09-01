import React from "react";
import usePlayer from "hooks/usePlayer";
import Button from "atoms/Button";
import Input from "atoms/Input";
import { useHistory } from "react-router-dom";

const NicknameForm = () => {
    const history = useHistory();

    const [nickname, setNickname, saveNickname] = usePlayer();
    const isDisabled = !nickname;

    return (
        <div>
            <Input
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                onBlur={() => saveNickname()}
            />
            <Button
                onClick={() => history.push("/question")}
                disabled={isDisabled}
            >
                play
            </Button>
        </div>
    );
};

export default NicknameForm;
