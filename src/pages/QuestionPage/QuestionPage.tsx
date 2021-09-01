import useFetchQuestion from "hooks/useFetchQuestion";
import QuestionSection from "organisms/QuestionSection";
import FullPageLoader from "atoms/FullPageLoader";
import useCheckPlayer from "hooks/useCheckPlayer";

const QuestionPage = () => {
    const [loading] = useFetchQuestion();
    useCheckPlayer();

    if (loading) return <FullPageLoader />;

    return <QuestionSection />;
};

export default QuestionPage;
