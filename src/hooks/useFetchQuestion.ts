import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { addQuestion } from "store/game";
import fetchQuestion from "api/fetchQuestion";
import mapQuestionApiData from "utils/mapQuestionApiData";

const useFetchQuestion = () => {
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetchQuestion()
            .then((data) => {
                dispatch(addQuestion(mapQuestionApiData(data)));
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
                toast.error(err.message);
            });
    }, []);

    return [loading] as const;
};

export default useFetchQuestion;
