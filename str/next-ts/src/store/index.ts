import { configureStore } from "@reduxjs/toolkit";
import { stateQueryApi } from "./slices/allRequests";
import authUserInfo from "./slices/auth.slice";
import uiSlice from "./slices/ui.slice";

export const store = configureStore({
  reducer: {
    [stateQueryApi.reducerPath]: stateQueryApi.reducer,
    auth: authUserInfo,
    userInterface: uiSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(stateQueryApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
