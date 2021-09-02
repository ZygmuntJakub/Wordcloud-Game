import React from "react";
import NicknameForm from "molecules/NicknameForm";
import H1 from "atoms/H1";
import { Container } from "./styled";

const WelcomeSection = () => {
    return (
        <Container>
            <H1>Wordcloud game</H1>
            <NicknameForm />
        </Container>
    );
};

export default WelcomeSection;
