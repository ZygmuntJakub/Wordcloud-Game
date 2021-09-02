/* eslint-disable camelcase */
import questions from "mocks/questions";
import mapQuestionApiData from "utils/mapQuestionApiData";

const mockQuestion = () => {
    return mapQuestionApiData(questions[0]);
};

export default mockQuestion;
