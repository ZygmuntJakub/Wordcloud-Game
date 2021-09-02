import { fireEvent, render } from "@testing-library/react";
import store from "utils/store";
import { Provider } from "react-redux";
import {
    addPlayer,
    addQuestion,
    selectWord,
    startNewGame,
    checkAnswer,
} from "store/game";
import mockQuestion from "mocks/mockQuestion";
import Question from "data/Question";
import { BrowserRouter } from "react-router-dom";
import ResultSection from "./ResultSection";

describe("ResultSection tests", () => {
    // Given
    let question: Question;
    const nickname = "Player";
    beforeEach(() => {
        question = mockQuestion();
        store.dispatch(startNewGame());
        store.dispatch(addPlayer(nickname));
        store.dispatch(addQuestion(question));
    });

    test("Should contain nickname", async () => {
        // Given
        const { findByText } = render(
            <Provider store={store}>
                <ResultSection />
            </Provider>
        );

        const playerNickname = await findByText(nickname);

        // When

        // Then

        expect(playerNickname).toHaveTextContent(nickname);
    });

    test("Should contain score 0 points", async () => {
        // Given
        const { findByTestId } = render(
            <Provider store={store}>
                <ResultSection />
            </Provider>
        );

        const score = await findByTestId("score");

        // When
        store.dispatch(selectWord(0));
        store.dispatch(selectWord(3));
        store.dispatch(checkAnswer());

        // Then

        expect(score).toHaveTextContent("0 points");
    });

    test("Should contain score -3 points", async () => {
        // Given
        const { findByTestId } = render(
            <Provider store={store}>
                <ResultSection />
            </Provider>
        );

        const score = await findByTestId("score");

        // When
        store.dispatch(selectWord(0));

        store.dispatch(checkAnswer());

        // Then

        expect(score).toHaveTextContent("-3 points");
    });

    test("Should contain score 4 points", async () => {
        // Given
        const { findByTestId } = render(
            <Provider store={store}>
                <ResultSection />
            </Provider>
        );

        const score = await findByTestId("score");

        // When
        store.dispatch(selectWord(3));
        store.dispatch(selectWord(11));

        store.dispatch(checkAnswer());

        // Then

        expect(score).toHaveTextContent("4 points");
    });

    test("Should start new game", async () => {
        // Given
        const { findByText } = render(
            <BrowserRouter>
                <Provider store={store}>
                    <ResultSection />
                </Provider>
            </BrowserRouter>
        );

        const button = await findByText("play again");

        // When
        fireEvent.click(button);

        // Then
        expect(store.getState().game.game.player).toEqual(undefined);
        expect(store.getState().game.game.question).toEqual(undefined);
    });
});
