import React from "react";
import Text from "atoms/Text";

interface PropTypes {
    nickname: string;
    score: number;
}

const CongratulationsText = ({ nickname, score }: PropTypes) => {
    const firstParagraph =
        score > 0 ? `Congratulations, ${nickname}!` : nickname;

    const points = score === 1 ? "point" : "points";

    return (
        <>
            <Text margin="0.5rem 0">{firstParagraph}</Text>
            <Text margin="0.5rem 0">Your score:</Text>
            <Text data-testid="score" secondary>
                {score} {points}
            </Text>
        </>
    );
};

export default CongratulationsText;
