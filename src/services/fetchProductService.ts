import axios from "axios";

const API_ENDPOINT = "  "; // Ideally from env, ignoring here hence demo

async function fetchProducts(category?: string, limit: number = 8) {
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
