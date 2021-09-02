import { fireEvent, render } from "@testing-library/react";
import store from "utils/store";
import { Provider } from "react-redux";
import { addPlayer, addQuestion, startNewGame } from "store/game";
import mockQuestion from "mocks/mockQuestion";
import Question from "data/Question";
import QuestionSection from "./QuestionSection";

describe("QuestionSection tests", () => {
    // Given
    let question: Question;
    beforeEach(() => {
        question = mockQuestion();
        store.dispatch(startNewGame());
        store.dispatch(addPlayer("Player"));
        store.dispatch(addQuestion(question));
    });

    test("Should select first question", async () => {
        // Given
        const { findByText } = render(
            <Provider store={store}>
                <QuestionSection />
            </Provider>
        );

        const firstQuestion = await findByText(question.allWords[0].value);

        // When
        fireEvent.click(firstQuestion);

        // Then

        expect(
            store.getState().game.game.question?.allWords[0].checked
        ).toEqual(true);
    });

    test("Should show result", async () => {
        // Given
        const { findByText, findAllByTestId } = render(
            <Provider store={store}>
                <QuestionSection />
            </Provider>
        );

        const firstQuestion = await findByText(question.allWords[0].value);
        const fourthQuestion = await findByText(question.allWords[3].value);
        const resultButton = await findByText("check answers");

        // When
        fireEvent.click(firstQuestion);
        fireEvent.click(fourthQuestion);
        fireEvent.click(resultButton);

        const answerLabels = await findAllByTestId("answer-label");

        // Then
        expect(answerLabels[0]).toHaveTextContent("Bad");
        expect(answerLabels[3]).toHaveTextContent("Good");
    });
});
