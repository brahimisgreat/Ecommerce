import "./App.css";
import { Navigation } from "./Components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { AllProducts } from "./Pages/AllProducts";
import { ProductDetails } from "./Pages/ProductDetails";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<AllProducts />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
