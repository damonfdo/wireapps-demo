import React from "react";
import { Category } from "../types/category";
import { Link } from "react-router-dom";
import getBgColorByCategory from "../helpers/getBgColorByCategory";

const CategoryTile: React.FC<Category> = ({ name, slug }) => {
  const bgColor = getBgColorByCategory(slug);

  return (
    <Link
      to={`/category/${slug}`}
      className="flex w-[100%] min-h-44 mx-auto container-shadow rounded-[1rem] border cursor-pointer items-center justify-center px-4"
      style={{ backgroundColor: bgColor }}
    >
      <p className="text-gray-200  text-2xl font-bold">{name}</p>
    </Link>
  );
};

export default CategoryTile;
