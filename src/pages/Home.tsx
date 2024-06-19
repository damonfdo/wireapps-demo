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
    <div className="container flex flex-col gap-8 my-12">
      <section id="flashSale" className="flex flex-col gap-8 ">
        <SectionTitle name="Flash Sale" />
        <div className="overflow-x-auto">
          <div className="flex flex-row flex-nowrap space-x-4">
            {products.map((product) => (
              <div className="w-1/4 min-w-[25%]" key={product.id}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="categories" className="flex flex-col gap-8">
        <SectionTitle name="Categories" />
        <div className="flex flex-row justify-between gap-4 w-[100%]">
          {CATEGORIES.map((category) => (
            <CategoryTile key={category.slug} {...category} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
