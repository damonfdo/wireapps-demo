import React from "react";
import { useFetchProducts } from "../hooks/useFetchProducts";
import ProductCard from "../components/ProductCard";
import Error from "../components/Error";
import Loading from "../components/Loading";
import { CATEGORIES } from "../assets/constants/categories";
import CategoryTile from "../components/CategoryTile";
import SectionTitle from "../components/SectionTitle";

const Home: React.FC = () => {
  const { products, error, loading } = useFetchProducts();
  if (error) {
    return <Error />;
  }
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="container flex flex-col gap-8">
      <section id="flashSale" className="flex flex-col gap-8">
        <SectionTitle name="Flash Sale" />
        <div className="flex flex-row flex-wrap">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>
      <section id="categories" className="flex flex-col gap-8">
        <SectionTitle name="Categories" />
        <div className="flex w-[100%] flex-row h-[40rem] gap-4 overflow-x-hidden">
          {CATEGORIES.map((category) => (
            <CategoryTile key={category.slug} {...category} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
