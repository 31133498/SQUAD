"use client";
import { Star } from "lucide-react";
import React, { useState } from "react";

const Rating = () => {
  const [rating, setRating] = useState(0);
  return (
    <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-6 mx-auto">
      <h3 className="text-lg font-bold text-green-700 text-center">
        Rate this Hostel
      </h3>
      <div className="flex justify-center mt-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
          key={star}
            onClick={() => setRating(star)}
            className={`w-6 h-6 cursor-pointer mx-1 ${
              star <= rating ? "fill-yellow-500 text-yellow-500" : "text-gray-300"
            }`}
          />
        ))}
      </div>
      <p className="text-center mt-2 text-gray-600">
        Average Rating: {rating}/5
      </p>
      <button className="mt-2 w-full border border-gray-300 text-gray-700 py-2 rounded-lg">
        Your Rating
      </button>
    </div>
  );
};

export default Rating;
