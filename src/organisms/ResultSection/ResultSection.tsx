import React from "react";
import CongratulationsText from "molecules/CongratulationsText";
import Button from "atoms/Button";
import useResult from "hooks/useResult";

const ResultSection = () => {
    const [result, player, handlePlayAgain] = useResult();

    return (
        <>
            <CongratulationsText
                nickname={player?.nickname ?? ""}
                score={result?.score ?? 0}
            />
            <Button onClick={handlePlayAgain}>play again</Button>
        </>
    );
};

export default ResultSection;
