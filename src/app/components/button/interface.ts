export interface ButtonProps {
	label: string;
	className?: string;
	variant: "primary" | "secondary" | "tertiary";
	size: "float" | "large";
	onClick: () => void;
}
