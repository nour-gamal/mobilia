import { ButtonProps } from "@components/button/interface";
import { ReactNode } from "react";

export type optAlign = "left" | "center" | "right";
type stdText = {
	text: ReactNode;
	optAlign: optAlign;
};

type imageSrc = {
	src: string;
	width?: number;
	height?: number;
};
export interface ItemCardProps {
	_id: number;
	imageSrc: imageSrc;
	stdTitle: stdText;
	stdPrice?: stdText;
	stdDescription?: stdText;
	button?: ButtonProps;
}
