import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecipeDetail from "./pages/RecipeDetail";
import NotFound from "./pages/404";
import Acceuil from "./pages/Acceuil";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Acceuil />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;