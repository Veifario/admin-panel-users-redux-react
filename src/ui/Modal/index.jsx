import React from "react";
import s from "./modal.module.scss";

const Modal = ({ isVisible, setIsVisible, children, ...props }) => {
	return (
		<div
			className={isVisible ? s.root : s.hide}
			onClick={() => setIsVisible(false)}
		>
			<div
				onClick={(e) => {
					e.stopPropagation();
				}}
				className={s.child}
			>
				{children}
			</div>
		</div>
	);
};

export default Modal;
