import React from "react";
import Text from "../../atoms/Text";

interface PropTypes {
    nickname: string;
    score: number;
}

const CongratulationsText = ({ nickname, score }: PropTypes) => {
    const firstParagraph =
        score > 0 ? `Congratulations, ${nickname}!` : nickname;

    const points = () => {
        switch (score) {
            case 0:
                return "";
            case 1:
                return "point";
            default:
                return "points";
        }
    };
    return (
        <>
            <Text>{firstParagraph}</Text>
            <Text>Your score:</Text>
            <Text secondary>
                {score} {points()}
            </Text>
        </>
    );
};

export default CongratulationsText;
