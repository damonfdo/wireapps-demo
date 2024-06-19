import React from "react";
import { Product } from "../types/product";
import fetchProducts from "../services/fetchProductService";

export const useFetchProducts = (category?: string, limit: number = 8) => {
  const [products, setProducts] = React.useState<Product[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchProductData = async () => {
      try {
        setLoading(true);
        const data = await fetchProducts(category, limit);
        setProducts(data);
      } catch (error) {
        setError("Failed to fetch products.");
      } finally {
        setLoading(false);
      }
    };
    fetchProductData();
  }, [category, limit]);

  return { products, loading, error };
};
