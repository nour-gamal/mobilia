import { ButtonProps } from "@components/button/interface";

export interface ImageHeaderProps {
	icon: {
		src: string;
	};
	bgImage: {
		src: string;
	};
	subline: string;
	headline: string;
	buttonProps: Omit<ButtonProps, "onClick">; // Exclude onClick to avoid conflicts with the ImageHeader component's own click handling
}
