import { Search } from "lucide-react";
import React from "react";

interface SearchProps {
    searchTerm: string;
    setSearchTerm: (item: string) => void;
}

const Hero = ({ searchTerm, setSearchTerm }: SearchProps) => {
const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value); // Update the parent component's state
};
  return (
    <div className="bg-[url(/bg.gif)] bg-cover bg-center px-10 py-16 text-white">
      <div className="max-w-2xl flex flex-col items-center mx-auto gap-10">
        <h1 className="text-2xl md:text-4xl font-bold">
          Find Your Perfect Hostel
        </h1>
        <div className="relative w-full text-black flex items-center">
          <Search size={18} className="absolute text-gray-500 left-2" />
          <input
            type="text"
            name="Search"
            className="w-full bg-white py-2 px-8 rounded-md border focus:border-black border-white"
            value={searchTerm}
            onChange={handleChange}
            placeholder="Search Hotels..."
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
