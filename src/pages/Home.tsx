import React from "react";
import { useFetchProducts } from "../hooks/useFetchProducts";
import ProductCard from "../components/ProductCard";
import Error from "../components/Error";
import Loading from "../components/Loading";
import { CATEGORIES } from "../constants/categories";
import CategoryTile from "../components/CategoryTile";
import SectionTitle from "../components/SectionTitle";

const Home: React.FC = () => {
  const { products, error, loading } = useFetchProducts(undefined, 8);
  if (error) {
    return <Error />;
  }
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="container flex flex-col gap-8 my-12">
      <section id="flashSale" className="flex flex-col gap-8 ">
        <SectionTitle name="Flash Sale" />
        {/* Scrollable Flash sale  */}
        <div className="overflow-x-auto no-scrollbar">
          <div className="flex flex-row flex-nowrap space-x-4">
            {products.map((product) => (
              <div className="flex-none w-64" key={product.id}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
        {/* Grid based Flash sale  */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 ">
          {products.map((product) => (
            <div className="flex-none" key={product.id}>
              <ProductCard {...product} />
            </div>
          ))}
        </div> */}
      </section>
      <section id="categories" className="flex flex-col gap-8">
        <SectionTitle name="Categories" />
        <div className="flex flex-col md:flex-row justify-between gap-4 w-[100%]">
          {CATEGORIES.map((category) => (
            <CategoryTile key={category.slug} {...category} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
