import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "store/game";

export default configureStore({
    reducer: {
        game: gameReducer,
    },
});
