import { store } from "../store";

/**
 * Root state type definition
 */
export type RootState = ReturnType<typeof store.getState>;

/**
 * App dispatch type definition
 */
export type AppDispatch = typeof store.dispatch;

/**
 * Loading state type definition
 */
export type LoadingState = "idle" | "pending" | "succeeded" | "failed";
