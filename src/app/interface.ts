import { ItemCardProps } from "@components/itemCard/interface";

export interface AppSliceInterface {
	loading: boolean;
	error: string | null;
	categories: Array<ItemCardProps>;
}
