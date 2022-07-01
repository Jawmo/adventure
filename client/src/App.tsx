import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeView } from "./views/HomeView";
import { LoginView } from "./views/LoginView";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/login" element={<LoginView />} />
      </Routes>
    </BrowserRouter>
  );
};
