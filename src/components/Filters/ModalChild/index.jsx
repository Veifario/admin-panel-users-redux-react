import React, { useState } from "react";
import s from "./modalchild.module.scss";
import { v4 as unique } from "uuid";
import Button from "../../../ui/Button";
import { useDispatch } from "react-redux";
import { postUser } from "../../../redux/actions/index";

const ModalChild = ({ setIsVisible }) => {
	const dispatch = useDispatch();

	// States
	const [inputValue, setInputValue] = useState("");

	const addUser = () => {
		if (inputValue.trim() === "") return;
		setIsVisible(false);
		const newData = {
			id: unique(),
			fullName: inputValue,
		};
		dispatch(postUser(newData));
		setInputValue("");
	};

	return (
		<div className={s.root}>
			<label>
				Name:
				<input
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					type="text"
				/>
			</label>

			<div className={s.btns}>
				<Button onClick={addUser}>Добавить</Button>
				<Button onClick={() => setIsVisible(false)}>Отменить</Button>
			</div>
		</div>
	);
};

export default ModalChild;
