"use server";

import Rating from "@/components/Rating";
// import { ChevronLeft } from "lucide-react";
import Image from "next/image";
// import Link from "next/link";

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
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const hostel = await fetchHostel(id);

  if (!hostel) {
    return (
      <p className="text-center text-red-500">Failed to load hostel data.</p>
    );
  }

  return (
    <div className="flex flex-col justify-center items-start gap-2 py-6 px-4 bg-gray-100">
      <HostelCard
        name={hostel.name}
        description={hostel.description}
        price={hostel.price.toString()}
        availableSlots={hostel.availableSlots}
        contact={hostel.contact}
        imageUrl={hostel.imageUrl}
      />
    </div>
  );
}

interface HostelProps {
  name: string;
  description: string;
  price: string;
  availableSlots: number;
  contact: string;
  imageUrl: string;
}

export async function HostelCard({
  name,
  description,
  price,
  availableSlots,
  contact,
  imageUrl,
}: HostelProps) {
  return (
    <>
      <div className="mx-auto max-w-[800px] w-full bg-white rounded-lg shadow-lg overflow-hidden p-6 gap-4 flex flex-col">
        <Image
          src={imageUrl}
          alt={name}
          width={600}
          height={300}
          className="w-full h-64 object-cover rounded-lg"
        />
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-green-700">{name}</h2>
          <p className="text-gray-600 mt-2">{description}</p>
          <p className="mt-4 font-bold text-green-600">
            Price:{" "}
            <span className="text-gray-600 font-medium">{price} / year</span>
          </p>
          <p className="font-bold text-green-600">
            Available Slots:{" "}
            <span className="text-gray-600 font-medium">{availableSlots}</span>
          </p>
          <p className="font-bold text-green-600">
            Contact:{" "}
            <span className="text-gray-600 font-medium">{contact}</span>
          </p>
          <button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg cursor-pointer">
            Book Now
          </button>
        </div>

        {/* Rating Section */}
      </div>
      <Rating />
    </>
  );
}
