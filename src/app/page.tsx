import ImageHeader from "@components/ImageHeader/ImageHeader";
import bgImage from "@assets/images/bg-image.svg";
import logoSm from "@assets/icons/logo-sm.svg";
import { optAlign } from "@components/itemCard/interface";
import ItemCard from "@components/itemCard/ItemCard";

const base_url = process.env.BASE_URL;
// const getCategories = async () => {
// 	try {
// 		const res = await fetch(`${base_url}/api/categories`);
// 		if (!res.ok) throw new Error("Failed to fetch categories");
// 		const parsedResponse = res.json();
// 		return parsedResponse;
// 	} catch (error) {
// 		console.error("Error fetching categories:", error);
// 	}
// };
export default async function Home() {
	// const { data } = await getCategories();
	// if (!data || data.length === 0) {
	// 	return <div className="text-center">No categories available</div>;
	// }
	const data = [
		{
			imageSrc: "dinner-set.png",
			stdTitle: "Dinner Set",
		},
	];
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
			<div className="flex justify-center margin-top-xxxl uppercase text-neautral_800 display-7 font-bold">
				Best Sellers
			</div>
			<div className="margin-bottom-xxxl margin-top-xl margin-x-8xl flex justify-between">
				{data?.map((item: any) => {
					const imageSrc = {
						src: `${base_url}/uploads/categories/${item.imageSrc}`,
						width: 254,
						height: 261,
					};
					const stdTitle = {
						text: <div className="display-4">{item.stdTitle}</div>,
						optAlign: "center" as optAlign,
					};

					return (
						<div
							key={item._id}
							className="grid grid-cols-4 gap-6 md:grid-cols-2 xs:grid-cols-1">
							<ItemCard imageSrc={imageSrc} stdTitle={stdTitle} />
						</div>
					);
				})}
			</div>
		</div>
	);
}
