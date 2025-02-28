'use client';

import { useState } from "react";
import type { FC } from "react";

const Onboarding: FC = () => {
  const [userType, setUserType] = useState<"student" | "landlord" | "vendor">("student");

  return (
    <div className="mx-auto max-w-[800px] p-8 bg-white rounded-lg shadow-md my-10 md:max-w-3xl lg:max-w-4xl gap-[20px] flex flex-col">
      <h1 className="text-green-700 text-center text-3xl font-bold">
        Welcome to CampusNest
      </h1>
      <p className="text-center mb-6 text-gray-600 md:text-lg">
        Get started by selecting your account type
      </p>
      
      <div className="flex flex-col md:flex-row justify-center gap-4 mb-6">
        {[{ label: "Student", value: "student" as const },
          { label: "House Owner", value: "landlord" as const },
          { label: "Vendor", value: "vendor" as const }].map((btn) => (
          <button
            key={btn.value}
            onClick={() => setUserType(btn.value)}
            className={`px-6 py-2 border-2 rounded-lg transition-colors duration-300 text-sm md:text-base lg:text-lg cursor-pointer border-green-700 ${
              userType === btn.value
                ? "bg-green-700 text-white"
                : "text-green-700"
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>
      
      {userType === "student" && <StudentForm />}
      {userType === "landlord" && <LandlordForm />}
      {userType === "vendor" && <VendorForm />}
    </div>
  );
};

const StudentForm: FC = () => (
  <form className="flex flex-col w-full gap-4">
    <Input label="Phone Number" type="tel" placeholder="+234 800 000 0000" />
    <Input label="Email Address" type="email" placeholder="example@school.edu.ng" />
    <Select label="Institution" options={["University of Lagos", "Lagos State University", "Yaba College of Technology"]} className="md:col-span-2" />
    <SubmitButton label="Create Student Account"/>
  </form>
);

const LandlordForm: FC = () => (
  <form className="flex flex-col gap-4">
    <Input label="Phone Number" type="tel" placeholder="+234 800 000 0000" />
    <Input label="Email Address" type="email" placeholder="owner@example.com" />
    <Select label="Property Type" options={["Private Hostel", "Apartment Building", "Service Estate"]} className="md:col-span-2" />
    <SubmitButton label="Create Landlord Account"  />
  </form>
);

const VendorForm: FC = () => (
  <form className="flex flex-col gap-4 ">
    <Input label="Business Phone" type="tel" placeholder="+234 800 000 0000" />
    <Input label="Business Email" type="email" placeholder="contact@business.com" />
    <Input label="Business Name" type="text" placeholder="Enter business name" className="md:col-span-2" />
    <Select label="Service Type" options={["Appliance Vendor", "Maintenance Services", "Food Services"]} className="md:col-span-2" />
    <SubmitButton label="Create Vendor Account" />
  </form>
);

interface InputProps {
  label: string;
  type: string;
  placeholder: string;
  className?: string;
}

const Input: FC<InputProps> = ({ label, type, placeholder, className = "" }) => (
  <div className={className}>
    <label className="block font-bold mb-1 text-gray-700">{label}</label>
    <input type={type} placeholder={placeholder} required className="w-full p-2 border border-gray-300 rounded" />
  </div>
);

interface SelectProps {
  label: string;
  options: string[];
  className?: string;
}

const Select: FC<SelectProps> = ({ label, options, className = "" }) => (
  <div className={className}>
    <label className="block font-bold mb-1 text-gray-700">{label}</label>
    <select required className="w-full p-2 border border-gray-300 rounded">
      <option value="">Select {label}</option>
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  </div>
);

interface SubmitButtonProps {
  label: string;
  className?: string;
}

const SubmitButton: FC<SubmitButtonProps> = ({ label, className = "" }) => (
  <button type="submit" className={`w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800 transition cursor-pointer ${className}`}> 
    {label}
  </button>
);

export default Onboarding;
