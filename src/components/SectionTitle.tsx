import React from "react";

interface SectionTitleProps {
  name: string;
}
const SectionTitle: React.FC<SectionTitleProps> = ({ name }) => {
  return <h2 className="text-2xl text-left font-bold">{name}</h2>;
};

export default SectionTitle;
