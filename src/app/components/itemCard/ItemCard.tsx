import Image from "next/image";
import { ItemCardProps } from "./interface";

function ItemCard(props: Omit<ItemCardProps, "_id">) {
	const { imageSrc, stdTitle, stdPrice, stdDescription, button } = props;
	const { src, width, height } = imageSrc;
	const { text: titleText, optAlign: titleAlign } = stdTitle;
	const { text: priceText, optAlign: priceAlign } = stdPrice || {};
	// const { text: descriptionText, optAlign: descriptionAlign } =
	// stdDescription || {};
	return (
		<div className="itemCard">
			<Image
				alt={""}
				src={src}
				width={width}
				height={height}
				className="margin-bottom-md"
			/>
			<div className={`display-4 flex justify-${titleAlign} uppercase`}>
				{titleText}
			</div>
			{stdPrice && (
				<div className={`flex justify-${priceAlign} uppercase`}>
					{priceText}
				</div>
			)}
		</div>
	);
}
export default ItemCard;
