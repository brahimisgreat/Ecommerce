import React from "react";
import { useState, useEffect } from "react";

const Jewelery = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(
        `https://fakestoreapi.com/products/category/jewelery`
      );
      const data = await res.json();
      setProducts(data);
      console.log(products);
    };
    fetchProducts();
  }, []);

  return (
    <div>
    {products.map((item)=>(
        <div key={item.id}>
            <h1>{item.title}</h1>
            <h1>{item.price}</h1>
            <img src={item.image} alt={item.title} />
        </div>
    ))}
    </div>
  )
};

export default Jewelery;
