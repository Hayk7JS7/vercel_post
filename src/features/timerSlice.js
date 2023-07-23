import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    expired: false
}

const timerSlice = createSlice({
    name: "timer",
    initialState,
    reducers: {
        timerExpiredStatus: (state, action) => {
            state.expired = action.payload
        }
    }
})

export const { timerExpiredStatus } = timerSlice.actions

export default timerSlice.reducer