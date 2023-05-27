import { useDispatch } from "react-redux";
import { AppDispatch } from "../types";

/**
 * Hook to use the dispatch function of the store
 * @returns AppDispatch
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();
