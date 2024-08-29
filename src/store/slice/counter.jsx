import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
    name: 'counter',
    initialState: { count: 0, showCounter: false },
    reducers: {
        increment: (state) => {
            state.count++;
        },
        decrement: (state) => {
            state.count--
        },
        variable: (state, action) => {
            state.count = state.count + action.payload

        },
        toggle: (state) => {
            state.showCounter = !state.showCounter
        }
    }
});

const counterSliceReducer=counterSlice.reducer


export default counterSliceReducer
export const counterAction=counterSlice.actions
