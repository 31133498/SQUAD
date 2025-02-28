import Image from "next/image";
import Rating from "./Rating";


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
  