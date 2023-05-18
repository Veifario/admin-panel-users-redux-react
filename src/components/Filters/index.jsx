import React, { useState } from "react";
import s from "./filters.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { sortUsersByName } from "../../redux/reducers/filters";

import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import ModalChild from "./ModalChild";

import sortUp from "../../assets/img/sort-up.png";
import sortDown from "../../assets/img/sort-down.png";

const Filters = () => {
	const dispatch = useDispatch();
	const sortingMethod = useSelector((state) => state.filters.sortingMethod);
	// States
	const [isVisible, setIsVisible] = useState(false);

	return (
		<div className={s.root}>
			<Modal isVisible={isVisible} setIsVisible={setIsVisible}>
				<ModalChild setIsVisible={setIsVisible} />
			</Modal>
			<Button onClick={() => dispatch(sortUsersByName())}>
				Сортировать по имени
				<img
					className={s.ico}
					src={sortingMethod === "ascendingName" ? sortUp : sortDown}
					alt=""
				/>
			</Button>
			<Button onClick={() => setIsVisible(true)}>Добавить пользователя</Button>
		</div>
	);
};

export default Filters;
