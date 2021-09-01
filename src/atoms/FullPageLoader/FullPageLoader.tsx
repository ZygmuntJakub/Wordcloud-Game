import { LoaderContainer, StyledLoader } from "./styled";

const FullPageLoader = () => {
    return (
        <LoaderContainer>
            <StyledLoader>
                <div className="lds-default">
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                </div>
            </StyledLoader>
        </LoaderContainer>
    );
};

export default FullPageLoader;
