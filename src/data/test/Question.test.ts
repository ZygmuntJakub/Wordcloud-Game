import mockQuestion from "mocks/mockQuestion";

describe("Question tests", () => {
    test("Should select question", () => {
        // Given
        const question = mockQuestion();

        // When
        question.selectWord(0);

        // Then
        expect(question.allWords[0].checked).toEqual(true);
    });
});
