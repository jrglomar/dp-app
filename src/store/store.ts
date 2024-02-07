import { configureStore } from "@reduxjs/toolkit";
import { taskSlice } from "./task-slice";
import { timerSlice } from "./timer-slice";

export const store = configureStore({
    reducer: {
        task: taskSlice.reducer,
        time: timerSlice.reducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;