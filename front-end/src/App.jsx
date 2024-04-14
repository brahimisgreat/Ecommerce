import "./App.css";
import { Navigation } from "./Components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { AllProducts } from "./Pages/AllProducts";
import { ProductDetails } from "./Pages/ProductDetails";
import { SideNav } from "./Components/SideNav";
import { useState } from "react";
import { Electronics } from "./Pages/filters/Electronics";
import Jewelery from "./Pages/filters/Jewelery";
import Womens from "./Pages/filters/Womens";
import Mens from "./Pages/filters/Mens";


function App() {

const [categories, setCategories] = useState('jewelery');

  return (
    <div className="app">
      <Navigation />
      <div className="containerr">
        <SideNav  setCategories={setCategories} categories={categories}/>
        <div className="content">
          <Routes>
            <Route path="/" element={<AllProducts />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/product/categorys/electronics" element={<Electronics />} />
            <Route path="/product/categorys/jewelery" element={<Jewelery />} />
            <Route path="/product/categorys/womens" element={<Womens />} />
            <Route path="/product/categorys/mens" element={<Mens />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
