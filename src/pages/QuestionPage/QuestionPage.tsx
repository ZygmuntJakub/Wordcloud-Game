import useFetchQuestion from "hooks/useFetchQuestion";
import QuestionSection from "organisms/QuestionSection";
import FullPageLoader from "atoms/FullPageLoader";
import useCheckPlayer from "hooks/useCheckPlayer";
import PageWrapper from "atoms/PageWrapper";

const QuestionPage = () => {
    const [loading] = useFetchQuestion();
    useCheckPlayer();

    if (loading) return <FullPageLoader />;

    return (
        <PageWrapper>
            <QuestionSection />
        </PageWrapper>
    );
};

export default QuestionPage;
