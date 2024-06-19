const getBgColorByCategory = (category: string) => {
  // Remove white spaces, apostrophe
  const strippedCategory = category
    .replace(" ", "")
    .replace("'", "")
    .toLowerCase();

  let color: string;
  switch (strippedCategory) {
    case "mensclothing":
      color = "#2BD9AF";
      break;
    case "womensclothing":
      color = "#FF5E84";
      break;
    default:
      color = "#FF5E84";
      break;
  }
  return color;
};

export default getBgColorByCategory;
