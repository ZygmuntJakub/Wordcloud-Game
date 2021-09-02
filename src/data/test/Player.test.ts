import Player from "../Player";

describe("Player tests", () => {
    test("Should set player nickname", () => {
        // Given
        const player = new Player("");

        // When
        const nickname = "Player";
        player.setNickname(nickname);

        // Then
        expect(player.nickname).toEqual(nickname);
    });
});
