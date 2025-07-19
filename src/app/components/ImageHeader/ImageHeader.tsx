"use client";
import { ImageHeaderProps } from "./interface";
import Button from "@components/button/Button";

function ImageHeader(props: ImageHeaderProps) {
	const { bgImage, icon, subline, headline, buttonProps } = props;
	const onClick = () => {
		console.log("button clicked");
	};

	return (
		<div
			className="imageHeader"
			style={{ backgroundImage: `url(${bgImage.src})` }}>
			<section className="stripeBox text-center">
				<div className="stripeBox-content">
					<img src={icon.src} alt="Icon" className="icon margin-bottom-l" />
					<div className="subline margin-y-md">{subline}</div>
					<div
						className="headline heading-8"
						dangerouslySetInnerHTML={{ __html: headline }}
					/>
					<Button
						className="margin-top-xl"
						onClick={onClick}
						{...buttonProps}
					/>
				</div>
			</section>
		</div>
	);
}

export default ImageHeader;
