import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Image, Row, Col } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";

export const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const SingleProduct = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
      console.log(typeof data);
    };
    SingleProduct();
  }, []);

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col>
          <Image src={product.image}  alt={product.name} fluid />
        </Col>
        <Col>
            <ListGroup variant="flush">
            <ListGroup.Item>
                <h3>{product.title}</h3>
            </ListGroup.Item>
            </ListGroup>
        </Col>
       
      </Row>
    </>
  );
};
