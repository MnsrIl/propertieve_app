import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./types";

const useAppDispatch = () => useDispatch<AppDispatch>();

const useTSelector: TypedUseSelectorHook<RootState> = useSelector;

export { useAppDispatch, useTSelector };
