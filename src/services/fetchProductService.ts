import axios from "axios";
import { Product } from "../types/product";

const API_ENDPOINT = "https://fakestoreapi.com/products/"; // Ideally from env, ignoring here hence demo

async function fetchProducts(
  category?: string,
  limit: number = 8
): Promise<Product[]> {
  try {
    // Create url to fetch products based on category
    const url = category
      ? `${API_ENDPOINT}/category/${category}`
      : API_ENDPOINT;
    const res = await axios.get(`${url}?limit=${limit}`);

    return res.data;
  } catch (error) {
    console.log("Failed to fetch products. Error: ", error);
    throw error;
  }
}

export default fetchProducts;
