"use client";
import { isSidebarOpen } from "@/lib/store";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useChunk } from "stunk/react";

const navLinks = [
	{ name: "My Account", href: "/account" },
	{ name: "Hostels", href: "/" },
	{ name: "Appliances", href: "/appliances" },
];

const Header = () => {
	const pathname = usePathname();
	const [isOpen /*setIsOpen*/] = useState(false);
	const [, update, ,] = useChunk(isSidebarOpen);
	const handleClick = () => {
		// setIsOpen(!isOpen);
		update(true);
	};
	return (
		<>
			<div className="w-full bg-white">
				<header className="flex mx-auto px-4 sm:px-6 lg:px-8 py-2 bg-white items-center justify-between text-black">
					<div className="flex items-center gap-5">
						<button onClick={handleClick} className="cursor-pointer">
							<Menu className={`${isOpen && " opacity-0"}`} />
						</button>
						<Link href="/">
							<Image src="/Campus.png" alt="Campus Nest logo" width={192} height={90} />
						</Link>
					</div>
				</header>
			</div>
			<div
				className={`fixed top-0 w-[250px] flex flex-col transition-all h-screen duration-300 bg-white p-4 gap-4 text-black shadow-xl z-10 ${
					isOpen ? "left-0" : "-left-full"
				}`}
			>
				<button className="cursor-pointer p-1 hover:bg-gray-100 self-end flex rounded-md" onClick={handleClick}>
					<X />
				</button>
				<nav className="flex flex-col gap-2">
					{navLinks.map((link, i) => (
						<Link
							key={i}
							href={link.href}
							className={`text-gray-900 p-3 rounded-md hover:bg-[#107b1a] hover:text-white transition-all duration-300 ${
								pathname === link.href ? "bg-[#107b1a] text-white" : ""
							}`}
						>
							{link.name}
						</Link>
					))}
				</nav>
			</div>
		</>
	);
};

export default Header;
