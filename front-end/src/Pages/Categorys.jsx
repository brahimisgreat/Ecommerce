import { Card, Col, Container, Image, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const Categorys = ({categories}) => {
    
    const [products, setProducts] = useState({});

    useEffect(() => {
    const fetchProducts = async () => {
        const res = await fetch(`https://fakestoreapi.com/products/category/${categories}`);
        const data = await res.json();
        setProducts(data);
        console.log(data);
    };
    fetchProducts();
    }, []);
  return (

    <div>
       {products.map((item)=>(
        <h1>{item.id}</h1>
       ))}
    </div>
  );
};
