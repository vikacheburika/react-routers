import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { Link, NavLink } from "react-router-dom"

function Navigation() {

    return (
      <>
        <Nav>
          <Nav.Item>
            <Nav.Link as={Link} to="/">Home page (to-do list)</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/crazy" >Crazy</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/login" >Login</Nav.Link>
          </Nav.Item>
        </Nav>
      </>
    );
}

export default Navigation