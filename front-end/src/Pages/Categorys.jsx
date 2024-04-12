import { Card, Col, Container, Image, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const Categorys = ({Categorys}) => {
    
    const [data, setProducts] = useState({});
    useEffect(() => {
    const fetchProducts = async () => {
        const res = await fetch(`https://fakestoreapi.com/products/${Categorys}`);
        const data = await res.json();
        setProducts(data);
        console.log(data);
    };
    fetchProducts();
    }, []);
  return (

    <Container>
      <Row>
        {data.map((product) => (
          <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
            <Card className="my-3 p-3 rounded">
              <Link to={`/product/${product.id}`}>
                <Image src={product.image} fluid />
              </Link>
              <Card.Body>
                <Link to={`/product/${product.id}`}>
                  <Card.Title as="div">
                    <strong>{product.title}</strong>
                  </Card.Title>
                </Link>
                <Card.Text as="div">
                  <div className="my-3">
                    {product.rating.rate} from {product.rating.count} reviews
                  </div>
                </Card.Text>
                <Card.Text as="h3">${product.price}</Card.Text>
                <Button>Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
