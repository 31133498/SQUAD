"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";

export default function Popup() {
    const [open, setOpen] = useState(false);
    const [formValues, setFormValues] = useState({
        productName: "",
        price: "",
        fullName: "",
        contactInfo: "",
        file: null,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, files } = event.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: files ? files[0] : value,
        }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const isValid = Object.values(formValues).every(value => value !== "" && value !== null);

        if (!isValid) {
            alert("Please fill in all fields.");
            return;
        }
        console.log(formValues);
    };

    return (
        <>
            {/* Floating Add Button */}
            <button
                onClick={() => setOpen(true)}
                className="fixed bottom-5 right-5 bg-green-600 text-white p-5 cursor-pointer rounded-full shadow-lg hover:bg-green-700 transition"
            >
                <Plus size={24} />
            </button>

            {/* Modal Overlay */}
            {open && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/70 p-4">
                    {/* Modal Content */}
                    <div className="bg-white p-6 rounded-lg shadow-lg w-[500px] relative">
                        {/* Close Button */}
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute top-3 right-3 text-green-600 bg-gray-50 hover:bg-gray-100 p-2 rounded-full cursor-pointer"
                        >
                            <X size={24} />
                        </button>

                        {/* Modal Header */}
                        <h2 className="text-lg font-semibold text-center text-green-700 mb-4">
                            Add Product
                        </h2>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                name="productName"
                                value={formValues.productName}
                                onChange={handleChange}
                                placeholder="Product Name"
                                className="w-full p-2 border rounded-md border-[#ddd]"
                                required
                            />
                            <input
                                type="number"
                                name="price"
                                value={formValues.price}
                                onChange={handleChange}
                                placeholder="Price"
                                className="w-full p-2 border rounded-md border-[#ddd]"
                                required
                            />
                            <input
                                type="text"
                                name="fullName"
                                value={formValues.fullName}
                                onChange={handleChange}
                                placeholder="Full Name"
                                className="w-full p-2 border rounded-md border-[#ddd]"
                                required
                            />
                            <input
                                type="text"
                                name="contactInfo"
                                value={formValues.contactInfo}
                                onChange={handleChange}
                                placeholder="Contact Info"
                                className="w-full p-2 border rounded-md border-[#ddd]"
                                required
                            />
                            <input
                                type="file"
                                name="file"
                                onChange={handleChange}
                                className="w-full p-2 border rounded-md border-[#ddd]"
                                required
                            />
                            <button
                                type="submit"
                                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
