import { HostelCard } from "@/components/HostelCard";

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