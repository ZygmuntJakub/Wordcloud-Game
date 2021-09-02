/* eslint-disable camelcase */

import QuestionApi from "types/QuestionApi";
import Question from "data/Question";

const mapQuestionApiData = ({
    question,
    all_words,
    good_words,
}: QuestionApi) => {
    return new Question(question, all_words, good_words);
};

export default mapQuestionApiData;
