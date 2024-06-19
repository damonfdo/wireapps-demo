import React from "react";
import { useParams } from "react-router-dom";
import { useFetchProducts } from "../hooks/useFetchProducts";
import Loading from "../components/Loading";
import Error from "../components/Error";
import ProductCard from "../components/ProductCard";

const Category: React.FC = () => {
  const { name } = useParams();
  const { products, loading, error } = useFetchProducts(name);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <div>
      {name}
      <div className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Category;
