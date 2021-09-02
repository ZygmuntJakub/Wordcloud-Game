import React from "react";
import usePlayer from "hooks/usePlayer";
import Button from "atoms/Button";
import Input from "atoms/Input";
import { useHistory } from "react-router-dom";
import { Container } from "./styled";

const NicknameForm = () => {
    const history = useHistory();

    const [nickname, setNickname, saveNickname] = usePlayer();
    const isDisabled = !nickname;

    return (
        <Container>
            <Input
                placeholder="Enter your nickname here..."
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
        </Container>
    );
};

export default NicknameForm;
