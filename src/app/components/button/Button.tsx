"use client";
import { useCallback } from "react";
import { ButtonProps } from "./interface";

function Button(buttonProps: ButtonProps) {
	const { onClick, variant, label, size, className } = buttonProps;
	const onClickMemo = useCallback(() => {
		onClick();
	}, [onClick]);
	return (
		<button
			onClick={onClickMemo}
			className={`${className} button button__${variant} button-size__${size} cursor-pointer`}>
			{label}
		</button>
	);
}

export default Button;
