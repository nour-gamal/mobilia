import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@components/Navbar/Navbar";
import { store } from "./store/store";
import "./globals.scss";
import Providers from "@components/Providers/Providers";

const inter = Inter({
	subsets: ["latin"],
	weight: ["400", "600", "700"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "Mobilia",
	description: "A web application for buying and selling furniture",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className}`}>
				<Providers>
					<Navbar />
					{children}
				</Providers>
			</body>
		</html>
	);
}
