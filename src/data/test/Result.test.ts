import Result from "../Result";

describe("Result tests", () => {
    // Given
    let result: Result;
    beforeEach(() => {
        result = new Result();
    });

    test("Should calculate for only good answers", () => {
        // When
        result.calculateScore(2, 0, 0);

        // Then
        expect(result.score).toEqual(4);
    });

    test("Should calculate for only bad answers", () => {
        // When
        result.calculateScore(0, 2, 0);

        // Then
        expect(result.score).toEqual(-2);
    });

    test("Should calculate for only empty answers", () => {
        // When
        result.calculateScore(0, 0, 2);

        // Then
        expect(result.score).toEqual(-2);
    });

    test("Should calculate for good, bad and empty answers", () => {
        // When
        result.calculateScore(2, 2, 2);

        // Then
        expect(result.score).toEqual(0);
    });
});
