import React from "react";
import ProductCard from "./components/ProductCard";
import CategoryTile from "./components/CategoryTile";

function App() {
  return (
    <>
      <h1 className="text-5xl font-bold underline">Hello world!</h1>
      {dummyProduct.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
      {categories.map((category) => (
        <CategoryTile key={category.slug} {...category} />
      ))}
    </>
  );
}
const dummyProduct = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
];

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
