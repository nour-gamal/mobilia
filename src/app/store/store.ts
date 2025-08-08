import { configureStore } from "@reduxjs/toolkit";
import { AppSlice } from "../slice";

export const store = configureStore({
	reducer: {
		AppReducer: AppSlice.reducer,
	},
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
