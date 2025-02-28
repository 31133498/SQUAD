"use client";
import Hero from "@/components/Hero";
import Hostels from "@/components/Hostels";
import React, { useEffect, useState } from "react";

interface dataType {
  id: number;
  title: string;
  image: string;
  rating: number;
  price: number;
  availableSlot: number;
}

const Page = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [items, setItems] = useState<dataType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch('/api/items');\
        await new Promise((resolve) => setTimeout(resolve, 2000));
        const response = [
          {
            id: 1,
            title: "Green Wood Hostel",
            image: "/pic.png",
            rating: 4,
            price: 150000,
            availableSlot: 4,
          },
          {
            id: 2,
            title: "Campus View Hostel",
            image: "/pic.png",
            rating: 3,
            price: 180000,
            availableSlot: 2,
          },
        ];
        const data = response;
        setItems(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="">
      <Hero searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Hostels filteredItems={filteredItems} loading={loading} />
      </div>
    </main>
  );
};

export default Page;