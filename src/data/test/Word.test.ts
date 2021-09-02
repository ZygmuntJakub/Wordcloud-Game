import Word from "../Word";

describe("Word tests", () => {
    test("Should init word word false checked state", () => {
        // Given
        const word = new Word("word");

        // When

        // Then
        expect(word.checked).toEqual(false);
    });
});
