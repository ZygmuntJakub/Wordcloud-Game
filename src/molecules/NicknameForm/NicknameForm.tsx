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

    const handleStart = () => history.push("/question");

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            saveNickname();
            handleStart();
        }
    };

    return (
        <Container>
            <Input
                data-testid="nickname-input"
                placeholder="Enter your nickname here..."
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                onBlur={() => saveNickname()}
                onKeyDown={handleKeyDown}
            />
            <Button onClick={handleStart} disabled={isDisabled}>
                play
            </Button>
        </Container>
    );
};

export default NicknameForm;
