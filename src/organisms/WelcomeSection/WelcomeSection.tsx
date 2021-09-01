import React from "react";
import NicknameForm from "molecules/NicknameForm";
import H1 from "atoms/H1";

const WelcomeSection = () => {
    return (
        <div>
            <H1>Wordcloud game</H1>
            <NicknameForm />
        </div>
    );
};

export default WelcomeSection;
