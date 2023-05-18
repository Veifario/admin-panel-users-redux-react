import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
	usersList: [],
	loadingStatus: false,
	errorMessage: "",
};

const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		fetchedUsers: (state, action) => {
			state.usersList = action.payload;
			state.loadingStatus = false;
		},
		fetchingUsers: (state) => {
			state.loadingStatus = true;
		},
		fetchingUsersError: (state, action) => {
			state.loadingStatus = false;
			state.errorMessage = action.payload;
		},
		userAdd: (state, action) => {
			state.loadingStatus = false;
			state.usersList.push(action.payload);
		},
		userDelete: (state, action) => {
			state.loadingStatus = false;
			state.usersList = action.payload;
		},
		userUpdate: (state, action) => {
			state.loadingStatus = false;
			state.usersList = action.payload;
		},
	},
});

const { actions, reducer } = usersSlice;

export const {
	fetchedUsers,
	fetchingUsers,
	fetchingUsersError,
	userAdd,
	userDelete,
	userUpdate,
} = actions;

export default reducer;
