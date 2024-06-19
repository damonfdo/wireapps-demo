import React from "react";
import ProductCard from "./components/ProductCard";
import CategoryTile from "./components/CategoryTile";
import { useFetchProducts } from "./hooks/useFetchProducts";

function App() {
  const { products } = useFetchProducts();
  return (
    <>
      <h1 className="text-5xl font-bold underline">Hello world!</h1>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
      {categories.map((category) => (
        <CategoryTile key={category.slug} {...category} />
      ))}
    </>
  );
}

const categories = [
  {
    name: "Men's Clothing",
    slug: "men's clothing",
  },
  {
    name: "Women's Clothing",
    slug: "women's clothing",
  },
];
export default App;
