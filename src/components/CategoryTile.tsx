import React from "react";
import { Category } from "../types/category";

const CategoryTile: React.FC<Category> = ({ name, slug }) => {
  const handleClick = () => console.log(`Navigate to ${slug}`);
  return (
    <div
      className="max-w-sm mx-auto bg-white shadow-lg rounded-[1rem] overflow-hidden border cursor-pointer "
      onClick={handleClick}
    >
      <div
        className={`${
          slug === "men's clothing" ? "bg-[#2BD9AF]" : "bg-[#FF5E84]"
        } px-6 py-4 rounded-[1rem]`}
      >
        <p className="text-gray-200 mt-2 text-ellipsis overflow-hidden">
          {name}
        </p>
      </div>
    </div>
  );
};

export default CategoryTile;
