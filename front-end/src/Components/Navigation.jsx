import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const Navigation = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">ProShop</Navbar.Brand>
        <Nav className="my-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Cart</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
