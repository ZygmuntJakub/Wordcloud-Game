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

        changeNickname: (state, action: PayloadAction<string>) => {
            if (state.game.player)
                state.game.player.setNickname(action.payload);
        },

        addQuestion: (state, action: PayloadAction<Question>) => {
            state.game.addQuestion(action.payload);
        },

        selectWord: (state, action: PayloadAction<number>) => {
            state.game.selectWord(action.payload);
        },

        checkAnswer: (state) => {
            state.game.calculateResult();
        },
    },
});

export const {
    startNewGame,
    addPlayer,
    addQuestion,
    changeNickname,
    selectWord,
    checkAnswer,
} = gameSlice.actions;

export default gameSlice.reducer;
