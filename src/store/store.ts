import { configureStore } from "@reduxjs/toolkit";
import { taskSlice } from "./task-slice";


export const store = configureStore({
    reducer: {
        task: taskSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;