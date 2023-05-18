import React from "react";
import s from "./modalchild.module.scss";
import { useDispatch, useSelector } from "react-redux";

import Button from "../../../ui/Button";
import { deleteUser } from "../../../redux/actions";

const ModalChild = ({ setIsModalVisible, removableId }) => {
	const usersList = useSelector((state) => state.users.usersList);
	const dispatch = useDispatch();

	const userDeletion = () => {
		const filteredUsersList = usersList.filter((e) => e.id !== removableId);
		dispatch(deleteUser(removableId, filteredUsersList));
		setIsModalVisible(false);
	};

	return (
		<div className={s.root}>
			<h2>Delete this user from the list?</h2>
			<div className={s.btns}>
				<Button onClick={userDeletion}>Yes</Button>
				<Button onClick={() => setIsModalVisible(false)}>No</Button>
			</div>
		</div>
	);
};

export default ModalChild;
