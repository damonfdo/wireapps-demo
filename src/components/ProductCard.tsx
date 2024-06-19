import React from "react";
import { Product } from "../types/product";

const ProductCard: React.FC<Product> = ({
  id,
  title,
  description,
  price,
  category,
  image,
}) => {
  const handleClick = () => {
    //TODO:: Navigate to product view page
    console.log(`Navigate to product with id ${id}`);
  };
  return (
    <div
      className="max-w-sm mx-auto bg-white shadow-lg rounded-[1rem] overflow-hidden border cursor-pointer "
      onClick={handleClick}
    >
      <div className="px-4 py-2">
        <h1 className="text-xl font-bold text-gray-800">{title}</h1>
      </div>
      <img
        className="h-56 w-full object-contain mt-2"
        src={image}
        alt={title}
      />
      <div
        className={`${
          category === "men's clothing" ? "bg-[#2BD9AF]" : "bg-[#FF5E84]"
        } px-6 py-4 rounded-[1rem]`}
      >
        <h2 className="text-xl font-bold text-blue-600">Rs {price}</h2>
        <p className="text-gray-200 mt-2 text-ellipsis overflow-hidden">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
