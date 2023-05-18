import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux/actions";
import Button from "../../ui/Button";
import s from "./userraw.module.scss";

const UserRaw = ({ tableId, id, name, setIsVisible, setRemovableId }) => {
	const usersList = useSelector((state) => state.users.usersList);
	const dispatch = useDispatch();

	// States
	const [inputValue, setInputValue] = useState(name);
	const [isEdit, setIsEdit] = useState(false);

	const saveChanges = () => {
		setIsEdit(false);
		//Что бы не отправлялся лишний запрос, при неизменном name
		if (inputValue === name) return;
		const changingData = {
			fullName: inputValue,
		};
		const changedUsersList = usersList.map((user) =>
			user.id === id ? { ...user, fullName: inputValue } : user
		);
		dispatch(updateUser(id, changingData, changedUsersList));
	};

	return (
		<tr>
			<th>{tableId}</th>
			<td>
				{isEdit ? (
					<input
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						type="text"
					/>
				) : (
					name
				)}
			</td>
			{!isEdit ? (
				<td>
					<Button
						type="danger"
						className={s.btn}
						onClick={() => {
							setRemovableId(id);
							setIsVisible(true);
						}}
					>
						delete
					</Button>
					<Button onClick={() => setIsEdit(true)} className={s.btn}>
						edit
					</Button>
				</td>
			) : (
				<td>
					<Button
						className={s.btn}
						onClick={() => {
							setIsEdit(false);
							setInputValue(name);
						}}
					>
						cancel
					</Button>
					<Button type="danger" onClick={saveChanges} className={s.btn}>
						save
					</Button>
				</td>
			)}
		</tr>
	);
};

export default UserRaw;
