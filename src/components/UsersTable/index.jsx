import React, { useEffect, useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/actions";
import Modal from "../../ui/Modal";
import Preloader from "../Preloader";
import UserRaw from "../UserRaw/index";
import ModalChild from "./ModalChild";
import s from "./userstable.module.scss";

const UsersTable = () => {
	const { usersList, loadingStatus, errorMessage } = useSelector(
		(state) => state.users
	);
	const sortingMethod = useSelector((state) => state.filters.sortingMethod);

	const dispatch = useDispatch();

	// States
	const [isVisible, setIsVisible] = useState(false);
	const [removableId, setRemovableId] = useState(0);

	const sortList = () => {
		return sortingMethod
			? [...usersList].sort((a, b) =>
					sortingMethod === "ascendingName"
						? a.fullName.localeCompare(b.fullName)
						: b.fullName.localeCompare(a.fullName)
			  )
			: usersList;
	};

	const displayUsers = () =>
		sortList().map(({ id, fullName }, index) => (
			<UserRaw
				key={id}
				tableId={index + 1}
				id={id}
				name={fullName}
				setIsVisible={setIsVisible}
				setRemovableId={setRemovableId}
			/>
		));

	useEffect(() => {
		displayUsers();
		dispatch(fetchUsers());
	}, []);

	if (loadingStatus) return <Preloader />;
	if (errorMessage) return <h1>{errorMessage}</h1>;

	return (
		<Fragment>
			<Modal isVisible={isVisible} setIsVisible={setIsVisible}>
				<ModalChild
					setIsModalVisible={setIsVisible}
					removableId={removableId}
				/>
			</Modal>
			<table className={s.root}>
				<thead>
					<tr>
						<th>Id</th>
						<th>Name</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>{displayUsers()}</tbody>
			</table>
		</Fragment>
	);
};

export default UsersTable;
