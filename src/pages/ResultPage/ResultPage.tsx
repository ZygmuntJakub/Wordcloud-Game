import ResultSection from "organisms/ResultSection";
import useCheckPlayer from "hooks/useCheckPlayer";
import PageWrapper from "atoms/PageWrapper";

const ResultPage = () => {
    useCheckPlayer();
    return (
        <PageWrapper>
            <ResultSection />
        </PageWrapper>
    );
};

export default ResultPage;
