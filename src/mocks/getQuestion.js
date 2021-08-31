import questions from "mocks/questions";

const getQuestion = () => {
    const randomIndex = Math.floor(Math.random() * questions.length);

    return questions[randomIndex];
};

export default getQuestion;
