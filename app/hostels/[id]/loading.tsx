import React from "react";

const loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="inline-block w-20 h-20">
        <div className="w-16 h-16 m-2 border-4 border-solid border-black border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default loading;
