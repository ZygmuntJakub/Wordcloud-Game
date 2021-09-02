import mockQuestion from "mocks/mockQuestion";
import Game from "../Game";
import Player from "../Player";

describe("Game tests", () => {
    // Given
    let game: Game;
    beforeEach(() => {
        game = new Game();
    });

    test("Should add player", () => {
        // Given
        const player = new Player("Player");

        // When
        game.addPlayer(player);

        // Then
        expect(game.player).toEqual(player);
    });

    test("Should add question", () => {
        // Given
        const question = mockQuestion();

        // When
        game.addQuestion(question);

        // Then
        expect(game.question).toEqual(question);
    });

    test("Should select word", () => {
        // Given
        const question = mockQuestion();

        // When
        game.addQuestion(question);
        game.selectWord(0);

        // Then

        expect(question.allWords[0].checked).toEqual(true);
    });

    test("Should calculate result", () => {
        // Given
        const question = mockQuestion();
        const player = new Player("Player");

        // When
        game.addPlayer(player);
        game.addQuestion(question);
        game.selectWord(0);
        game.calculateResult();

        // Then

        expect(game.result?.score).toEqual(-3);
    });
});
