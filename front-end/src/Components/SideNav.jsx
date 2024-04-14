import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const SideNav = ({ setCategories, categories }) => {

  
  return (
    <div>
      <h4>Filter by categories</h4>
      <div>
      <Button variant="light"><Link to="/product/categorys/mens">Men's</Link></Button>
      <Button variant="light"><Link to="/product/categorys/womens">Women's</Link></Button>
      <Button variant="light"><Link to="/product/categorys/jewelery">jewelery</Link></Button>
      <Button variant="light"><Link to="/product/categorys/electronics">electronics</Link></Button>
      </div>
    </div>
  );
};
