
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TimerState = {
    seconds: number;
    isActive: boolean;
}

const initialState: TimerState = {
    seconds: localStorage.getItem('timerSeconds') ? parseInt(localStorage.getItem('timerSeconds') || '0') : 25 * 60,
    isActive: localStorage.getItem('timerIsActive') ? localStorage.getItem('timerIsActive') === 'true' : false,
};

export const timerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        setSeconds(state, action: PayloadAction<number>) {
            state.seconds = action.payload;
        },
        setIsActive(state, action: PayloadAction<boolean>) {
            state.isActive = action.payload;
        },
        resetTimer(state) {
            state.seconds = 25 * 60;
            state.isActive = false;
        },
    },
});

export const { setSeconds, setIsActive, resetTimer } = timerSlice.actions;
