import React from "react";
import s from "./button.module.scss";

const Button = ({ children, ...props }) => {
	const classes = [s.root];

	if (props.type === "danger") classes.push(s.delete);

	return (
		<button {...props} className={classes.join(" ")}>
			{children}
		</button>
	);
};

export default Button;
