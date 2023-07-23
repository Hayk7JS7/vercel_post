import { configureStore } from "@reduxjs/toolkit";
import wordleWordsReducer from "../features/wordleWordsSlice";
import timerReducer from "../features/timerSlice";
import mouseSelectionReducer from "../features/mouseSelectionSlice";

const store = configureStore({
    reducer: {
        wordleWords: wordleWordsReducer,
        timer: timerReducer,
        mouseSelection: mouseSelectionReducer
    }
})

export default store