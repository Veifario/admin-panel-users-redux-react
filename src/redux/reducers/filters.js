import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	sortingMethod: null,
};

const filters = createSlice({
	name: "filters",
	initialState,
	reducers: {
		sortUsersByName: (state) => {
			state.sortingMethod =
				state.sortingMethod === "ascendingName"
					? "descendingName"
					: "ascendingName";
		},
	},
});

const { actions, reducer } = filters;

export const { sortUsersByName } = actions;
export default reducer;
