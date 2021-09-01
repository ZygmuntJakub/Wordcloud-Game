import ERRORS from "../utils/errors";
import QuestionApi from "../types/QuestionApi";

const fetchQuestion: () => Promise<QuestionApi> = async () => {
    try {
        const response = await fetch("/api/question");
        if (!response.ok) throw new Error();
        return response.json();
    } catch (e) {
        throw new Error(ERRORS.NETWORK_ERR);
    }
};

export default fetchQuestion;
