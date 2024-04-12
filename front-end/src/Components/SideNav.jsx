import { Button } from "react-bootstrap";
import {useNavigate} from 'react-router-dom';

export const SideNav = ({setCategories}) => {

    const navigate = useNavigate();

    function handleClick(cat) {
        setCategories(cat);
        navigate(`/product/Categories`)
        
    }
  return (
    <div>
      <h4>Filter by categories</h4>
      <Button variant="light" onClick={handleClick('mens')} >Men's</Button>
      <Button variant="light">Women's</Button>
      <Button variant="light">Jewlery</Button>
      <Button variant="light">Electronics</Button>
    </div>
  );
};
