import React from "react";
import { useParams } from "react-router-dom";
import { useFetchProducts } from "../hooks/useFetchProducts";
import Loading from "../components/Loading";
import Error from "../components/Error";
import ProductCard from "../components/ProductCard";
import SectionTitle from "../components/SectionTitle";
import getCategoryNameBySlug from "../helpers/getCategoryNameBySlug";

const Category: React.FC = () => {
  const { name } = useParams();
  const { products, loading, error } = useFetchProducts(name);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  const category = getCategoryNameBySlug(name || "");
  return (
    <div className="container flex flex-col gap-8 my-12">
      <SectionTitle name={category} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard {...product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Category;
