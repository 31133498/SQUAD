import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface filteredProps {
  filteredItems: {
    id: number;
    title: string;
    image: string;
    rating: number;
    price: number;
    availableSlot: number;
  }[];
  loading: boolean;
}

const Hostels = ({ filteredItems, loading }: filteredProps) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredItems.length > 0 ? (
        filteredItems.map(
          ({ image, title, rating, price, availableSlot, id }) => (
            <div
              key={id}
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 transform transition-transform duration-300 hover:scale-105"
            >
              <div className="relative w-full h-40">
                <Image
                  src={image}
                  alt={title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                <div className="flex items-center gap-1 my-2">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      size={16}
                      color={index < rating ? "#facc15" : "#d1d5db"}
                      fill={index < rating ? "#facc15" : "none"}
                    />
                  ))}
                </div>
                <p className="text-gray-700 font-medium">₦{price.toLocaleString()} / year</p>
                <p className="text-gray-500 text-sm">
                  Available Slots: {availableSlot}
                </p>
                <Link
                  href={`/hostels/${id}`}
                  className="mt-4 w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-300 cursor-pointer block text-center"
                >
                  Book Now
                </Link>
              </div>
            </div>
          )
        )
      ) : (
        <>
          {loading ? (
            <li key="loading" className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-2 items-center col-span-full">
              {Array.from({ length: 8 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-gray-200 animate-pulse h-60 w-full rounded-lg"
                ></div>
              ))}
            </li>
          ) : (
            <li className="col-span-full text-center text-gray-500">
              No results found
            </li>
          )}
        </>
      )}
    </ul>
  );
};

export default Hostels;
