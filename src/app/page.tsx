import ImageHeader from "@components/ImageHeader/ImageHeader";
import bgImage from "@assets/images/bg-image.svg";
import logoSm from "@assets/icons/logo-sm.svg";
export default function Home() {
	return (
		<div>
			<ImageHeader
				bgImage={bgImage}
				icon={logoSm}
				subline="Handcrafted in Viet Nam since 1650"
				headline="BAT TRANG </br> DINNER SET"
				buttonProps={{
					label: "SHOP NOW",
					variant: "primary",
					size: "large",
				}}
			/>
		</div>
	);
}
