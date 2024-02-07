import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";

type DispatchFunction = () => AppDispatch;

export const useTaskDispatch: DispatchFunction = useDispatch;
export const useTaskSelector: TypedUseSelectorHook<RootState> = useSelector;