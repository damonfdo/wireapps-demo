import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Loading from "./components/Loading";

const HomePage = React.lazy(() => import("./pages/Home"));
const CategoryPage = React.lazy(() => import("./pages/Category"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Header />
        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/category/:name" element={<CategoryPage />} />
          </Routes>
        </main>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
