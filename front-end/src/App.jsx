import "./App.css";
import { Navigation } from "./Components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { AllProducts } from "./Pages/AllProducts";
import { ProductDetails } from "./Pages/ProductDetails";
import { SideNav } from "./Components/SideNav";
import { Categorys } from "./Pages/Categorys";
import { useState } from "react";


function App() {

const [categories, setCategories] = useState('');

  return (
    <div className="app">
      <Navigation />
      <div className="containerr">
        <SideNav  setCategories={setCategories}/>
        <div className="content">
          <Routes>
            <Route path="/" element={<AllProducts />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/product/Categorys" element={<Categorys categories={categories} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
