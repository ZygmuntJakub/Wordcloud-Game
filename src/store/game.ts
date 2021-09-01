import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Game from "data/Game";
import Player from "data/Player";
import Question from "../data/Question";

export const gameSlice = createSlice({
    name: "game",
    initialState: {
        game: new Game(),
    },
    reducers: {
        startNewGame: (state) => {
            state.game = new Game();
        },

        addPlayer: (state, action: PayloadAction<string>) => {
            const player = new Player(action.payload);
            state.game.addPlayer(player);
        },

        addQuestion: (state, action: PayloadAction<Question>) => {
            state.game.addQuestion(action.payload);
        },
    },
});

export const { startNewGame, addPlayer, addQuestion } = gameSlice.actions;

export default gameSlice.reducer;
