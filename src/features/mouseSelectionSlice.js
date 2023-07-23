import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    correctSelections: [],
    selected: [],
    correctAnswerArray: [],
    hintAnswersArr: [],
    found: [],
    isMouseDown : false
}

const mouseSelectionSlice = createSlice({
    name: 'mouseSelection',
    initialState,
    reducers: {
        setCorrectSelections: (state, action) => {
            state.correctSelections = action.payload
        },
        setSelected: (state, action) => {
            state.selected = action.payload
        },
        setFound: (state, action) => {
            state.found = action.payload
        },
        setIsMouseDown: (state, action) => {
            state.isMouseDown = action.payload
        },
        setCorrectAnswerArray: (state, action) => {
            state.correctAnswerArray = action.payload
        },
        setHintAnswersArr: (state, action) => {
            state.hintAnswersArr = action.payload
        }       
    }
})

export const {
    setCorrectSelections,
    setSelected,
    setFound,
    setIsMouseDown,
    setCorrectAnswerArray,
    setHintAnswersArr
} = mouseSelectionSlice.actions

export default mouseSelectionSlice.reducer