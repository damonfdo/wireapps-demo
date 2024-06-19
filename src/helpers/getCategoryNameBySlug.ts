import { CATEGORIES } from "../assets/constants/categories";

const getCategoryNameBySlug = (category: string): string => {
  const activeCategory = CATEGORIES.find(({ slug }) => slug === category);
  return activeCategory?.name || "None";
};
export default getCategoryNameBySlug;
