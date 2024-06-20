import React from "react";
import { Product } from "../types/product";
import getBgColorByCategory from "../helpers/getBgColorByCategory";

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
  const bgColor = getBgColorByCategory(category);
  return (
    <div
      className="flex flex-col  justify-between max-w-sm h-[35rem] mx-auto bg-white container-shadow rounded-[1rem] border cursor-pointer "
      onClick={handleClick}
    >
      <div className="px-4 py-2">
        <h1 className="text-xl font-bold text-center">{title}</h1>
      </div>
      <img
        className="h-56 w-full object-contain mt-2"
        src={image}
        alt={title}
      />
      <div
        className="flex flex-col justify-center items-center px-6 py-4 rounded-[1rem]"
        style={{ backgroundColor: bgColor }}
      >
        <h2 className="text-2xl font-bold text-blue-600">Rs {price}</h2>
        <p className="mt-2 h-[100px] overflow-hidden text-ellipsis">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
