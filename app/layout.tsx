import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Sidebar } from "@/components/WideSideBar";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Campus Nest",
	description: "Book Hostels and Appliances for your campus",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100`}>
				<div className="flex w-full">
					<Sidebar />
					<div className="w-full h-full overflow-auto">
						<Header />
						{children}
					</div>
				</div>
			</body>
		</html>
	);
}
