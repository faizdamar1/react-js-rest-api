import { Button } from "reactstrap";
import React, { useState, useContext } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
} from "reactstrap";

import { NavLink } from "react-router-dom";
import { CartContext } from "../../Context/CartContext ";

const NavbarComp = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const { value, setValue } = useContext(CartContext);
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand to="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/mahasiswa">
                Mahasiswa
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/kelas">
                Class
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/hooks">
                Hooks
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/useeffects">
                Hooks useEffect
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/product">
                Produk
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/reducer">
                Reducer
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>
            <Button color="danger">
              <i className="fa fa-shopping-cart mr-2"></i>
              <span className="badge badge-light">{value}</span>
            </Button>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
