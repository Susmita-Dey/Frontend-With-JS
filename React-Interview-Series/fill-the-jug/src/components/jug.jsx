import React from "react";

const Jug = ({ fillWaterInJug }) => {
  return (
    <div className="w-[200px] h-[400px] border-gray-500 border-2 border-t-0 rounded-sm relative overflow-hidden">
      <div
        className="w-full bg-blue-600 opacity-70 absolute bottom-0 h-1/2 rounded transition-all duration-500 ease-in-out animate-fade-in"
        style={{ height: `${fillWaterInJug}%` }}
      >
        <span className="font-medium text-xl text-white animate-pulse text-center">
          {Math.round(fillWaterInJug)}%
        </span>
      </div>
    </div>
  );
};

export default Jug;
