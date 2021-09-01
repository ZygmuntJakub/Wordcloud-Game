import React from "react";
import NicknameForm from "organisms/NicknameForm";
import H1 from "atoms/H1";

const WelcomeScreen = () => {
    return (
        <div>
            <H1>Wordcloud game</H1>
            <NicknameForm />
        </div>
    );
};

export default WelcomeScreen;
