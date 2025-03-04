"use client";
import Hero from "@/components/Hero";
import Hostel from "@/components/Hostel";
import Popup from "@/components/Popup";
import React, { useEffect, useState } from "react";

interface DataType {
	id: number;
	title: string;
	image: string;
	rating: number;
	price: number;
	availableSlot: number;
}

const Page = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [items, setItems] = useState<DataType[]>([]);
	// const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				// const response = await fetch('/api/items');\
				await new Promise((resolve) => setTimeout(resolve, 2000));
				const response = [
					{
						id: 1,
						title: "UNILAG Consult Limited Female Hostel",
						image: "/UCLFH.jpeg",
						rating: 4,
						price: 250000,
						availableSlot: 4,
					},
					{
						id: 2,
						title: "Henry Carr Post Graduate Hall",
						image: "/HCPGH.jpeg",
						rating: 3,
						price: 300000,
						availableSlot: 2,
					},
					{
						id: 3,
						title: "JAJA Hall",
						image: "/JAJA.jpeg",
						rating: 4,
						price: 280000,
						availableSlot: 4,
					},
					{
						id: 4,
						title: "Makama Bida Hall",
						image: "/MBH.jpeg",
						rating: 3,
						price: 270000,
						availableSlot: 2,
					},
					{
						id: 5,
						title: "Honours Hall",
						image: "/HONOURS.jpg",
						rating: 4,
						price: 400000,
						availableSlot: 4,
					},
					{
						id: 6,
						title: "Mariere Hall",
						image: "/MARIERE.jpeg",
						rating: 3,
						price: 260000,
						availableSlot: 2,
					},
					{
						id: 7,
						title: "Elkanemi Hall",
						image: "/ELKANEMI.jpeg",
						rating: 4,
						price: 150000,
						availableSlot: 4,
					},
				];
				const data = response;
				setItems(data);
			} catch (error) {
				console.error("Error fetching data:", error);
			} finally {
				// setLoading(false);
			}
		};

		fetchData();
	}, []);

	const filteredItems = items.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()));

	return (
		<main>
			<Hero searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
					{filteredItems.map((val) => (
						<Hostel key={val.id} {...val} />
					))}
				</div>

				{/* <>
					{loading ? (
						<li key="loading" className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-2 items-center col-span-full">
							{Array.from({ length: 8 }).map((_, index) => (
								<div key={index} className="bg-gray-200 animate-pulse h-60 w-full rounded-lg"></div>
							))}
						</li>
					) : (
						<li className="col-span-full text-center text-gray-500">No results found</li>
					)}
				</> */}
			</div>
			<Popup />
		</main>
	);
};

export default Page;
