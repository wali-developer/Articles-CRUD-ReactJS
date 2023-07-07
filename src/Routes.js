import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import { FavoriteProvider } from "./context/favouriteContext";
import FavoriteArticles from "./Pages/favourite";

const AppRoutes = () => {
  return (
    <FavoriteProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourite-articles" element={<FavoriteArticles />} />
        </Routes>
      </BrowserRouter>
    </FavoriteProvider>
  );
};

export default AppRoutes;
