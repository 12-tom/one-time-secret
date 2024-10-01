import React from "react";
import { Link } from "react-router-dom";

export const ErrorComponent: React.FC = ({}) => {
  return (
    <>
      <div className="py-8 px-16">
        <div className="m-auto flex items-center justify-center rounded-xl">
          <div className="w-[100px] h-[100px] rounded-full border flex items-center justify-center text-[48px] font-bold animate-bounce">
            !
          </div>
        </div>
        <h2 className="text-center font-[MonstBold] text-xl font-bold mt-4">
          Information not found
        </h2>
      </div>
      <button className="rounded-lg border text-lg font-semibold bg-[#1a1a1a] cursor-pointer transition-all hover:border-[#646cff] focus:outline-1 disabled w-fit mt-4 py-2 px-4">
        <Link to={"/"}>Return to Home</Link>
      </button>
    </>
  );
};
