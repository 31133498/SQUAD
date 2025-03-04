"use client";

import { isSidebarOpen } from "@/lib/store";
import { useChunk } from "stunk/react";
import { BuildingIcon, UserCircle2Icon, WashingMachineIcon, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
	{ name: "My Account", href: "/account", icon: UserCircle2Icon, title: "Your Profile" },
	{ name: "Hostels", href: "/", icon: BuildingIcon, title: "Buildings" },
	{ name: "Appliances", href: "/appliances", icon: WashingMachineIcon, title: "Appliances" },
];

export function Sidebar() {
	const [value, update] = useChunk(isSidebarOpen);

	return (
		<div
			className={`${
				value ? "w-[300px]" : " w-[70px]"
			} hidden sm:block h-screen overflow-x-hidden sticky top-0 px-2.5 transition-all duration-300 bg-white`}
		>
			<div className="mt-5 mb-10 place-items-end mr-2.5">
				<X
					size={30}
					className={`${!value && "opacity-0"} cursor-pointer hover:text-green-500 transition`}
					onClick={() => {
						update(false);
					}}
				/>
			</div>

			{navLinks.map((val, idx) => {
				return (
					<div key={idx}>
						<Link
							href={val.href}
							title={val.title}
							aria-label={val.title}
							className="flex w-[200px] overflow-hidden items-center rounded-lg gap-5 px-2.5 py-3 hover:bg-green-600 hover:text-white transition duration-200 ease-in-out"
						>
							<val.icon size={30} /> <div className="">{val.name}</div>
						</Link>
					</div>
				);
			})}
		</div>
	);
}
