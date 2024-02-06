import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TaskData = {
    id: string;
    title: string;
}

type TaskState = {
    tasks: TaskData[];
}

const initialState: TaskState = {
    tasks: []
}

export const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask(state, action: PayloadAction<{ id: string, title: string }>) {
            state.tasks.push({ ...action.payload })
        },
        removeTask(state, action: PayloadAction<{ id: string }>) {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload.id)
        }
    }
})

export const { addTask, removeTask } = taskSlice.actions;