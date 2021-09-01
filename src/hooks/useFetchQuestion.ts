import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { addQuestion } from "store/game";
import fetchQuestion from "api/fetchQuestion";
import mapQuestionApiData from "../utils/mapQuestionApiData";

const useFetchQuestion = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        fetchQuestion()
            .then((data) => dispatch(addQuestion(mapQuestionApiData(data))))
            .catch((err) => {
                toast.error(err.message);
            });
    }, []);
};

export default useFetchQuestion;
