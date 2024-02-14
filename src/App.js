import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CatEdit from "./pages/CatEdit";
import CatIndex from "./pages/CatIndex";
import CatNew from "./pages/CatNew";
import CatShow from "./pages/CatShow";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import "./App.css";
import { Routes, Route } from "react-router-dom";
// import mockCats from "./mockCats"
import { useEffect } from "react";

const App = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    readCat();
  }, []);

  const readCat = () => {
    fetch("https://cat-tinder-1kpk.onrender.com/cats")
      .then((response) => response.json())
      .then((data) => setCats(data))
      .catch((error) => console.log(("Cat read errors:", error)));
  };

  const createCat = (cat) => {
    fetch("https://cat-tinder-1kpk.onrender.com/cats", {
      body: JSON.stringify(cat),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => response.json())
      .then(() => readCat())
      .catch((errors) => console.log("Cat create errors:", errors));
  };
  const updateCat = (cat, id) => {
    console.log("cat:", cat);
    console.log("id:", id);
  };
  console.log(cats);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/catindex" element={<CatIndex cats={cats} />} />
        <Route path="/catshow/:id" element={<CatShow cats={cats} />} />
        <Route path="/catnew" element={<CatNew createCat={createCat} />} />
        <Route path="/catedit/:id" element={<CatEdit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
