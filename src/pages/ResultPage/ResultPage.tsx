import ResultSection from "organisms/ResultSection";
import useCheckPlayer from "hooks/useCheckPlayer";

const ResultPage = () => {
    useCheckPlayer();
    return <ResultSection />;
};

export default ResultPage;
