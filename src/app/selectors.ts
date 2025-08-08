import { RootState } from "./store/store";

export const selectCategories = (state: RootState) =>
	state.AppReducer.categories;
export const selectLoading = (state: RootState) => state.AppReducer.loading;
