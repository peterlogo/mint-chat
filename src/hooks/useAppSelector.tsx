import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../types";

/**
 * Hook to use the selector function of the store
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
