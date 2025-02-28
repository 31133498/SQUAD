"use server";

import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Hostel {
  id: number;
  name: string;
  description: string;
  price: number;
  availableSlots: number;
  contact: string;
  imageUrl: string;
}

async function fetchHostel(id: string): Promise<Hostel | null> {
  try {
    const response = new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: parseInt(id, 10),
          name: "Greenwood Hostel",
          description:
            "Greenwood Hostel is a cozy and modern accommodation located just a few minutes away from the campus. It offers a peaceful environment with spacious rooms, high-speed Wi-Fi, and 24/7 security. Perfect for students who want a comfortable and safe place to stay.",
          price: 150000,
          availableSlots: 4,
          contact: "08012345678",
          imageUrl: "/pic.png",
        });
      }, 2000);
    });
    if (!response) {
      throw new Error("Failed to fetch hostel data");
    }
    return (await response) as Hostel;
  } catch (error) {
    console.error("Error fetching hostel data:", error);
    return null;
  }
}

export default async function HostelPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id
  const hostel = await fetchHostel(id);

  if (!hostel) {
    return (
      <p className="text-center text-red-500">Failed to load hostel data.</p>
    );
  }

  return (
    <div className="flex flex-col justify-center items-start gap-2 py-6 px-4 bg-gray-100">
      <Link
        href="/"
        className="flex items-center text-green-500 mb-4 rounded-full bg-white p-2"
      >
        <ChevronLeft />
      </Link>
      <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <Image
          src={hostel.imageUrl}
          alt={hostel.name}
          width={700}
          height={400}
          className="rounded-lg"
        />
        <h2 className="text-2xl font-bold text-center mt-4">{hostel.name}</h2>
        <p className="text-gray-600 mt-2">{hostel.description}</p>
        <p className="text-lg font-semibold mt-2">
          Price: ₦{hostel.price.toLocaleString()} / year
        </p>
        <p className="text-lg mt-2">Available Slots: {hostel.availableSlots}</p>
        <p className="text-lg mt-2">Contact: {hostel.contact}</p>
        <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
          Book Now
        </button>
      </div>
    </div>
  );
}
