"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@assets/icons/logo.svg";
import searchIcon from "@assets/icons/searchIcon.svg";
import cart from "@assets/icons/cart.svg";
import menuIcon from "@assets/icons/menu.svg";
import { useState } from "react";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDrawer = () => setIsOpen(!isOpen);
	const closeDrawer = () => setIsOpen(false);

	return (
		<nav
			id="navbar"
			className="flex justify-between sm:justify-around items-center padding-x-lg">
			<section id="mobile-menu" className="sm:hidden">
				<button onClick={toggleDrawer} className="cursor-pointer">
					<Image src={menuIcon} alt="mobileMenu" />
				</button>
				{isOpen && (
					<div
						className="fixed inset-0 bg-black bg-opacity-40 z-40"
						onClick={closeDrawer}
					/>
				)}
				{/* Drawer */}
				<div
					className={`fixed top-0 left-0 w-64 h-full bg-white shadow-md transform ${
						isOpen ? "translate-x-0" : "-translate-x-full"
					} transition-transform duration-300 ease-in-out z-50`}>
					<div className="p-4 border-b text-lg font-semibold">Menu</div>
					<ul className="p-4 space-y-3">
						<li>
							<a href="#" className="block text-gray-700 hover:text-blue-500">
								Home
							</a>
						</li>
						<li>
							<a href="#" className="block text-gray-700 hover:text-blue-500">
								About
							</a>
						</li>
						<li>
							<a href="#" className="block text-gray-700 hover:text-blue-500">
								Services
							</a>
						</li>
						<li>
							<a href="#" className="block text-gray-700 hover:text-blue-500">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</section>
			<section className="navbar-brand">
				<Link href="/">
					<Image src={logo} alt="mobilia logo" />
				</Link>
			</section>
			<main id="navbar-links-desktop" className="flex grow-1 hidden sm:block">
				<ul className="flex justify-around grow">
					<li className="display-2 cursor-pointer">Home</li>
					<li className="display-2 cursor-pointer">Shop</li>
					<li className="display-2 cursor-pointer">About</li>
					<li className="display-2 cursor-pointer">Contact</li>
				</ul>
			</main>
			<section id="navbar-cart" className="flex">
				<Link href="/search">
					<Image src={searchIcon} alt="searchIcon" className="margin-left-sm" />
				</Link>
				<Link href="/cart">
					<Image src={cart} alt="cart icon" className="margin-left-sm" />
				</Link>
			</section>
		</nav>
	);
};
export default Navbar;
