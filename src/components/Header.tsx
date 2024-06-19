import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className="border-b-4 border-[#D9D9D9]">
      <header className="flex my-5 justify-center">
        <Link to="/" className="text-4xl font-bold text-center">
          {/* for SEO benefits keeping atleast one H1  */}
          <h1>Modern Walk</h1>
        </Link>
      </header>
    </div>
  );
};

export default Header;
