import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0
};

// const initialState = 0;

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            // return state + 1;
            state.value += 1;
        },
        decrement: (state) => {
            // return state - 1;
            state.value -= 1;
        },
        reset: (state) => {
            // return state = 0;
            state.value = 0;
        },
        increaseByValue: (state, action) => {
            state.value += action.payload;
        },
        decreaseByValue: (state, action) => {
            state.value -= action.payload;
        }
    }
});

export const incrementAsync = (amount) => (dispatch) => {
    setTimeout(() => {
        dispatch(increaseByValue(amount))
    }, 5000)
};

export const { increment, decrement, reset, increaseByValue, decreaseByValue } = counterSlice.actions;

export const counterState = (state) => state.counters.value;

export default counterSlice.reducer;