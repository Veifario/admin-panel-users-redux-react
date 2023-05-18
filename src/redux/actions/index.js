import axios from "axios";
import {
	fetchingUsers,
	fetchingUsersError,
	fetchedUsers,
	userAdd,
	userDelete,
	userUpdate,
} from "../reducers/users";

export const fetchUsers = () => async (dispatch) => {
	try {
		dispatch(fetchingUsers());
		const { data } = await axios.get("http://localhost:3001/users");
		dispatch(fetchedUsers(data));
	} catch ({ message }) {
		dispatch(fetchingUsersError(message));
	}
};

export const postUser = (newData) => async (dispatch) => {
	try {
		dispatch(fetchingUsers());
		await axios.post("http://localhost:3001/users", newData);
		dispatch(userAdd(newData));
	} catch ({ message }) {
		dispatch(fetchingUsersError(message));
	}
};

export const deleteUser = (id, filteredUsers) => async (dispatch) => {
	try {
		dispatch(fetchingUsers());
		await axios.delete(`http://localhost:3001/users/${id}`);
		dispatch(userDelete(filteredUsers));
	} catch ({ message }) {
		dispatch(fetchingUsersError(message));
	}
};

export const updateUser =
	(id, changingData, filteredUsers) => async (dispatch) => {
		try {
			dispatch(fetchingUsers());
			await axios.patch(`http://localhost:3001/users/${id}`, changingData);
			dispatch(userUpdate(filteredUsers));
		} catch ({ message }) {
			dispatch(fetchingUsersError(message));
		}
	};
