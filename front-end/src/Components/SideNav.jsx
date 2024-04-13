import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const SideNav = ({ setCategories, categories }) => {

  
  return (
    <div>
      <h4>Filter by categories</h4>
      <div>
      <Button variant="light" onClick={() =>{setCategories(`men's clothing`),console.log(categories)} }>Men's</Button>
      <Button variant="light" onClick={() =>{setCategories(`women's clothing`),console.log(categories)} }>Women's</Button>
      <Button variant="light" onClick={() =>{setCategories('jewlery'),console.log(categories)} }>Jewlery</Button>
      <Button variant="light" onClick={() =>{setCategories('electronics'),console.log(categories)} }>Electronics</Button>
      </div>
      <Button><Link to="/product/Categorys">filter items</Link></Button>
    </div>
  );
};
