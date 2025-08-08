import { createSlice } from "@reduxjs/toolkit";
import { AppSliceInterface } from "./interface";

const initialState: AppSliceInterface = {
	loading: false,
	error: null,
	categories: [],
};
export const AppSlice = createSlice({
	name: "app",
	initialState,
	reducers: {
		setLoading: (state, action) => {
			state.loading = action.payload;
		},
		setError: (state, action) => {
			state.error = action.payload;
		},
		setCategories: (state, action) => {
			state.categories = action.payload;
		},
	},
});
export const { setLoading, setError, setCategories } = AppSlice.actions;
export default AppSlice.reducer;
